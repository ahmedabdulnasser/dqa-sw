import ContribCard from "../components/ContribCard";
export default function Contributors() {
  return (
    <section className="flex flex-col items-center font-geologica text-2xl text-white">
      <h1 className="m-2">Supervisors</h1>
      <span className="separator"></span>
      <div className="flex flex-wrap justify-center m-2 w-[50%]">
        <ContribCard
          name="Dr. Mona Alnaggar"
          role="Project Supervisor"
          team=""
          imgUrl="./team-avatars/dr-mona.jpeg"
        />
        <ContribCard
          name="Eng. Ahmed Selim"
          role="Teaching Assistant"
          team=""
        />
      </div>

      <h1 className="m-2">AI Team </h1>
      <span className="separator"></span>
      <div className="flex flex-wrap justify-center md:justify-between m-2 w-[50%]">
        <ContribCard name="Mai Saeed" role="XYZ" team="" />
        <ContribCard name="Alaa Ayman" role="XYZ" team="" />
        <ContribCard name="Ahmed Emad" role="XYZ" team="" />
        <ContribCard
          name="Sayed Mahmoud"
          role="XYZ"
          team=""
          imgUrl="./team-avatars/s-mahmoud.png"
        />
        <ContribCard
          name="Omar Maarouf"
          role="XYZ"
          team=""
          imgUrl="./team-avatars/o-marouf.png"
        />
        <ContribCard
          name="Mohamed Taj-Eldeen"
          role="XYZ"
          team=""
          imgUrl="./team-avatars/m-tajeldeen.png"
        />
        <ContribCard name="Sara Waleed" role="XYZ" team="" />
      </div>
      <h1 className="m-2">Software Development Team </h1>
      <span className="separator"></span>
      <div className="flex flex-wrap justify-center md:justify-between m-2 w-[50%]">
        <ContribCard
          name="Ahmed Abdel-Nasser"
          role="Frontend Development"
          team=""
          imgUrl="./team-avatars/mastermind.jpeg"
        />

        <ContribCard
          name="Mohamed El-Haddad"
          role="Frontend Development"
          team=""
          imgUrl="./team-avatars/m-elhaddad.png"
        />
        <ContribCard
          name="Ahmed Mohamed Gaber"
          role="Backend Development"
          team=""
        />
      </div>
    </section>
  );
}
