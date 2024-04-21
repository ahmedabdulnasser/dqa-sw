import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";
type CharProps = {
  heroName: string;
  heroDescription: string;
  heroAvatarUrl: string;
  heroSkill: string;
  heroPageUrl: string;
  bgHexColor: string;
  bgImgUrl: string;
  timesUsed: number;
};
export default function Character({
  heroName,
  heroDescription,
  heroAvatarUrl,
  heroSkill,
  heroPageUrl,
  bgHexColor,
  bgImgUrl,
  timesUsed,
}: CharProps) {
  return (
    //
    <figure className="flex flex-col flex-wrap content-center bg-white drop-shadow-2xl m-8 rounded-2xl w-[300px] h-[500px] font-cairo text-black char-section">
      {/* Hero Image Section */}
      <section
        className={`bg-cover w-[100%] h-[37.5%] flex flex-wrap justify-center rounded-t-xl`}
        style={{ backgroundImage: `url(${bgImgUrl})` }}
      >
        {/* {console.log(bgImgUrl)} */}
        <img
          src={heroAvatarUrl}
          alt={`${heroName} (${heroSkill})`}
          className="pt-2 pb-2 max-w-[95%] max-h-[95%]"
        />
      </section>
      {/* Hero Description Section */}
      <section className="mt-2 text-center hero-desc">
        <span
          className={`text-sm font-bold contrast-200]
          `}
          style={{ color: `${bgHexColor}` }}
        >
          {heroSkill}
        </span>
        <br />
        <span className={`text-3xl`}>{heroName}</span>

        <p className="m-4 text-[1rem] text-gray-400 overflow-hidden">
          {heroDescription}
        </p>
      </section>

      {/* Hero Bottom Bar Section */}
      <section
        className={`hero-footer w-[100%] h-[10%] bg-cover rounded-b-xl fixed bottom-0 text-center text-sm font-bold text-white drop-shadow-2xl`}
        style={{ backgroundColor: `${bgHexColor}` }}
      >
        <span className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.4)]">
          {timesUsed} <br />
          TIMES USED
        </span>

        <span></span>
      </section>
      <div className="flex flex-col try-btn">
        <Link
          to={`/${heroPageUrl}`}
          className="top-[45%] fixed flex flex-col items-center"
        >
          <Button
            size="lg"
            style={{ backgroundColor: `${bgHexColor}` }}
            className="fixed hover:opacity-80 h-14 text-2xl text-white translate-y-[20%]"
          >
            !جربه الآن
          </Button>
        </Link>
        {/* <button className="btn" style={{ backgroundColor: `${bgHexColor}` }}>
          Try me out!
        </button> */}
        <br />
        <span className="fixed mt-[50%] text-3xl">{heroName}</span>
        <span
          className="fixed mt-[70%] font-bold text-sm"
          style={{ color: `${bgHexColor}` }}
        >
          {heroSkill}
        </span>
      </div>
    </figure>
  );
}

{
  /* <p className={`text-[${bgHexColor}]`}>{heroName}</p> */
}
