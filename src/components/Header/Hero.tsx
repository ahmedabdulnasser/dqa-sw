import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <section className="">
      {/* <img
        src="./hero-bg/bg-pls.jpg"
        alt="Landing Page"
        className="top-0 absolute bg-auto w-full h-screen"
      /> */}
      <div className="flex justify-center w-screen max-w-screen h-[100%]">
        <p className="top-[15%] absolute drop-shadow-2xl mx-4 font-geologica text-center text-lg text-white md:text-3xl">
          Unlock the Power of Document Question Answering{" "}
          <br className="md:flex hidden" />
          Across Law, Medicine, News, and More!
        </p>

        <div className="flex justify-center group">
          <Link to="/get-started" className="flex justify-center">
            <img
              src="./hero-avatars/morpheus.svg"
              alt=""
              className="top-[32%] absolute opacity-[.89] hover:opacity-100 w-72 transition-opacity duration-[2500ms] hover:cursor-pointer"
            />
          </Link>
          <p className="top-[22%] md:top-[48%] left-[20%] md:left-[41%] absolute opacity-0 group-hover:opacity-90 drop-shadow-2xl font-bold font-cairo text-[#0ba47e] transition-opacity duration-[2500ms]">
            Get started
          </p>
        </div>

        <p className="bottom-[15%] absolute drop-shadow-2xl mx-5 font-geologica text-center text-lg text-white md:text-xl">
          Seeking legal advice, medical insights, the latest news{" "}
          <br className="md:flex hidden" />
          updates, or answers to any document-related queries?
        </p>

        <p className="bottom-[10.5%] absolute drop-shadow-2xl font-geologica text-2xl text-center text-white">
          <span className="font-geologica text-3xl">
            doc<span className="text-[#0ba47e]">.qa</span>
          </span>{" "}
          got you!
        </p>
      </div>
    </section>
  );
}
