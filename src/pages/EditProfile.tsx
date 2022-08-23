import { useState } from "react";
import { Button } from "../components/Button";
import { Input, InputPassword } from "../components/Input";

interface profileData {
  name: String;
  age: Number;
  career: String;
  telefone: Number;
  locale: String;
  email: String;
  senha: String;
  avatar: String;
}

export function EditProfile() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [career, setCareer] = useState("");
  const [locale, setLocale] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");

  function saveChanges() {}

  return (
    <div className="grid gap-2 ml-5 mr-5">
      <div className="flex flex-col items-center">
        <img
          className="w-[164px] h-[162px] rounded-full m-auto mt-4 overflow-hidden md:w-[274px] md:h-[274px]"
          src="https://avatars.githubusercontent.com/u/79330582?v=4"
        />
        <button className="mt-2">
          <img src="https://img.icons8.com/small/30/000000/edit-image.png" />
        </button>
      </div>
      <form
        onSubmit={saveChanges}
        className="flex flex-col gap-2 w-full h-full"
      >
        <strong className="text-black text-base mb-1 md:text-2xl">Nome</strong>
        <Input
          styleType={{
            theme: "light",
            size: "s",
          }}
          type={"text"}
          placeholder={"Ana Gabriela"}
          value={name}
          setState={setName}
        />
        <strong className="text-black text-base mb-1 md:text-2xl">Idade</strong>
        <Input
          styleType={{
            theme: "light",
            size: "s",
          }}
          type={"number"}
          placeholder={"23 anos"}
          value={age}
          setState={setAge}
        />
        <strong className="text-black text-base mb-1 md:text-2xl">
          Profissão
        </strong>
        <Input
          styleType={{
            theme: "light",
            size: "s",
          }}
          type={"text"}
          placeholder={"Estudante"}
          value={career}
          setState={setCareer}
        />
        <strong className="text-black text-base mb-1 md:text-2xl">
          Contato
        </strong>
        <Input
          styleType={{
            theme: "light",
            size: "s",
          }}
          type={"number"}
          placeholder={"83 98735-0316"}
          value={telephone}
          setState={setTelephone}
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
        <strong className="text-black text-base mb-1 md:text-2xl">Email</strong>
        <Input
          styleType={{
            theme: "light",
            size: "s",
          }}
          type={"text"}
          placeholder={"anagabriela0399@hotmail.com"}
          value={email}
          setState={setEmail}
        />
        <strong className="text-black text-base mb-1 md:text-2xl">Senha</strong>
        <InputPassword
          setState={setPassword}
          type={"password"}
          value={password}
          style={"light"}
          eyeInput={"light"}
        />
        <div className="">
          <Button styleButton={{ color: "black", size: "s" }}>Salvar</Button>
        </div>
      </form>
    </div>
  );
}
