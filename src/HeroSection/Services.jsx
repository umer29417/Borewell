import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img2 from "../images/02.svg";
import img3 from "../images/03.svg";
import img4 from "../images/04.svg";

gsap.registerPlugin(ScrollTrigger);
const Services = () => {
  useEffect(() => {
    gsap.to(".BestBorewell", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".BestBorewell",
        start: "top 70%",
        end: "bottom 70%",
        markers: false,
      },
    });
  }, []);
  return (
    <div>
      <div className="w-full bg-[#030712] text-white font-sans selection:bg-blue-500/30">
        <div className="flex justify-center items-center flex-col p-20">
          <p className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 text-center">
            Our Services
          </p>
          <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 text-center">
            What JayaLakshmi Borewell Offers
          </p>
          <div className="w-16 h-1 bg-red-700 mx-auto mt-4 rounded"></div>
        </div>
        <div className="h-auto w-full flex flex-wrap gap-5 justify-center items-center">
          <div className="h-[200px] w-60 text-center flex justify-center items-center flex-col">
            <div className="h-15 w-15 rounded-full">
              <i class="ri-water-flash-line text-3xl text-blue-600"></i>
            </div>
            <p className="text-[20px] mt-2">Borewell Drilling</p>
            <p className="text-[10px]">
              We provide precise borewell drilling services using modern
              equipment for residential, industrial, and agricultural needs.
            </p>
          </div>
          <div className="h-[200px] w-60 text-center flex justify-center items-center flex-col">
            <div className="h-15 w-15 rounded-full">
              <i class="ri-line-chart-line text-3xl text-blue-600"></i>
            </div>
            <p className="text-[20px] mt-2">Water Yield Analysis</p>
            <p className="text-[10px]">
              Our team conducts thorough water yield analysis to determine the
              best water output for your borewell.
            </p>
          </div>
          <div className="h-[200px] w-60 text-center flex justify-center items-center flex-col">
            <div className="h-15 w-15 rounded-full">
              <i class="ri-settings-3-line text-3xl text-blue-600"></i>
            </div>
            <p className="text-[20px] mt-2">Pump Installation</p>
            <p className="text-[10px]">
              We install reliable and efficient pumps to ensure smooth water
              flow from your borewell system.
            </p>
          </div>
          <div className="h-[200px] w-60 text-center flex justify-center items-center flex-col">
            <div className="h-15 w-15 rounded-full">
              <i class="ri-tools-line text-3xl text-blue-600"></i>
            </div>
            <p className="text-[20px] mt-2">Borewell Flushing & Repair</p>
            <p className="text-[10px]">
              Our flushing and repair services help maintain borewell
              performance and address any issues effectively.
            </p>
          </div>
          <div className="h-[200px] w-60 text-center flex justify-center items-center flex-col">
            <div className="h-15 w-15 rounded-full">
              <i class="ri-test-tube-line text-3xl text-blue-600"></i>
            </div>
            <p className="text-[20px] mt-2">Soil Testing</p>
            <p className="text-[10px]">
              We offer professional soil testing to determine the suitability of
              land for borewell drilling.
            </p>
          </div>
          <div className="h-[200px] w-60 text-center flex justify-center items-center flex-col">
            <div className="h-15 w-15 rounded-full">
              <i class="ri-heavy-showers-line text-3xl text-blue-600"></i>
            </div>
            <p className="text-[20px] mt-2">Rainwater Harvesting</p>
            <p className="text-[10px]">
              Our rainwater harvesting solutions help conserve water and
              recharge groundwater levels efficiently.
            </p>
          </div>
          <div className="h-[200px] w-60 text-center flex justify-center items-center flex-col">
            <div className="h-15 w-15 rounded-full">
              <i class="ri-search-line text-3xl text-blue-600"></i>
            </div>
            <p className="text-[20px] mt-2">Geophysical Survey</p>
            <p className="text-[10px]">
              We conduct detailed geophysical surveys to identify the best
              locations for borewell drilling.
            </p>
          </div>
          <div className="h-[200px] w-60 text-center flex justify-center items-center flex-col">
            <div className="h-15 w-15 rounded-full">
              <i class="ri-calendar-check-line text-3xl text-blue-600"></i>
            </div>
            <p className="text-[20px] mt-2">Annual Maintenance</p>
            <p className="text-[10px]">
              Our annual maintenance services ensure the longevity and
              efficiency of your borewell system.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#030712] text-white font-sans selection:bg-blue-500/30 py-16 px-6">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl capitalize font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
            Reliable Borewell Drilling Services Near You in Chitradurga
          </h2>
          <p className="mt-4 text-white">
            "Looking for professional borewell drilling services in Davangere?
            We offer reliable solutions for residential and commercial clients,
            ensuring a consistent water supply. "
          </p>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="BestBorewell bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 rounded-xl shadow-md p-8 text-center opacity-0 hover:shadow-xl transition">
            <img
              src="src/images/04.svg"
              alt="Borewell Contractors"
              className="w-40 h-40 mx-auto rounded-full object-cover"
            />
            <h3 className="mt-6 text-lg font-semibold">
              Best Borewell Contractors in Davangere
            </h3>
            <p className="mt-3 text-black">
              As the leading borewell contractors in chitradurga, we ensure the
              highest standards of work, guaranteeing reliable and professional
              results for every project.
            </p>
          </div>
          <div className="BestBorewell bg-gradient-to-r from-red-400 via-yellow-400 to-blue-500 opacity-0 rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
            <img
              src={img4}
              alt="Deep Borewell"
              className="w-40 h-40 mx-auto rounded-full object-cover"
            />
            <h3 className="mt-6 text-lg font-semibold">
              Advanced Deep Borewell Drilling for Your Water Needs
            </h3>
            <p className="mt-3 text-black">
              Our team specializes in deep borewell drilling, ensuring your
              water supply is sustainable even at deeper levels. We use advanced
              technology to minimize disruption.
            </p>
          </div>
          <div className="BestBorewell opacity-0 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500 rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
            <img
              src={img3}
              alt="Motor Installation"
              className="w-40 h-40 mx-auto rounded-full object-cover"
            />
            <h3 className="mt-6 text-lg font-semibold">
              Expert Borewell Motor Installation & Maintenance
            </h3>
            <p className="mt-3 text-black">
              We specialize in borewell motor installation and maintenance,
              providing long-lasting, efficient solutions to meet your water
              pumping needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
