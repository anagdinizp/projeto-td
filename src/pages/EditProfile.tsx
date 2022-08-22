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
    <div className="Container">
      <div className="Avatar-container">
        <img src="" />
        <button className="Botão de editar imagem">
          <img src="https://img.icons8.com/small/16/000000/edit-image.png" />
        </button>
      </div>
      <form onSubmit={saveChanges}>
        <strong className="">Nome</strong>
        <Input
          styleType={{
            theme: "light",
            size: "s",
          }}
          type={"number"}
          placeholder={""}
          value={name}
          setState={setName}
        />
        <strong className="">Idade</strong>
        <Input
          styleType={{
            theme: "light",
            size: "s",
          }}
          type={"number"}
          placeholder={""}
          value={age}
          setState={setAge}
        />
        <strong className="">Profissão</strong>
        <Input
          styleType={{
            theme: "light",
            size: "s",
          }}
          type={"number"}
          placeholder={""}
          value={career}
          setState={setCareer}
        />
        <strong className="">Contato</strong>
        <Input
          styleType={{
            theme: "light",
            size: "s",
          }}
          type={"number"}
          placeholder={""}
          value={telephone}
          setState={setTelephone}
        />
        <strong className="">Localização</strong>
        <Input
          styleType={{
            theme: "light",
            size: "s",
          }}
          type={"number"}
          placeholder={""}
          value={locale}
          setState={setLocale}
        />
        <strong className="">Email</strong>
        <Input
          styleType={{
            theme: "light",
            size: "s",
          }}
          type={"number"}
          placeholder={""}
          value={email}
          setState={setEmail}
        />
        <strong className="">Senha</strong>
        <InputPassword
          setState={setPassword}
          type={""}
          value={password}
        />
        <Button styleButton={{ color: "black", size: "s" }}>
          Salvar
        </Button>
      </form>
    </div>
  );
}
