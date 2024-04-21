export default function Logo() {
  return (
    <div className="flex w-16 h-16 font-geologica group logo">
      <div className="flex">
        <img src="./docqa-logo.svg" alt="DocQA Logo" />
        <h1 className="-m-[0.3rem] my-auto text-[#ffffffe2] text-3xl hover:text-white">
          doc<span className="text-[#0ba47e]">.qa</span>
        </h1>
      </div>
      <span className="top-[70%] left-[19%] md:left-[5%] fixed opacity-0 group-hover:opacity-100 text-sm transition-opacity duration-[2500ms]">
        Go home
      </span>
    </div>
  );
}
