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
  return (
    <div className="p-4">
      <div className="bg-white flex justify-around rounded-lg border-b border-b-gray-400">
        <div className="p-10 ml-[23%]">
          <img
            className="w-[274px] h-[274px] rounded-full"
            src="https://images.pexels.com/photos/4076339/pexels-photo-4076339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="text-black font-extralight p-20 -ml-96 mr-[15%]">
          <div className="flex justify-between">
            <strong className="block font-bold text-4xl mr-8">
              Louise Munik
            </strong>
            <button className="bg-gray-200 w-32 h-11 text-white font-bold rounded-lg text-2xl">
              Editar
            </button>
          </div>
          <strong className="block font-bold text-lg mt-10">
            Idade: <span className="font-light">23 anos</span>
          </strong>
          <strong className="block font-bold text-lg mt-1">
            Profissão: <span className="font-light">Estudante</span>
          </strong>
          <strong className="block font-bold text-lg mt-1">
            Localização: <span className="font-light">Campina Grande, PB</span>
          </strong>
          <strong className="block font-bold text-lg mt-1">
            Contato: <span className="font-light">83 9 8735-0316</span>
          </strong>
        </div>
      </div>

      <div className="bg-white mt-2 flex justify-between rounded-lg border-b border-b-gray-400">
        <div className="ml-10 p-10">
          <img
            className="w-[274px] h-[274px] rounded-full"
            src="https://images.pexels.com/photos/4148015/pexels-photo-4148015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="text-black font-extralight p-20 -ml-16">
          <div className="flex justify-between">
            <strong className="block font-bold text-4xl mr-8">Bisteca</strong>
            <button className="bg-gray-200 w-32 h-11 text-white font-bold rounded-lg text-2xl cursor-pointer">
              Editar
            </button>
          </div>
          <strong className="block font-bold text-lg mt-10">
            Idade: <span className="font-light">2 anos</span>
          </strong>
          <strong className="block font-bold text-lg mt-1">
            Raça: <span className="font-light">Dachshund</span>
          </strong>
          <strong className="block font-bold text-lg mt-1">
            Sexo: <span className="font-light">Macho</span>
          </strong>
          <strong className="block font-bold text-lg mt-1">
            Localização: <span className="font-light">Campina Grande, PB</span>
          </strong>
        </div>
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

      <div className="bg-white mt-2 flex justify-between rounded-lg">
        <div className="ml-10 p-10">
          <img
            className="w-[274px] h-[274px] rounded-full"
            src="https://images.pexels.com/photos/4084032/pexels-photo-4084032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="text-black font-extralight p-20 -ml-16">
          <div className="flex justify-between">
            <strong className="block font-bold text-4xl mr-8">Arleu</strong>
            <button className="bg-gray-200 w-32 h-11 text-white font-bold rounded-lg text-2xl">
              Editar
            </button>
          </div>
          <strong className="block font-bold text-lg mt-10">
            Idade: <span className="font-light">4 anos</span>
          </strong>
          <strong className="block font-bold text-lg mt-1">
            Raça: <span className="font-light">Dachshund</span>
          </strong>
          <strong className="block font-bold text-lg mt-1">
            Sexo: <span className="font-light">Macho</span>
          </strong>
          <strong className="block font-bold text-lg mt-1">
            Localização: <span className="font-light">Campina Grande, PB</span>
          </strong>
        </div>
        <button className="mt-26 cursor-pointer">
          <img src="https://img.icons8.com/ios/50/000000/plus-2-math.png" />
        </button>
        <div className="flex justify-between">
          <img
            className="w-[326px] h-[340px] rounded-3xl mr-1 mt-3 p-4"
            src="https://images.pexels.com/photos/4076343/pexels-photo-4076343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <img
            className="w-[326px] h-[340px] rounded-3xl mr-1 mt-3 p-4"
            src="https://images.pexels.com/photos/4076337/pexels-photo-4076337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <img
            className="w-[326px] h-[340px] rounded-3xl mr-1 mt-3 p-4"
            src="https://images.pexels.com/photos/3104723/pexels-photo-3104723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <button className="mt-26 mr-5 cursor-pointer">
          <img src="https://img.icons8.com/ios/50/000000/right-squared--v1.png" />
        </button>
      </div>
    </div>
  );
}
