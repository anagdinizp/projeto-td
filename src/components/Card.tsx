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
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-center items-center bg-white w-[22rem] h-fit rounded-lg p-5">
      <div className="flex justify-center">
        <img
          className="rounded-full overflow-hidden w-52 h-52"
          src={dogImage}
        />
      </div>
      <div className="flex">
        <strong className="text-2xl font-bold text-black text-center">
          {name}
        </strong>
        <strong>
          Idade:<span className="font-extralight text-black">{age}</span>
        </strong>
        <strong>
          Raça:<span className="font-extralight text-black">{breed}</span>
        </strong>
        <strong>
          Sexo:
          <span className="font-extralight text-black">{gender}</span>
        </strong>
        <strong>
          Localização:
          <span className="font-extralight text-black">{locale}</span>
        </strong>
      </div>
    </div>
  );
}
