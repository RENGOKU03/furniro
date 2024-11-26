import React from "react";
import { CiPhone } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-5 ">
        <p className="font-bold text-2xl ">Get In Touch With Us</p>
        <p className="text-[#6e6d6d] text-sm w-1/2">
          For More Information About Our Products & Services. Please Feel Free
          To Drop Us An Email . Our Staff Always Be There To Help You Out. Do
          Not Hesitate To Contact Us.
        </p>
      </div>

      <div className="flex justify-center items-center gap-10 mt-10">
        <div className="flex flex-col gap-5">
          <div className="flex gap-5 items-center">
            <IoLocationOutline size={30} />
            <div className="flex flex-col">
              <p className="font-semibold">Address</p>
              <p className="text-[#6e6d6d] text-sm">
                236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <CiPhone size={30} />
            <div className="flex flex-col">
              <p className="font-semibold">Phone</p>
              <p className="text-[#6e6d6d] text-sm">Mobile: +(84) 546-6789</p>
            </div>
          </div>
          <div className="flex gap-5 items-center">
            <IoMdTime size={30} />
            <div className="flex flex-col">
              <p className="font-semibold">Working Time</p>
              <p className="text-[#6e6d6d] text-sm">
                Monday-Friday: 9:00 - 22:00
              </p>
              <p className="text-[#6e6d6d] text-sm">
                Saturday-Sunday: 9:00 - 21:00
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-xl mb-2 text-[#2f2f2f]">Your Name</p>
          <input
            type="text"
            className="border outline-none border-[#a3a2a2] text-xl px-3 py-2 rounded-lg w-80 mb-4 text-[#2f2f2f] "
            placeholder="Your Name"
          />
          <p className="font-semibold text-xl mb-2 text-[#2f2f2f]">
            Email Address
          </p>
          <input
            type="email"
            className="border outline-none border-[#a3a2a2] text-xl px-3 py-2 rounded-lg w-80 mb-4 text-[#2f2f2f] "
            placeholder="abc@.com"
          />
          <p className="font-semibold text-xl mb-2 text-[#2f2f2f]">Subject</p>
          <input
            type="text"
            className="border outline-none border-[#a3a2a2] text-xl px-3 py-2 rounded-lg w-80 mb-4 text-[#2f2f2f] "
            placeholder="This is Optional"
          />
          <p className="font-semibold text-xl mb-2 text-[#2f2f2f]">Message</p>
          <input
            type="text"
            className="border outline-none border-[#a3a2a2] text-xl px-3 py-2 rounded-lg w-80 text-[#2f2f2f] "
            placeholder="Hi there! I would like to..."
          />
          <button className="bg-[#B88E2F] text-white text-lg  py-2 rounded-lg mt-5 hover:bg-white hover:text-[#B88E2F] hover:border-2 hover:border-[#B88E2F] border-2 border-[#B88E2F]">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
