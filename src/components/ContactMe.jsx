import { useForm, ValidationError } from "@formspree/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImGoogle2 } from "react-icons/im";
import { BsDiscord, BsArrow90DegDown } from "react-icons/bs";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

export default function ContactMe() {
  const [state, handleSubmit] = useForm("xnqlryyy");
  const [notification, setNotification] = useState(null);
  const [showSnackbar, setShowSnackbar] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setNotification("Email sent!");
      state.succeeded = false;
    } else if (state.errors.length > 0) {
      setNotification("Oops! Email failed to send!");
    }
  }, [state.submitting, state.succeeded, state.errors]);

  useEffect(() => {
    if (notification) {
      setTimeout(() => {
        setShowSnackbar(true);
      }, 150);
      setTimeout(() => {
        setShowSnackbar(false);
      }, 2500);
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    }
  }, [notification]);

  return (
    <div className="h-full w-full flex items-center">
      <div className="text-black dark:text-white w-full items-end flex justify-around flex-col xl:flex-row">
        <div className={`transition-opacity duration-300 flex flex-col items-center justify-center xl:pt-0 w-full md:w-auto px-2`}>
          <div className="pb-2 z-10 relative">
            <div
              className={`absolute top-0 left-0 -translate-y-full ${notification ? "block" : "hidden"} ${
                showSnackbar ? "opacity-100 translate-x-0" : "translate-x-full opacity-0"
              } transition-all duration-500 redBlue p-1px`}
            >
              <div className="bg-black px-10 py-2">
                <p className="text-white w-max">{notification}</p>
              </div>
            </div>
            <div className="grid grid-flow-col items-center gap-6 ">
              <div className="flex flex-col items-center">
                <span className="mb-6">Navigate</span>
                <div className="grid grid-flow-col gap-6 my-6">
                  <a href="https://www.linkedin.com/in/keith-frazier/" target="_blank" className="relative group mr-6">
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-12 h-12 transition-colors duration-300 group-hover:bg-white" />
                    <FaLinkedin className="w-16 h-16 hover:text-blue-500 transition-colors duration-300 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30" />
                  </a>
                  <a href="https://github.com/keithfrazier98" target="_blank" className="relative group mx-6">
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-12 h-14 transition-colors duration-300 group-hover:bg-gray-800 dark:group-hover:bg-white -full" />
                    <FaGithub className="w-14 h-16 hover:text-white dark:hover:text-gray-800 transition-colors duration-300 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30" />
                  </a>
                </div>
              </div>
              <div className="h-48 flex flex-col items-center  pt-4">
                <span>or</span>
                <div className="w-1 h-24 rounded-full transition-colors  bg-black dark:bg-gray-100 my-6" />
                <span>or</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="mb-6">Copy</span>
                <div className="grid grid-flow-col gap-6">
                  <button
                    className="relative group mx-6 my-6"
                    onClick={() => {
                      navigator.clipboard.writeText("keithers98@gmail.com");
                      setNotification("Email address copied to clipboard!");
                    }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-12 h-12 transition-colors duration-300 group-hover:bg-red-600" />
                    <ImGoogle2 className="w-14 h-16 hover:text-white transition-colors duration-300 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30" />
                  </button>
                  <button
                    className="relative group mx-6"
                    onClick={() => {
                      navigator.clipboard.writeText("Safari | DataX#2063");
                      setNotification("Discord tag copied to clipboard!");
                    }}
                  >
                    <div className="absolute left-0 -top-1/3 text-xs">
                      <div className="relative">
                        <BsArrow90DegDown />
                        <div className="absolute -top-[60%] left-4">Preferred!</div>
                      </div>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-10 h-8 transition-colors duration-300 group-hover:bg-white" />
                    <BsDiscord className="w-14 h-16 hover:text-indigo-600 transition-colors duration-300 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="z-[2] rainbow-bwds p-1px  min-w-full md:min-w-[30rem] shadow-2xl">
            <div className=" bg-black w-full mg:w-auto">
              <form onSubmit={handleSubmit} className="flex flex-col topography md:w-auto w-full pb-4 px-4 pt-2 ">
                <p className="text-white w-full text-center font-semibold mb-2">Email me right away!</p>
                <input id="email" className="mb-4 p-2  text-black" type="email" name="email" placeholder="email address" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <textarea id="message" className=" p-2 text-black" name="message" rows="5" />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <button
                  className="p-1px bg-gradient-to-br from-blue-700 to-red-700 hover:from-red-700 hover:to-blue-700 transition-colors duration-300  mt-4  text-white"
                  disabled={state.submitting}
                >
                  <div className="p-2 w-full h-full flex justify-center items-center bg-black bg-opacity-100 hover:bg-opacity-50 ">
                    <div className="flex">{state.submitting ? <MoonLoader size={24} color={"white"} /> : "Submit"}</div>
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="z-[2] pb-12 xl:pb-0 w-full md:w-auto px-2">
          <div className={`p-1px redBlue transition-opacity duration-500`}>
            <div className="bg-black ">
              <div className="flex flex-col items-center topography p-4">
                <p className="pb-2 text-xl font-bold text-white">My Whereabouts</p>
                <div className="p-1px w-full">
                  <div className="bg-black relative h-[300px] lg:w-[600px] lg:h-[450px]">
                    <div className="absolute z-0 first-line:flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <MoonLoader color="white" speedMultiplier={0.5} />
                    </div>
                    <div className="z-10 absolute">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d845781.5973462377!2d-118.17143572126591!3d34.09938342269121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdbd6107807ace273!2zMzTCsDA1JzU3LjgiTiAxMTfCsDM2JzQwLjEiVw!5e0!3m2!1sen!2sus!4v1648765505015!5m2!1sen!2sus"
                        className="border-0 w-full z-10 h-[300px] lg:w-[600px] lg:h-[450px]"
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
