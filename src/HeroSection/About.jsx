import "remixicon/fonts/remixicon.css";

const About = () => {
  return (
    <div className="h-auto w-full bg-[#030712] text-white font-sans selection:bg-blue-500/30 bg-gradient-to-br ">
      <div className="h-auto w-full px-6 md:px-20 py-16 flex flex-col capitalize lg:flex-row justify-center items-center gap-10">
        <div className="w-full lg:w-1/2">
          <div>
            <p className="tracking-widest uppercase">About us</p>
            <p className="font-[600] text-2xl md:text-3xl text-blue-300">
              Your Trusted Partner for Borewell Solutions
            </p>
            <p className="mt-4 text-sm md:text-base">
              At JayaLakshmi Borewell, we are committed to delivering top-notch
              borewell drilling and water management solutions to meet your
              needs. With over 10 years of experience, modern equipment, and a
              dedicated team, we ensure efficient and reliable services every
              time.
            </p>
          </div>
          <div className="mt-5">
            <p className="font-[600] text-blue-300 text-2xl md:text-3xl">
              Water Well Drilling Contractors in chitradurga
            </p>
            <p className="mt-4 text-sm md:text-base">
              "Our team of water well drilling contractors uses state-of-the-art
              techniques to ensure the best results. We provide expert services
              throughout Bangalore."
            </p>
          </div>

          <div className="mt-5">
            <p className="font-[600] text-blue-300 text-2xl md:text-3xl">
              Affordable & Efficient Robo Drilling for Borewells
            </p>
            <p className="mt-4 text-sm  md:text-base">
              Explore our advanced robo drilling technology for cost-effective
              and precise borewell drilling. We offer 5-feet and 10-feet
              drilling options to suit your requirements.
            </p>
            <p className="mt-2 text-sm md:text-base">
              Explore Our Other Water Well Drilling Services
            </p>
            <p className="mt-2 text-sm md:text-base">
              We offer a range of water well drilling services tailored to meet
              your specific needs. Explore our other services for more
              information.
            </p>
          </div>

          <div className="mt-5">
            <p className="font-[600] text-blue-300 text-2xl md:text-3xl">
              Cost-Effective 5 Feet & 10 Feet Robo Drilling in Bangalore
            </p>
            <p className="mt-4 text-sm md:text-base">
              Our 5-feet and 10-feet robo drilling solutions offer a quick and
              efficient way to establish a reliable borewell. We ensure minimal
              cost and maximum output.
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full h-[400px]">
            <video
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
            >
              <source src="src/images/08.mp4" />
            </video>
          </div>
        </div>
      </div>
      <div>
        <div className="w-full  text-white font-sans selection:bg-blue-500/30 py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl uppercase font-semibold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
              WHAT JayaLakshmi BOREWELL OFFERS
            </h2>
            <p className="mt-3 text-gray-400">
              Professional & reliable solutions for all your water needs
            </p>
            <div className="w-16 h-1 bg-red-700 mx-auto mt-4 rounded"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
              <div className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 text-black rounded-2xl shadow-lg p-10 text-center hover:-translate-y-2 duration-[0.5s]">
                <div className="flex justify-center mb-5">
                  <i className="ri-drop-line text-4xl text-blue-500"></i>
                </div>
                <h3 className="font-semibold text-lg">
                  Well Drilling Services: Ensuring Clean Water Access
                </h3>
                <p className="mt-4  text-sm">
                  We provide comprehensive well drilling services to ensure you
                  have access to clean water, whether it's for residential,
                  agricultural, or industrial purposes.
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-black rounded-2xl shadow-lg p-10 text-center hover:-translate-y-2 duration-[0.5s]">
                <div className="flex justify-center mb-5">
                  <i className="ri-flashlight-line text-4xl text-green-500"></i>
                </div>
                <h3 className="font-semibold text-lg">
                  Borewell Motor Installation & Replacement Services
                </h3>
                <p className="mt-4  text-sm">
                  After drilling, we offer expert motor installation and
                  replacement services to ensure your borewell system runs
                  smoothly.
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-400 via-emerald-400 to-teal-500 text-black rounded-2xl shadow-lg p-10 text-center hover:-translate-y-2 duration-[0.5s]">
                <div className="flex justify-center mb-5">
                  <i className="ri-settings-3-line text-4xl text-red-500"></i>
                </div>
                <h3 className="font-semibold text-lg">
                  Reliable and Fast 5 Feet & 10 Feet Robo Drilling Solutions
                </h3>
                <p className="mt-4 text-sm">
                  Our 5-feet and 10-feet robo drilling services are fast,
                  efficient, and cost-effective for smaller properties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
