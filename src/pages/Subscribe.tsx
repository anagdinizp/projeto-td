import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input, InputPassword } from "../components/Input";
import { Logo } from "../components/Logo";
import { useToast } from "../components/Toast";

export function Subscribe() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [locale, setLocale] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [telephone, setTelephone] = useState("");
  const navigate = useNavigate();
  const { showToast } = useToast();

  let user = {
    name: name,
    age: age,
    locale: locale,
    email: email,
    password: password,
  };
  localStorage.setItem("user", JSON.stringify(user));

  const subscription = async (event: FormEvent) => {
    event.preventDefault();

    if (!!name && !!!age && !!locale && !!email && !!password && !!telephone)
      navigate("/inicio");
    else showToast("Tem algo errado no seu cadastro!", "red");
  };

  return (
    <div className="md:grid grid-cols-2">
      <div className="hidden md:block visible bg-dogsubscriber bg-cover bg-no-repeat flex-col justify-center items-center" />
      <div className="bg-white-100 bg-cover min-h-screen md:min-h-screen flex flex-col justify-center items-center">
        <div className="bg-gray-700 w-fit h-fit rounded-xl flex flex-col justify-center items-center direct p-5 mb-4">
          <strong className="text-white-100 text-2xl mb-4 block text-center">
            Crie a sua conta
          </strong>
          <form
            className="flex flex-col gap-2 w-full h-full"
            onSubmit={subscription}
          >
            <strong className="text-white-100 text-xl mb-1">Nome completo</strong>
            <Input
              styleType={{ theme: "dark", size: "s" }}
              placeholder="Digite seu nome"
              value={name}
              setState={setName}
              type={"text"}
            />
            <strong className="text-white-100 text-xl mb-1">
              Data de nascimento
            </strong>
            <Input
              styleType={{ theme: "dark", size: "s" }}
              placeholder="dd/mm/aa"
              value={age}
              setState={setAge}
              type={"number"}
            />
            <strong className="text-white-100 text-xl mb-1">Localização</strong>
            <Input
              styleType={{ theme: "dark", size: "s" }}
              placeholder="Cidade, Estado"
              value={locale}
              setState={setLocale}
              type={"text"}
            />
            <strong className="text-white-100 text-xl mb-1">Email</strong>
            <Input
              styleType={{ theme: "dark", size: "s" }}
              placeholder="Digite seu email"
              value={email}
              setState={setEmail}
              type={"email"}
            />
            <strong className="text-white-100 text-xl mb-1">Senha</strong>
            <InputPassword
              value={password}
              setState={setPassword}
              type={"password"}
              style={"dark"}
              eyeInput={"dark"}
            />
            <strong className="text-white-100 text-xl mb-1">Telefone</strong>
            <Input
              styleType={{ theme: "dark", size: "s" }}
              placeholder="(xx) x xxxx-xxxx"
              value={telephone}
              setState={setTelephone}
              type={"number"}
            />
            <Button styleButton={{ color: "nude", size: "m" }}>
              Cadastrar
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
