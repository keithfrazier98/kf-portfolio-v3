import { useForm, ValidationError } from "@formspree/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImGoogle2 } from "react-icons/im";
import { BsDiscord } from "react-icons/bs";
import { useEffect, useState } from "react";

export default function ContactMe() {
  const [state, handleSubmit] = useForm("xnqlryyy");
  const [somethingCopied, setSomethingCopied] = useState(null);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [fadeInContent, setFadeInContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeInContent(true);
    }, 500);
  }, []);

  useEffect(() => {
    if (somethingCopied) {
      setTimeout(() => {
        setShowSnackbar(true);
      }, 500);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 2500);
      setTimeout(() => {
        setSomethingCopied(null);
      }, 3000);
    }
  }, [somethingCopied]);
  return (
    <div className="absolute top-0 z-20 w-full h-full py-24 px-16 hide-scrollbar 2xl:px-32 overflow-scroll">
      <div className="w-full h-full flex items-center justify-around flex-col xl:flex-row">
        <div className={`${fadeInContent ? "opacity-100" : "opacity-0"} transition-opacity duration-300 flex flex-col items-center justify-center mb-6 pt-96 xl:pt-0`}>
          <div className="pb-2 relative">
            <div
              className={`absolute -top-20 left-10  ${somethingCopied ? "block" : "hidden"} ${
                showSnackbar ? "opacity-100 -translate-x-[25%]" : "opacity-0"
              } transition-all duration-500 redBlue p-[2px] rounded`}
            >
              <div className="bg-black rounded px-10 py-2">
                <p className="text-white w-max">{somethingCopied} copied to clipboard!</p>
              </div>
            </div>
            <div className="grid grid-flow-col items-center gap-6">
              <div className="flex flex-col items-center">
                <span className="mb-6">Navigate</span>
                <div className="grid grid-flow-col gap-6 my-6">
                  <a href="https://www.linkedin.com/in/keith-frazier/" target="_blank" className="relative group mr-6">
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-12 h-12 transition-colors duration-300 group-hover:bg-white" />
                    <FaLinkedin className="w-16 h-16 hover:text-blue-500 transition-colors duration-300 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30" />
                  </a>
                  <a href="https://github.com/keithfrazier98" target="_blank" className="relative group mx-6">
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-14 h-14 transition-colors duration-300 group-hover:bg-gray-800 rounded-full" />
                    <FaGithub className="w-14 h-16 hover:text-white transition-colors duration-300 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30" />
                  </a>
                </div>
              </div>
              <div className="h-48 flex flex-col items-center pt-4">
                <span>or</span>
                <div className="w-1 h-24 rounded-full bg-black my-6" />
                <span>or</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="mb-6">Copy</span>
                <div className="grid grid-flow-col gap-6">
                  <button
                    className="relative group mx-6 my-6"
                    onClick={() => {
                      navigator.clipboard.writeText("keithers98@gmail.com");
                      setSomethingCopied("Email address");
                    }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-12 h-12 transition-colors duration-300 group-hover:bg-red-600" />
                    <ImGoogle2 className="w-14 h-16 hover:text-white transition-colors duration-300 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30" />
                  </button>
                  <button
                    className="relative group mx-6"
                    onClick={() => {
                      navigator.clipboard.writeText("Safari | DataX#2063");
                      setSomethingCopied("Discord name");
                    }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-8 transition-colors duration-300 group-hover:bg-white" />
                    <BsDiscord className="w-14 h-16 hover:text-indigo-600 transition-colors duration-300 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="rainbow-bwds p-[2px] rounded-lg min-w-[30rem] shadow-2xl">
            <div className="rounded-lg bg-black">
              <form onSubmit={handleSubmit} className="flex flex-col topography w-full pb-4 px-4 pt-2 rounded-lg">
                <p className="text-white w-full text-center font-semibold mb-2">Email me right away!</p>
                <input id="email" className="mb-4 p-2 rounded" type="email" name="email" placeholder="email address" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <textarea id="message" className="rounded-lg p-2" name="message" rows="5" />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <button
                  type="submit"
                  className="p-[1px] bg-gradient-to-br from-blue-700 to-red-700 hover:from-red-700 hover:to-blue-700 transition-colors duration-300 mt-4 rounded text-white"
                  disabled={state.submitting}
                >
                  <div className="p-2 w-full h-full bg-black bg-opacity-100 hover:bg-opacity-10 rounded">Submit</div>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="pb-28 xl:pb-0">
          <div className={`rounded-lg p-[2px] redBlue transition-opacity duration-500 ${fadeInContent ? "opacity-100" : "opacity-0"}`}>
            <div className="bg-black rounded-lg">
              <div className="flex flex-col items-center rounded topography p-4">
                <p className="pb-2 text-xl font-bold text-white">My Locality</p>
                <div className="rainbow-sdws p-[2px] rounded-lg">
                  <div className="bg-black rounded-lg">
                    <div className="topography rounded-lg">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d845781.5973462377!2d-118.17143572126591!3d34.09938342269121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdbd6107807ace273!2zMzTCsDA1JzU3LjgiTiAxMTfCsDM2JzQwLjEiVw!5e0!3m2!1sen!2sus!4v1648765505015!5m2!1sen!2sus"
                        className="rounded-lg border-0 w-[400px] h-[300px] lg:w-[600px] lg:h-[450px]"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
