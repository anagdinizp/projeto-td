export function ProfileMobile() {
  return (
    <div className=" bg-white border-b border-b-gray-400">
      <div className="border-b border-b-gray-400">
        <div>
          <img
            className="w-[164px] h-[162px] rounded-full m-auto mt-4 overflow-hidden"
            src="https://images.pexels.com/photos/4076339/pexels-photo-4076339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="block text-black font-extralight p-10">
          <div className="flex justify-between">
            <strong className="block font-bold text-2xl text-start mr-1">
              Louise Munik
            </strong>
            <button className="bg-gray-200 w-28 h-10 text-white font-bold rounded-lg text-lg justify-items-center">
              Editar
            </button>
          </div>
          <strong className="block font-bold text-lg mt-4 text-start">
            Idade:{" "}
            <span className="inline text-start font-extralight text-black text-lg">
              23 anos
            </span>
          </strong>
          <strong className="block font-bold text-lg mt-1 text-start">
            Profissão:{" "}
            <span className="inline text-start font-extralight text-black text-lg">
              Estudante
            </span>
          </strong>
          <strong className="block font-bold text-lg mt-1 text-start">
            Localização:{" "}
            <span className=" inline text-start font-extralight text-black text-lg">
              Campina Grande, PB
            </span>
          </strong>
          <strong className="block font-bold text-lg mt-1 text-start">
            Contato:{" "}
            <span className=" inline text-start font-extralight text-black text-lg">
              83 9 8735-0316
            </span>
          </strong>
        </div>
      </div>

      <div>
        <div className="bg-white mt-2 rounded-lg mb-10 border-b border-b-gray-400">
          <div>
            <img
              className="w-[164px] h-[162px] rounded-full m-auto mt-4 overflow-hidden"
              src="https://images.pexels.com/photos/4148015/pexels-photo-4148015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="block text-black font-extralight p-10">
            <div className="flex justify-between">
              <strong className="block font-bold text-2xl text-start mr-1">
                Bisteca 
              </strong>
              <button className="bg-gray-200 w-28 h-10 text-white font-bold rounded-lg text-lg justify-items-center cursor-pointer">
                Editar
              </button>
            </div>
            <strong className="block font-bold text-lg mt-4 text-start">
              Idade:{" "}
              <span className="inline text-start font-extralight text-black text-lg">
                2 anos
              </span>
            </strong>
            <strong className="block font-bold text-lg mt-1 text-start">
              Raça:{" "}
              <span className="inline text-start font-extralight text-black text-lg">
                Dachshund
              </span>
            </strong>
            <strong className="block font-bold text-lg mt-1 text-start">
              Sexo:{" "}
              <span className="inline text-start font-extralight text-black text-lg">
                Macho
              </span>
            </strong>
            <strong className="block font-bold text-lg mt-1 text-start">
              Localização:{" "}
              <span className="inline text-start font-extralight text-black text-lg">
                Campina Grande, PB
              </span>
            </strong>
          </div>
          <div className="flex justify-between">
            <button className="mt-26 cursor-pointer">
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
        </div>
      </div>
    </div>
  );
}
