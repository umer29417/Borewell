import "remixicon/fonts/remixicon.css";
import { useState } from "react";

const Contact = () => {
    const [phone, setPhone] = useState("");

    const handlePhoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 10) {
            value = value.slice(0, 10);
        }
        setPhone(value);
    };
    return (
        <div>
            <div className="w-full flex bg-[#030712] text-white font-sans selection:bg-blue-500/30 flex-wrap justify-center items-center gap-6 md:gap-10 px-4 py-10">
                <div className="w-full sm:w-[45%] lg:w-[30%] p-8 flex flex-col items-center text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 rounded-xl shadow-lg hover:scale-105 transition">
                    <i className="ri-map-pin-line text-4xl md:text-5xl mb-3"></i>
                    <p className="text-2xl md:text-3xl font-semibold">Address</p>
                    <p className="text-sm md:text-base mt-2">
                        Sasaluhalla, Taralabalu Nagara, Kutigehalli Holalkere Tq, Chitradurga
                    </p>
                </div>
                <div className="w-full sm:w-[45%] lg:w-[30%] p-8 flex flex-col items-center text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 rounded-xl shadow-lg hover:scale-105 transition">
                    <i className="ri-phone-fill text-4xl md:text-5xl mb-3"></i>
                    <p className="text-2xl md:text-3xl font-semibold">Phone</p>
                    <p className="text-sm md:text-base mt-2">
                        8660995660, 9611107988
                    </p>
                </div>
                <div className="w-full sm:w-[45%] lg:w-[30%] p-8 flex flex-col items-center text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 rounded-xl shadow-lg hover:scale-105 transition">
                    <i className="ri-mail-fill text-4xl md:text-5xl mb-3"></i>
                    <p className="text-2xl md:text-3xl font-semibold">Email Address</p>
                    <p className="text-sm md:text-base mt-2">
                        asdfgasdfdsa@gmail.com
                    </p>
                </div>
            </div>
            <div className="bg-[#030712] text-white font-sans selection:bg-blue-500/30 text-white p-15 w-full flex gap-10 items-center flex-row max-[960px]:flex-col">
                <form action="mailto:umersams29@gmail.com" method="POST" encType="text/plain" className="h-auto w-full flex flex-wrap gap-7">
                    <div className="flex flex-row w-full gap-10 max-[820px]:flex-col">
                        <input type="text" name="firstName" placeholder="Enter your first name" required className="border-2 border-teal-500 border-solid h-15 w-full" />
                        <input type="text" name="lastName" placeholder="Enter your last name" required className="border-2 border-teal-500 border-solid h-15 w-full" />
                    </div>
                    <input type="email" name="email" placeholder="Enter your Email" required className="border-2 border-teal-500 border-solid h-15 w-full" />
                    <input type="tel" name="phone" placeholder="Enter your phone number" required value={phone} onChange={handlePhoneChange} className="border-2 border-teal-500 border-solid h-15 w-full" />
                    <div className="flex flex-col w-full">
                        <div>Message</div>
                        <textarea rows={6} name="message" placeholder="Enter your message here..." required className="border-2 p-4 w-full border-teal-500 border-solid"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-600 p-4 rounded-xl cursor-pointer text-white">
                        Send Message
                    </button>
                </form>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.922552703763!2d76.11535194999999!3d14.199312999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba6a592eefd981%3A0xc9f37062338c3825!2sSasalu%2C%20Karnataka%20577518!5e0!3m2!1sen!2sin!4v1773325957495!5m2!1sen!2sin" width="100%" height="600" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Sasalu Map" />
            </div>
        </div>
    )
}

export default Contact