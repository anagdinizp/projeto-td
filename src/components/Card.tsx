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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center items-center bg-white w-80 h-fit rounded-lg p-5 shadow-md">
      <div className="bg-transparent"/>
      <div className="justify-items-center">
        <img
          className="relative rounded-full overflow-hidden w-96 h-28"
          src={dogImage}
        />
      </div>
      <div className="flex justify-items-center flex-wrap">
        <strong className="text-2xl font-bold text-black text-center">
          {name}
        </strong>
        <strong className="text-black mt-2 text-sm">
          Idade:<span className="font-extralight text-black text-sm">{age}</span>
        </strong>
        <strong className="text-black text-sm">
          Raça:<span className="font-extralight text-black text-sm">{breed}</span>
        </strong>
        <strong className="text-black text-sm">
          Sexo:
          <span className="font-extralight text-black text-sm">{gender}</span>
        </strong>
        <strong className="text-black text-sm">
          Localização:
          <span className="font-extralight text-black text-sm">{locale}</span>
        </strong>
      </div>
      <div className="block bg-yellow-400 rounded-b-lg h-9 mt-48 w-72">
        <div className="justify-center text-center">
          <Anchor href={""} text={""} icon={"pawBlack"} />
        </div>
      </div>
    </div>
  );
}
