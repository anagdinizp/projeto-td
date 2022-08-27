import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import useBreakpoint from "../Hooks/useBreakpoints";

interface dogData {
  name: String;
  age: Number;
  breed: String;
  gender: Number;
  locale: String;
  avatar: String;
}

export function DogProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [breed, setBreed] = useState("");
  const [gender, setGender] = useState("");
  const [locale, setLocale] = useState("");
  const breakpoint = useBreakpoint();

  function saveChanges() {}

  return (
    <>
      <strong className="flex justify-center font-bold text-xl p-2 mt-5 md:text-2xl">
        Editar informações do pet
      </strong>
      <div className="grid gap-2 ml-5 mr-5 border-b">
        <div className="flex flex-col items-center">
          <img
            className="w-[164px] h-[162px] rounded-full m-auto mt-4 overflow-hidden"
            src="https://images.pexels.com/photos/4148015/pexels-photo-4148015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <button className="mt-2">
            <img src="https://img.icons8.com/sf-regular/40/000000/edit-image.png" />
          </button>
        </div>
        <div className="flex md:w-[600px] justify-self-center">
          <form
            onSubmit={saveChanges}
            className="flex flex-col gap-2 w-full h-full"
          >
            <strong className="text-black text-base mb-1 md:text-2xl">
              Nome
            </strong>
            <Input
              styleType={{
                theme: "light",
                size: "s",
              }}
              type={"text"}
              placeholder={"Bisteca"}
              value={name}
              setState={setName}
            />
            <strong className="text-black text-base mb-1 md:text-2xl">
              Idade
            </strong>
            <Input
              styleType={{
                theme: "light",
                size: "s",
              }}
              type={"number"}
              placeholder={"2 anos"}
              value={age}
              setState={setAge}
            />
            <strong className="text-black text-base mb-1 md:text-2xl">
              Raça
            </strong>
            <Input
              styleType={{
                theme: "light",
                size: "s",
              }}
              type={"text"}
              placeholder={"Dachshund"}
              value={breed}
              setState={setBreed}
            />
            <strong className="text-black text-base mb-1 md:text-2xl">
              Sexo
            </strong>
            <Input
              styleType={{
                theme: "light",
                size: "s",
              }}
              type={"text"}
              placeholder={"Macho"}
              value={gender}
              setState={setGender}
            />
            <strong className="text-black text-base mb-1 md:text-2xl">
              Localização
            </strong>
            <Input
              styleType={{
                theme: "light",
                size: "s",
              }}
              type={"text"}
              placeholder={"Campina Grande, PB"}
              value={locale}
              setState={setLocale}
            />
            <div className="">
              <Button styleButton={{ color: "nude", size: "s" }}>Salvar</Button>
            </div>
          </form>
        </div>
        <div className="flex justify-end items-center cursor-pointer">
          <span className="text-base md:text-xl">Excluir pet</span>
          <button className="ml-1 mb-1">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/pet-commands-dismiss.png" />
          </button>
        </div>
      </div>
      <div>
        <strong className="flex justify-center font-bold text-xl p-2 mb-5 mt-5 md:text-2xl">
          Editar galeria
        </strong>
        {breakpoint == "xs" || breakpoint == "sm" ? (
        <div className="flex-col">
          <div className="flex items-center">
            <img
            className="w-[326px] h-[340px] rounded-3xl mr-1 mt-3 p-4"
            src="https://images.pexels.com/photos/6399509/pexels-photo-6399509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <button className="">
              <img src="https://img.icons8.com/sf-regular/48/000000/trash.png"/>
            </button>
          </div>
          <div className="flex items-center">
            <img
            className="w-[326px] h-[340px] rounded-3xl mr-1 mt-3 p-4"
            src="https://images.pexels.com/photos/5565246/pexels-photo-5565246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <button className="">
              <img src="https://img.icons8.com/sf-regular/48/000000/trash.png"/>
            </button>
          </div>
          <div className="flex items-center">
            <img
            className="w-[326px] h-[340px] rounded-3xl mr-1 mt-3 p-4"
            src="https://images.pexels.com/photos/4994351/pexels-photo-4994351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <button className="">
              <img src="https://img.icons8.com/sf-regular/48/000000/trash.png"/>
            </button>
          </div>
          <div className="flex items-center">
            <img
            className="w-[326px] h-[340px] rounded-3xl mr-1 mt-3 p-4"
            src="https://images.pexels.com/photos/6399508/pexels-photo-6399508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <button className="">
              <img src="https://img.icons8.com/sf-regular/48/000000/trash.png"/>
            </button>
          </div>
        </div>
        ) : (
          <div className="flex justify-around">
          <div className="flex items-center">
            <img
            className="w-[326px] h-[340px] rounded-3xl mr-1 mt-3 p-4"
            src="https://images.pexels.com/photos/6399509/pexels-photo-6399509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <button className="">
              <img src="https://img.icons8.com/sf-regular/48/000000/trash.png"/>
            </button>
          </div>
          <div className="flex items-center">
            <img
            className="w-[326px] h-[340px] rounded-3xl mr-1 mt-3 p-4"
            src="https://images.pexels.com/photos/5565246/pexels-photo-5565246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <button className="">
              <img src="https://img.icons8.com/sf-regular/48/000000/trash.png"/>
            </button>
          </div>
          <div className="flex items-center">
            <img
            className="w-[326px] h-[340px] rounded-3xl mr-1 mt-3 p-4"
            src="https://images.pexels.com/photos/4994351/pexels-photo-4994351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <button className="">
              <img src="https://img.icons8.com/sf-regular/48/000000/trash.png"/>
            </button>
          </div>
          <div className="flex items-center">
            <img
            className="w-[326px] h-[340px] rounded-3xl mr-1 mt-3 p-4"
            src="https://images.pexels.com/photos/6399508/pexels-photo-6399508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <button className="">
              <img src="https://img.icons8.com/sf-regular/48/000000/trash.png"/>
            </button>
          </div>
        </div>
        )}
      </div>
      <div className="flex justify-center mt-5 mb-5 cursor-pointer">
        <button>
          <img src="https://img.icons8.com/ios-filled/50/000000/plus-2-math.png" />
        </button>
      </div>
    </>
  );
}
