import { Anchor } from "./Anchor";

type genderType = "Macho" | "Fêmea";

interface dataCard {
  name: string;
  age: number;
  gender: string;
  breed: string;
  locale: string;
  dogImage: string;
}

export function Card({ name, age, gender, breed, locale, dogImage }: dataCard) {
  return (
    <div className="block bg-gray-100 rounded-lg w-[350px] mx-4 my-4 justify-center align-middle">
        <div className="flex text-center">
          <img
            className="rounded-lg m-auto mt-8 overflow-hidden w-[310px] h-[310px]"
            src={dogImage}
          />
        </div>
      <div className="block text-black">
        <strong className="block mt-6 text-2xl font-bold text-center justify-items-center">
          {name}
        </strong>
        <strong className="block pl-5 pb-1 text-black mt-2 ml-3 text-lg text-start">
          Idade:
          <span className="inline font-extralight text-black text-lg text-start">
            {" "}
            {age}
          </span>
        </strong>
        <strong className="block pl-5 pb-1 ml-3 text-black text-lg text-start">
          Raça:
          <span className=" inline text-start font-extralight text-black text-lg ">
            {" "}
            {breed}
          </span>
        </strong>
        <strong className="block pl-5 pb-1 ml-3 text-black text-lg text-start">
          Sexo:
          <span className="inline font-extralight text-black text-lg text-start">
            {" "}
            {gender}
          </span>
        </strong>
        <strong className="block pl-5 pb-3 ml-3 text-black text-lg text-start">
          Localização:
          <span className="inline font-extralight text-black text-lg text-start">
            {" "}
            {locale}
          </span>
        </strong>
      </div>
      <button className="block bg-gray-500 shadow-md rounded-b-lg px-5 w-full h-12">
        <Anchor href={""} text={""} icon={"pawBlack"} />
      </button>
    </div>
  );
}
