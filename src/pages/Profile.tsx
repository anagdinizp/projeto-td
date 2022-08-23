import { Link } from "react-router-dom";
import useBreakpoint from "../Hooks/useBreakpoints";

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

export function Profile() {
  const breakpoint = useBreakpoint();
  return (
    <div>
      <div className="bg-white border-b border-b-gray-400 block md:flex">
        <div className="md:ml-10 md:p-10">
          <img
            className="w-[164px] h-[162px] rounded-full m-auto mt-4 overflow-hidden md:w-[274px] md:h-[274px]"
            src="https://avatars.githubusercontent.com/u/79330582?s=400&u=e88e101513b2173c42906d3fef5200e053753106&v=4"
          />
        </div>
        <div className="block text-black font-extralight p-10 md:p-20">
          <div className="flex justify-between">
            <strong className="block text-black font-bold text-2xl mr-1 md:text-4xl md:mr-8">
              Ana
            </strong>
            <a href="/editar" className="justify-items-center" >
              <img src="https://img.icons8.com/fluency-systems-regular/35/000000/edit-user.png"/>
            </a>
          </div>
          <strong className="block font-bold text-lg mt-4 md:mt-10 text-start">
            Idade:{" "}
            <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
              23 anos
            </span>
          </strong>
          <strong className="block font-bold text-lg mt-1 md:text-start">
            Profissão:{" "}
            <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
              Estudante
            </span>
          </strong>
          <strong className="block font-bold text-lg mt-1 md:text-start">
            Localização:{" "}
            <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
              Campina Grande, PB
            </span>
          </strong>
          <strong className="block font-bold text-lg mt-1 md:text-start">
            Contato:{" "}
            <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
              xxxxxxxxx
            </span>
          </strong>
        </div>
      </div>

      <div className="bg-white mt-2 rounded-lg mb-10 border-b border-b-gray-400 md:flex md:justify-between">
        <div className="md:ml-10 md:p-10">
          <img
            className="w-[164px] h-[162px] rounded-full m-auto mt-4 overflow-hidden md:w-[274px] md:h-[274px]"
            src="https://images.pexels.com/photos/4148015/pexels-photo-4148015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="block text-black font-extralight p-10 md:p-20 md:-ml-16">
          <div className="flex justify-between">
            <strong className="block font-bold text-2xl text-start mr-1 md:text-4xl md:mr-8">
              Bisteca
            </strong>
            <button className="justify-items-center">
              <img src="https://img.icons8.com/fluency-systems-regular/35/000000/edit-user.png"/>
            </button>
          </div>
          <strong className="block font-bold text-lg mt-4 text-start md:mt-10">
            Idade:{" "}
            <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
              2 anos
            </span>
          </strong>
          <strong className="block font-bold text-lg mt-1 text-start">
            Raça:{" "}
            <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
              Dachshund
            </span>
          </strong>
          <strong className="block font-bold text-lg mt-1 text-start">
            Sexo:{" "}
            <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
              Macho
            </span>
          </strong>
          <strong className="block font-bold text-lg mt-1 text-start">
            Localização:{" "}
            <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
              Campina Grande, PB
            </span>
          </strong>
        </div>
        {breakpoint == "xs" || breakpoint == "sm" ? (
          <div className="flex justify-between">
            <button className="mt-26 ml-5 cursor-pointer">
              <img src="https://img.icons8.com/ios/50/000000/plus-2-math.png" />
            </button>
            <div className="flex-wrap">
              <img
                className="rounded-lg m-auto mt-2 mb-4 overflow-hidden w-[223px] h-[213px]"
                src="https://images.pexels.com/photos/6399509/pexels-photo-6399509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
            <button className="mt-26 mr-5 cursor-pointer">
              <img src="https://img.icons8.com/ios/50/000000/right-squared--v1.png" />
            </button>
          </div>
        ) : (
          <div className="flex justify-between">
            <button className="mt-26 cursor-pointer">
              <img src="https://img.icons8.com/ios/50/000000/plus-2-math.png" />
            </button>
            <div className="flex justify-between">
              <img
                className="w-[326px] h-[340px] rounded-3xl mr-1 mt-3 p-4"
                src="https://images.pexels.com/photos/6399509/pexels-photo-6399509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <img
                className="w-[326px] h-[340px] rounded-3xl mr-1 mt-3 p-4"
                src="https://images.pexels.com/photos/5565246/pexels-photo-5565246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <img
                className="w-[326px] h-[340px] rounded-3xl mr-1 mt-3 p-4"
                src="https://images.pexels.com/photos/4994351/pexels-photo-4994351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
            <button className="mt-26 mr-5 cursor-pointer">
              <img src="https://img.icons8.com/ios/50/000000/right-squared--v1.png" />
            </button>
          </div>
        )}
      </div>

      <div className="bg-white mt-2 rounded-lg mb-10 md:flex md:justify-between">
        <div className="md:ml-10 md:p-10">
          <img
            className="w-[164px] h-[162px] rounded-full m-auto mt-4 overflow-hidden md:w-[274px] md:h-[274px]"
            src="https://images.pexels.com/photos/4084032/pexels-photo-4084032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="block text-black font-extralight p-10 md:p-20 md:-ml-16">
          <div className="flex justify-between">
            <strong className="block font-bold text-2xl text-start mr-1 md:text-4xl md:mr-8">
              Arleu
            </strong>
            <button className="justify-items-center">
              <img src="https://img.icons8.com/fluency-systems-regular/35/000000/edit-user.png"/>
            </button>
          </div>
          <strong className="block font-bold text-lg mt-4 text-start md:mt-10">
            Idade:{" "}
            <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
              4 anos
            </span>
          </strong>
          <strong className="block font-bold text-lg mt-1 text-start">
            Raça:{" "}
            <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
              Dachshund
            </span>
          </strong>
          <strong className="bblock font-bold text-lg mt-1 text-start">
            Sexo:{" "}
            <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
              Macho
            </span>
          </strong>
          <strong className="block font-bold text-lg mt-1 text-start">
            Localização:{" "}
            <span className="inline text-start font-extralight text-black text-lg md:font-extralight">
              Campina Grande, PB
            </span>
          </strong>
        </div>
        {breakpoint == "xs" || breakpoint == "sm" ? (
          <div className="flex justify-between">
            <button className="mt-26 ml-5 cursor-pointer">
              <img src="https://img.icons8.com/ios/50/000000/plus-2-math.png" />
            </button>
            <div className="flex-wrap">
              <img
                className="rounded-lg m-auto mt-2 mb-4 overflow-hidden w-[223px] h-[213px]"
                src="https://images.pexels.com/photos/4107056/pexels-photo-4107056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
            <button className="mt-26 mr-5 cursor-pointer">
              <img src="https://img.icons8.com/ios/50/000000/right-squared--v1.png" />
            </button>
          </div>
        ) : (
          <div className="flex justify-between">
            <button className="mt-26 cursor-pointer">
              <img src="https://img.icons8.com/ios/50/000000/plus-2-math.png" />
            </button>
            <div className="flex justify-between">
              <img
                className="w-[326px] h-[340px] rounded-3xl mr-1 mt-3 p-4"
                src="https://images.pexels.com/photos/4107056/pexels-photo-4107056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <img
                className="w-[326px] h-[340px] rounded-3xl mr-1 mt-3 p-4"
                src="https://images.pexels.com/photos/1139795/pexels-photo-1139795.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
              <img
                className="w-[326px] h-[340px] rounded-3xl mr-1 mt-3 p-4"
                src="https://images.pexels.com/photos/688694/pexels-photo-688694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              />
            </div>
            <button className="mt-26 mr-5 cursor-pointer">
              <img src="https://img.icons8.com/ios/50/000000/right-squared--v1.png" />
            </button>
          </div>)
        }
    </div>
  </div>
  );
}
