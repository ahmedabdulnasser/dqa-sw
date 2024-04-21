import Character from "../components/Character";
export default function Home() {
  return (
    <section className="flex flex-col">
      <p className="top-[15%] drop-shadow-2xl mx-4 my-2 font-geologica text-center text-lg text-white md:text-3xl">
        Currently Working
      </p>
      <section className="flex flex-wrap justify-center content-center">
        <Character
          heroName="المحامى"
          heroDescription=" مساعدك القانوني الافتراضي. بدمج تكنولوجيا الذكاء الاصطناعي مع الخبرة القانونية، يوفر الحلول بسرعة ودقة لاستفساراتك القانونية. من مراجعة العقود إلى صياغة الوثائق القانونية، تسهّل دردشتنا الآلية العمليات القانونية المعقدة بشكل سلس "
          heroSkill="Legal Assistant"
          heroAvatarUrl="./hero-avatars/detective.svg"
          heroPageUrl="legal-assistant"
          bgHexColor="#60846A"
          bgImgUrl="./hero-bg/bg-dark-green.png"
          timesUsed={"1240"}
        />

        <Character
          heroName="الطبيب"
          heroDescription="مساعدك الصحي الافتراضي. يقدم الحلول السريعة والموثوقة لاستفساراتك الطبية بتقنية الذكاء الاصطناعي. من تقديم المعلومات الطبية إلى توجيهك للعلاج المناسب، توفر الدردشة الطبية الدعم الفوري والشخصي لصحتك"
          heroSkill="Medical Assistant"
          heroAvatarUrl="./hero-avatars/medic.svg"
          heroPageUrl="medical-assistant"
          bgHexColor="#03678E"
          bgImgUrl={"./hero-bg/bg-crystal.jpg"}
          timesUsed={"3210"}
        />

        <Character
          heroName="المُذكر"
          heroDescription=" المساعد الإسلامي، رفيقك في تعزيز تجربتك الدينية والثقافية. يقدم المعلومات والإرشاد الديني بناءً على الشريعة الإسلامية بشكل دقيق وموثوق، بتقنيات الذكاء الاصطناعي. سواء كنت تبحث عن الصلاة أو الأذكار أو معلومات عن الإسلام"
          heroSkill="Muslim Assistant"
          heroPageUrl="muslim-assistant"
          heroAvatarUrl="./hero-avatars/sheikh.svg"
          bgHexColor="#8C62B6"
          bgImgUrl={"./hero-bg/bg-violet.jpg"}
          timesUsed={"3210"}
        />
      </section>
      <p className="top-[15%] drop-shadow-2xl mx-4 my-2 font-geologica text-center text-lg text-white md:text-3xl">
        Coming soon! (Under development)
      </p>
      <section className="flex flex-wrap justify-center content-center">
        <Character
          heroName="المُعلم"
          heroDescription=" مساعدك الدراسي الافتراضي، صديقك الذكي في عالم التعليم. يوفر الإرشاد والدعم في مختلف المواضيع الدراسية بتقنية الذكاء الاصطناعي. من توجيهك في الدروس إلى توفير الموارد التعليمية، يجعل مساعد التعليم التعلم سهلاً وممتعًا."
          heroSkill="Educational Assistant"
          heroAvatarUrl="./hero-avatars/teacher.svg"
          heroPageUrl="educational-assistant"
          bgHexColor="#686868"
          bgImgUrl={"./hero-bg/bg-gray.jpg"}
          timesUsed={"3210"}
        />
        <Character
          heroName="الصحفى"
          heroDescription="مساعدك في عالم الأخبار والمعلومات، يقدم لك آخر الأخبار والمحتوى الإخباري بشكل سريع وموثوق، باستخدام تقنيات الذكاء الاصطناعي. سواء كنت تبحث عن أخبار محلية أو عالمية، بوت الأخبار يجعلك على اطلاع دائم بكل سهولة ويسر"
          heroSkill="News Assistant"
          heroAvatarUrl="./hero-avatars/journalist.svg"
          heroPageUrl="news-assistant"
          bgHexColor="#9D7250"
          bgImgUrl={"./hero-bg/bg-light-brown.jpg"}
          timesUsed={"3210"}
        />
      </section>
    </section>
  );
}
