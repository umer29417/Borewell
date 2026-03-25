import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { PMREMGenerator } from "three/src/extras/PMREMGenerator";

import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader";

import gsap from "gsap";
import Navbar from "../NavBar/Navbar";

const Hero = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      40,
      window.innerWidth / window.innerHeight,
      0.1,
      100,
    );

    camera.position.z = window.innerWidth < 768 ? 6 : 4;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });

    renderer.setClearColor(0x000000, 0);

    renderer.domElement.style.pointerEvents = "none";

    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    const composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));

    const rgbShiftPass = new ShaderPass(RGBShiftShader);
    rgbShiftPass.uniforms["amount"].value = 0.0035;
    composer.addPass(rgbShiftPass);

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);

      composer.setSize(width, height);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const rgbeLoader = new RGBELoader();
    const pmremGenerator = new PMREMGenerator(renderer);

    let model;

    rgbeLoader.load(
      "https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/pond_bridge_night_1k.hdr",
      (texture) => {
        const envMap = pmremGenerator.fromEquirectangular(texture).texture;
        scene.environment = envMap;

        texture.dispose();
        pmremGenerator.dispose();

        const loader = new GLTFLoader();
        loader.load("/DamagedHelmet.gltf", (gltf) => {
          model = gltf.scene;

          if (window.innerWidth < 768) {
            model.scale.set(0.8, 0.8, 0.8);
          }

          scene.add(model);
        });
      },
    );

    const handleMouseMove = (e) => {
      if (!model) return;

      const rotationX = (e.clientX / window.innerWidth - 0.5) * (Math.PI * 0.3);
      const rotationY =
        (e.clientY / window.innerHeight - 0.5) * (Math.PI * 0.3);

      gsap.to(model.rotation, {
        y: rotationX,
        x: rotationY,
        duration: 0.6,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    renderer.autoClear = false;

    const animate = () => {
      requestAnimationFrame(animate);
      composer.render();
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden relative bg-black z-10">
      {/* ✅ SEO CONTENT (visible to Google) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center z-20 text-white px-4">
        <h1 className="text-2xl md:text-4xl font-bold">
          Borewell Services in Karnataka
        </h1>

        <p className="mt-3 text-sm md:text-lg max-w-xl mx-auto">
          We provide professional borewell drilling services in Karnataka
          including Bangalore, Mysore, and nearby areas. Reliable, fast, and
          affordable solutions.
        </p>
      </div>

      {/* EXISTING IMAGE */}
      <img
        className="h-10/9 absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-lighten pointer-events-none z-10"
        style={{ filter: "saturate(2.2) contrast(1.5)" }}
        src="jlrd.png"
        alt="Borewell services Karnataka"
      />

      {/* BUTTON */}
      <div className="absolute bottom-10 w-full flex justify-center z-50">
        <button
          onClick={() => navigate("/home")}
          className="px-8 py-3 bg-red-500 cursor-pointer text-white font-semibold rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105"
        >
          GET STARTED
        </button>
      </div>

      {/* CANVAS */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full block z-0 pointer-events-none"
      />
    </div>
  );
};

export default Hero;
