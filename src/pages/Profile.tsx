import { faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
type genderType = "Macho" | "Fêmea";

interface profileData {
  dogAvatar: string;
  dogName: string;
  dogAge: number;
  dogBreed: string;
  dogGender: genderType;
  locale: string;
  dogImages: string;
  ownerAvatar: string;
  ownerName: string;
  ownerAge: number;
  ownerCareer: string;
  telefone: number;
  message: string;
}

const dogs = [
  {
    name: "Simba",
    age: 2,
    breed: "Viralata",
    gender: "Macho",
    locale: "Campina Grande, PB",
    dogAvatar:
      "https://images.pexels.com/photos/1139794/pexels-photo-1139794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gallery: "",
  },
  {
    name: "Arleu",
    age: 3,
    breed: "Dachshund",
    gender: "Macho",
    locale: "João Pessoa, PB",
    dogAvatar:
      "https://images.pexels.com/photos/4148015/pexels-photo-4148015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    gallery: "",
  }
];

export function Profile() {
  const editar = <FontAwesomeIcon icon={faUserEdit} />;
  return (
    <div>
      <div className="bg-white border-b border-b-gray-400 block md:flex">
        <div className="md:ml-10 md:p-10">
          <img
            className="w-[164px] h-[162px] rounded-full m-auto mt-4 overflow-hidden md:w-[274px] md:h-[274px]"
            src="https://avatars.githubusercontent.com/u/79330582?s=400&u=e88e101513b2173c42906d3fef5200e053753106&v=4"
          />
        </div>
        <div className="block text-black font-extralight p-10 ml-1 md:p-20 md:-ml-16">
          <div className="flex justify-between">
            <strong className="block text-black font-bold text-2xl mr-1 md:text-4xl md:mr-8">
              Ana
            </strong>
            <a href="/editar" className="justify-items-center">
              <span className="inline-block align-middle text-2xl">{editar}</span>
            </a>
          </div>
          <strong className="block font-bold text-lg mt-4 md:mt-10 text-start">
            Idade:
            <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
              23 anos
            </span>
          </strong>
          <strong className="block font-bold text-lg mt-1 md:text-start">
            Profissão:
            <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
              Estudante
            </span>
          </strong>
          <strong className="block font-bold text-lg mt-1 md:text-start">
            Localização:
            <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
              Campina Grande, PB
            </span>
          </strong>
          <strong className="block font-bold text-lg mt-1 md:text-start">
            Contato:
            <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
              xxxxxxxxx
            </span>
          </strong>
        </div>
      </div>
      {dogs.map((dog) => (
        <div className="bg-white mt-2 rounded-lg mb-10 border-b border-b-gray-400 md:flex md:justify-between">
          <div className="md:ml-10 md:p-10">
            <img
              className="w-[164px] h-[162px] rounded-full m-auto mt-4 overflow-hidden md:w-[274px] md:h-[274px]"
              src={dog.dogAvatar}
            />
          </div>
          <div className="block text-black font-extralight p-10 md:p-20 md:-ml-16">
            <div className="flex justify-between">
              <strong className="block font-bold text-2xl text-start mr-1 md:text-4xl md:mr-8">
                {dog.name}
              </strong>
              <a href="/pet" className="justify-items-center">
                <span className="inline-block align-middle text-2xl">{editar}</span>
              </a>
            </div>
            <strong className="block font-bold text-lg mt-4 text-start md:mt-10">
              Idade:
              <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
                {dog.age} anos
              </span>
            </strong>
            <strong className="block font-bold text-lg mt-1 text-start">
              Raça:
              <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
                {dog.breed}
              </span>
            </strong>
            <strong className="block font-bold text-lg mt-1 text-start">
              Sexo:
              <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
                {dog.gender}
              </span>
            </strong>
            <strong className="block font-bold text-lg mt-1 text-start">
              Localização:
              <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
                {dog.locale}
              </span>
            </strong>
          </div>
          <div className="flex justify-between">{dog.gallery}</div>
        </div>
      ))}
    </div>
  );
}
