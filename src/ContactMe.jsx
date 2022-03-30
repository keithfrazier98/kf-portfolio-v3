import { useForm, ValidationError } from "@formspree/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ImGoogle2 } from "react-icons/im";
import { BsDiscord } from "react-icons/bs";
export default function ContactMe() {
  const [state, handleSubmit] = useForm("xnqlryyy");

  return (
    <div className="absolute top-0 z-20 w-full h-full py-24 px-8">
      <div className="flex flex-col w-full h-full items-center justify-center">
        <div className="pb-2">
          <div className="grid grid-flow-col items-center gap-6">
            <div className="flex flex-col items-center">
              <span className="mb-6">Navigate</span>
              <div className="grid grid-flow-col gap-6">
                <a href="https://www.linkedin.com/in/keith-frazier/" target="_blank">
                  <FaLinkedin className="w-16 h-16" />
                </a>
                <a href="https://github.com/keithfrazier98" target="_blank">
                  {" "}
                  <FaGithub className="w-14 h-16" />
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
                <ImGoogle2 className="w-14 h-16" />
                <BsDiscord className="w-14 h-16" />
              </div>
            </div>
          </div>
        </div>
        <div className="rainbow-bwds p-[4px] rounded-lg min-w-[30rem] shadow-2xl">
          <div className="redBlue rounded-lg border-4 border-black">
            <form onSubmit={handleSubmit} className="flex flex-col corkscrew w-full p-4 rounded-lg">
              <input id="email" className="mb-4 p-2 rounded" type="email" name="email" placeholder="email address" />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
              <textarea id="message" className="rounded-lg p-2" name="message" rows="5" />
              <ValidationError prefix="Message" field="message" errors={state.errors} />
              <button type="submit" className="p-2 bg-black mt-4 rounded bg-opacity-100 hover:bg-opacity-75 text-white" disabled={state.submitting}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
