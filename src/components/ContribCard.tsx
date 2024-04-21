import { Linkedin, MessageSquareMore, MessagesSquare } from "lucide-react";
type Props = {
  name: string;
  role: string;
  team: string;
  imgUrl: string;
  LinkedinUrl: string;
  WhatsappNumber: string;
};
export default function ContribCard({
  name,
  role,
  team,
  imgUrl = "./team-avatars/default.jpg",
  LinkedinUrl = "https://linkedin.com",
  WhatsappNumber = "000",
}: Props) {
  return (
    <figure className="flex justify-center drop-shadow-2xl mx-4 my-4 text-white">
      <div className="flex flex-col items-center mx-0">
        <img src={imgUrl} alt="" className="rounded-full w-32 h-32" />
        <h1 className="flex flex-wrap justify-center items-center mx-0 w-[100%] font-bold text-center text-xl">
          {name}
        </h1>
        <span className="mt-0 mb-1 text-sm">{role}</span>
        <div className="flex">
          <span className="flex justify-center bg-[#0077b5] mx-1 rounded-full">
            <a href={LinkedinUrl} target="_blank">
              <Linkedin className="mx-1 w-4 hover:text-white" />
            </a>
          </span>
          <span className="flex justify-center bg-[#25D366] mx-1 rounded-full">
            <a href={`https://wa.me/${WhatsappNumber}`} target="_blank">
              <MessageSquareMore className="mx-1 w-4 hover:text-white" />
            </a>
          </span>
        </div>
      </div>
    </figure>
  );
}
