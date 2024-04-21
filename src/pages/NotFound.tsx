import { Link } from "react-router-dom";
export default function NotFound() {
  return (
    <section className="mx-[10%] my-[10%]">
      <div className="text-center">
        <h1 className="mb-4 font-semibold text-6xl text-red-500">404</h1>
        <p className="mb-4 text-lg text-white">
          Oops! Looks like you are lost.
        </p>
        <div className="animate-bounce">
          <svg
            className="mx-auto w-16 h-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <p className="mt-4 text-white">
          Let's get you back{" "}
          <Link to="/" className="text-[#0ba47e]">
            home
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
