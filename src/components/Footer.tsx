import { Linkedin, Facebook, Twitter, Send } from "lucide-react";
export default function Footer() {
  return (
    <footer className="static bg-black m-0 p-3 w-screen font-geologica text-[#f6f6f695] text-center">
      <p className="">Made with love by 4th level KSU-AI students! &copy;</p>
      <div className="right-0 bottom-[50%] flex justify-center mt-2 mb-0 text-[#f6f6f695]">
        <a href="https://Linkedin.com" target="_blank">
          <Linkedin className="mx-1 w-4 hover:text-white" />
        </a>
        <a href="https://Whatsapp.com" target="_blank">
          <Send className="mx-1 w-4 hover:text-white" />
        </a>
      </div>
    </footer>
  );
}
