import { useForm, ValidationError } from "@formspree/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImGoogle2 } from "react-icons/im";
import { BsDiscord, BsArrow90DegDown } from "react-icons/bs";
import { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import OffsetBorder from "./OffsetBorder";

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
    <>
      <div id="contact" className="h-3/4 w-full flex items-center pt-64 md:pt-0 dark:bg-zinc-800 bg-gray-100 overflow-hidden">
        <div className="text-black dark:text-white w-full xl:items-end flex justify-around flex-col xl:flex-row">
          <div className="relative my-10 xl:m-0 mx-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d845781.5973462377!2d-118.17143572126591!3d34.09938342269121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdbd6107807ace273!2zMzTCsDA1JzU3LjgiTiAxMTfCsDM2JzQwLjEiVw!5e0!3m2!1sen!2sus!4v1648765505015!5m2!1sen!2sus"
              className="border w-full relative z-10 shadow-lg border-black h-[300px] lg:w-[600px] lg:h-[450px]"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <OffsetBorder offsetPx={"12"} shadow="solid" />
          </div>
          <div className={`transition-opacity duration-300 flex flex-col items-center justify-center xl:pt-0 mb-12 md:mb-0 w-full md:w-auto px-2`}>
            <div
              className={`absolute top-0 left-0 -translate-y-full ${notification ? "block" : "hidden"} ${
                showSnackbar ? "opacity-100 translate-x-0" : "translate-x-full opacity-0"
              } transition-all duration-500`}
            >
              <div className="bg-black px-10 py-2">
                <p className="text-white w-max">{notification}</p>
              </div>
            </div>
            <div className="pb-2 z-10 relative">
              <div className="grid grid-flow-col gap-6 my-6">
                <a href="https://www.linkedin.com/in/keith-frazier/" target="_blank" className="relative group mr-6">
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-12 h-12 transition-colors duration-300 group-hover:bg-white" />
                  <FaLinkedin className="w-16 h-16 hover:text-blue-500 transition-colors duration-300 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30" />
                </a>
                <a href="https://github.com/keithfrazier98" target="_blank" className="relative group mx-6">
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-12 h-14 transition-colors duration-300 group-hover:bg-gray-800 dark:group-hover:bg-white rounded-full" />
                  <FaGithub className="w-14 h-16 hover:text-white dark:hover:text-gray-800 transition-colors duration-300 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30" />
                </a>

                <div className="flex flex-col items-center">
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
            <div className="z-[2] my-4  p-1px  min-w-full md:min-w-[30rem] shadow-2xl relative">
              <form
                onSubmit={handleSubmit}
                className="grid grid-flow-row gap-4 md:w-auto w-full p-4 border bg-gray-100 relative z-10 dark:bg-zinc-900 border-black dark:border-gray-400"
              >
                <input id="email" className="mb-4 p-2 dark:bg-black border border-black dark:border-gray-400" type="email" name="email" placeholder="email address" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <textarea id="message" className="p-2 border dark:bg-black  border-black dark:border-gray-400" name="message" rows="5" placeholder="a lovely message" />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
                <button className="btnReg" disabled={state.submitting}>
                  <div className="p-2 w-full h-full flex justify-center items-centerm-0">
                    <div className="flex">{state.submitting ? <MoonLoader size={24} color={"white"} /> : "Submit"}</div>
                  </div>
                </button>
              </form>
              <OffsetBorder offsetPx="12" shadow="solid" />
            </div>
          </div>
        </div>
      </div>{" "}
      <footer className="py-7 flex w-full justify-center dark:bg-zinc-800">
        <span> © Keith Frazier 2022 </span>
      </footer>
    </>
  );
}
