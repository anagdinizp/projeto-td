import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";

export function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="grid grid-cols-2">
      <div className="bg-sorriso flex flex-col justify-center items-center direct">
        <div className="flex flex-col">
          <strong className="mt-[300px] ml-[48px] mr-[48px] mb-1 font-bold text-white text-5xl">
            Encontre o <strong className="text-yellow-500">par perfeito</strong>{" "}
            para o seu <strong className="text-yellow-500">pet</strong>
          </strong>
          <span className="ml-[48px] mr-[48px] text-yellow-500 font-bold">
            Com a nossa ajuda, você vai conseguir encontrar o par perfeito para
            o seu pet e os dois vão conseguir ter vários filhotes
          </span>
        </div>
      </div>

      <div className="bg-yellow-50 min-h-screen flex flex-col justify-center items-center direct">
        <div>
          <Logo />
        </div>
        <div className="bg-gray-800 w-[22rem] h-[22rem] border rounded-[10px] flex flex-col justify-center items-center direct p-5">
          <strong className="text-white text-2xl mb-6 block">
            Cadastre-se gratuitamente
          </strong>
          <form className="flex flex-col gap-2 w-full">
            <Input
              styleType={{ theme: "dark", size: "s" }}
              type="text"
              placeholder="Digite seu nome completo"
              value={nome}
              setState={setNome}
            />
            <Input
              styleType={{ theme: "dark", size: "s" }}
              type="email"
              placeholder="Digite seu email"
              value={email}
              setState={setEmail}
            />
            <Button styleButton={{ color: "dark yellow", size: "s" }}>
              Entrar
            </Button>
          </form>
          <span className="text-sm text-white mt-4">Já é inscrito?</span>
          <a href="/" className="font-bold mt-2 text-yellow-500">
            Entre aqui
          </a>
        </div>
      </div>
    </div>
  );
}
