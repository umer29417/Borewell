import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";
import img1 from "../images/05.jpeg";
import img2 from "../images/06.jpeg";
import img3 from "../images/07.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [imgSt, setImgSt] = useState([img1, img2, img3]);
  const [selectedDistrict, setSelectedDistrict] = useState("Chitradurga");

  const mainContainer = useRef(null);
  const districts = [
    "Bagalkot",
    "Ballari",
    "Belagavi",
    "Bengaluru Rural",
    "Bengaluru Urban",
    "Bidar",
    "Chamarajanagar",
    "Chikkaballapur",
    "Chikkamagaluru",
    "Chitradurga",
    "Dakshina Kannada",
    "Davanagere",
    "Dharwad",
    "Gadag",
    "Hassan",
    "Haveri",
    "Kalaburagi",
    "Kodagu",
    "Kolar",
    "Koppal",
    "Mandya",
    "Mysuru",
    "Raichur",
    "Ramanagara",
    "Shivamogga",
    "Tumakuru",
    "Udupi",
    "Uttara Kannada",
    "Vijayapura",
    "Yadgir",
  ];

  useEffect(() => {
    gsap.from(".firstDiv", {
      x: -60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#secPage",
        start: "top 75%",
      },
    });

    gsap.from(".secondDiv", {
      x: 60,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#secPage",
        start: "top 75%",
      },
    });

    gsap.to(".morque", {
      y: -15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 0.2,
    });
  }, []);

  useEffect(() => {
    const inter = setInterval(() => {
      setImgSt((prev) => {
        const arr = [...prev];
        const temp = arr[0];
        arr[0] = arr[1];
        arr[1] = arr[2];
        arr[2] = temp;
        return arr;
      });
    }, 3000);
    return () => clearInterval(inter);
  }, []);

  return (
    <div
      ref={mainContainer}
      className="relative min-h-screen overflow-x-hidden bg-[#030712] text-white font-sans selection:bg-blue-500/30"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative h-[85vh] flex items-center justify-center perspective-[2000px] z-10 pt-10">
        <div className="flex items-center justify-center gap-2 md:gap-8 transform-style-3d">
          <div
            className="morque relative h-[300px] w-[220px] md:h-[400px] md:w-[300px] rounded-[2rem] overflow-hidden transition-all duration-1000 ease-in-out shadow-2xl border border-white/5"
            style={{
              transform: "rotateY(35deg) translateZ(-150px) translateX(40px)",
              filter: "brightness(0.3) blur(2px)",
            }}
          >
            <img
              className="h-full w-full object-cover"
              src={imgSt[0]}
              alt="Drilling 1"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/80 to-transparent" />
          </div>

          <div
            className="morque relative z-20 h-[450px] w-[320px] md:h-[600px] md:w-[450px] rounded-[2.5rem] overflow-hidden transition-all duration-1000 ease-in-out shadow-[0_0_80px_rgba(37,99,235,0.2)] border border-white/10 ring-1 ring-blue-500/20"
            style={{ transform: "translateZ(50px)" }}
          >
            <img
              className="h-full w-full object-cover scale-105 duration-1000 ease-out"
              src={imgSt[1]}
              alt="Core Service"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-transparent opacity-50 pointer-events-none" />

            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent" />

            <div className="absolute bottom-0 inset-x-0 p-8 flex flex-col justify-end transform translate-y-0">
              <div className="flex items-center gap-2 mb-3 opacity-90">
                <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                <p className="text-blue-400 font-semibold tracking-[0.2em] text-xs uppercase">
                  Core Service
                </p>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">
                Deep Rock <br /> Drilling
              </h2>
            </div>
          </div>

          <div
            className="morque relative h-[300px] w-[220px] md:h-[400px] md:w-[300px] rounded-[2rem] overflow-hidden transition-all duration-1000 ease-in-out shadow-2xl border border-white/5"
            style={{
              transform: "rotateY(-35deg) translateZ(-150px) translateX(-40px)",
              filter: "brightness(0.3) blur(2px)",
            }}
          >
            <img
              className="h-full w-full object-cover"
              src={imgSt[2]}
              alt="Drilling 2"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#030712]/80 to-transparent" />
          </div>
        </div>
      </div>

      <div
        className="relative z-20 max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-16 px-6 py-24 pb-32"
        id="secPage"
      >
        <div className="firstDiv flex-1 space-y-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-md">
            <i className="ri-shield-check-fill text-blue-400 text-lg mr-2"></i>
            <span className="text-blue-300 text-sm font-semibold tracking-wide">
              Certified Drilling Experts
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-white">
            Pure Water <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
              Starts Here.
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg font-light">
            We combine heavy-duty machinery with precision engineering to ensure
            your borewell delivers crystal-clear water for generations.
          </p>

          <div className="flex items-center gap-12 pt-6">
            <div className="flex flex-col group">
              <span className="text-4xl font-black text-white group-hover:text-blue-400 transition-colors">
                500+
              </span>
              <span className="text-gray-500 text-sm uppercase tracking-wider font-semibold mt-1">
                Projects
              </span>
            </div>
            <div className="w-[1px] h-14 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
            <div className="flex flex-col group">
              <span className="text-4xl font-black text-white group-hover:text-cyan-400 transition-colors">
                15+
              </span>
              <span className="text-gray-500 text-sm uppercase tracking-wider font-semibold mt-1">
                Years Exp.
              </span>
            </div>
          </div>
        </div>

        <div className="secondDiv w-full max-w-md relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[2.5rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <div className="relative bg-[#0a0a0a]/80 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] shadow-[0_0_40px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

            <h3 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
              <i className="ri-calculator-line text-blue-400"></i> Get Instant
              Quote
            </h3>

            <div className="space-y-6">
              {/* Service Type */}
              <div className="space-y-2 group/input">
                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold ml-1">
                  Service Type
                </label>
                <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center justify-between hover:bg-white/10 hover:border-blue-500/30 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/20 flex items-center justify-center shadow-inner">
                      <i className="ri-drop-fill text-blue-400 text-xl"></i>
                    </div>
                    <span className="font-semibold text-gray-200">
                      Borewell Drilling
                    </span>
                  </div>
                  <i className="ri-arrow-right-s-line text-gray-500 group-hover/input:text-blue-400 transition-colors"></i>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-400 font-bold ml-1">
                  Location
                </label>
                <div className="relative">
                  <select
                    value={selectedDistrict}
                    onChange={(e) => setSelectedDistrict(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500/50 appearance-none transition-all cursor-pointer text-gray-200 font-semibold hover:bg-white/10 hover:border-blue-500/30"
                  >
                    {districts.map((d) => (
                      <option
                        key={d}
                        value={d}
                        className="bg-[#0f1117] text-gray-200 py-2"
                      >
                        {d}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <i className="ri-map-pin-line text-gray-400"></i>
                  </div>
                </div>
              </div>
              <Link
                to="/quote"
                state={{ selectedDistrict }}
                className="mt-4 w-full group relative flex justify-center items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 py-5 rounded-2xl font-bold text-lg text-white shadow-[0_10px_30px_rgba(37,99,235,0.3)] hover:shadow-[0_15px_40px_rgba(37,99,235,0.5)] transition-all active:scale-[0.98] overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out rounded-2xl" />
                <span className="relative z-10">Calculate Quote</span>
                <i className="ri-arrow-right-line relative z-10 group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
