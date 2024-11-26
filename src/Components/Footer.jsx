import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

import footerBg from "../assets/images/more/13.jpg";
import footerBottomBg from "../assets/images/more/24.jpg";
import logo from "../assets/images/more/logo1.png";

function Footer() {
  return (
    <footer
      className="bg-no-repeat pt-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="wrap grid-cols-1 md:grid-cols-2 grid items-center justify-between gap-5 flex-wrap">
        <div className=" mb-4">
          <div className="logo w-14">
            <img src={logo} alt="" />
          </div>
          <h4 className="font-rancho text-4xl mt-4 mb-5 font-semibold">
            Espresso Emporium
          </h4>
          <p className="text-text mb-3 max-w-[600px]">
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>

          <ul className="flex gap-2 mb-3  ">
            <li>
              <a href="www.facebook.com/sabbir-hosen-dev">
                <BsFacebook className="text-3xl cursor-pointer text-main " />
              </a>
            </li>
            <li>
              <a href=""></a>
              <AiOutlineTwitter className="text-3xl cursor-pointer text-main " />
            </li>
            <li>
              <a href="">
                <AiOutlineInstagram className="text-3xl cursor-pointer text-main " />
              </a>
            </li>
            <li>
              <a href="">
                <AiFillLinkedin className="text-3xl cursor-pointer text-main " />
              </a>
            </li>
          </ul>

          <h4 className="font-rancho text-4xl mt-10 mb-5 font-semibold">
            Get in Toouch
          </h4>

          <div className="flex gap-2 items-center">
            <BsFillTelephoneFill />
            <p>+88 013135 30719</p>
          </div>
          <div className="flex gap-2 items-center">
            <MdEmail />
            <p>tssabbirhosen@gamil.com</p>
          </div>
          <div className="flex gap-2 items-center">
            <ImLocation />
            <p>72, Wall street, King Road, Dhaka</p>
          </div>
        </div>
        <div className="">
          <h4 className="font-rancho text-4xl mt-4 mb-5 font-semibold">
            Connect with Us
          </h4>
          <form action="" className="flex flex-col gap-4">
            <input
              type="text"
              className=" py-3 px-3 w-full rounded-md   focus:outline-main  "
              placeholder="Name"
            />

            <input
              type="email"
              className=" py-3 px-3 w-full rounded-md"
              placeholder="Email"
            />
            <textarea
              type="text"
              rows="4"
              className=" py-3 px-3 w-full rounded-md"
              placeholder="Message"
            />
            <div className="">
              <button className="text-main rounded-2xl p-1 px-2 font-bold font-rancho border-2 border-main inline-block">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div
        className="booter-b"
        style={{ backgroundImage: `url(${footerBottomBg})` }}
      >
        <h3 className="font-rancho text-center py-3 mt-5 text-xl text-white">
          Copyright Espresso Emporium ! All Rights Reserved
        </h3>
      </div>
    </footer>
  );
}

export default Footer;
