import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { Input, InputPassword } from "../components/Input";
import { Logo } from "../components/Logo";
import { useToast } from "../components/Toast";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { showToast } = useToast();

  const enterAccount = async (event: FormEvent) => {
    event.preventDefault;
    if (!!password && !!email) navigate("/inicio");
    else showToast("Houve um problema ao entrar na sua conta!", "red");
  };

  return (
    <div className="md:grid grid-cols-2">
      <div className="hidden md:block visible bg-sorrisomdblend bg-cover bg-no-repeat flex-col justify-center items-center">
        <div className="flex flex-col">
          <strong className="mt-[300px] ml-[48px] mr-[48px] mb-1 font-bold text-white text-4xl">
            Encontre o <strong className="text-yellow-500">par perfeito</strong>{" "}
            para o seu <strong className="text-yellow-500">pet</strong>
          </strong>
          <span className="ml-[48px] mr-[48px] text-yellow-500 font-bold text-justify ">
            Com a nossa ajuda, você vai conseguir encontrar o par perfeito para
            o seu pet e os dois vão conseguir ter vários filhotes
          </span>
        </div>
      </div>

      <div className="bg-yellow-300 bg-cover min-h-screen md:min-h-screen flex flex-col justify-center items-center">
        <div>
          <Logo />
        </div>
        <div className="bg-gray-800  w-[22rem] h-[22rem] border rounded-[10px] flex flex-col justify-center items-center direct p-5">
          <strong className="text-white text-2xl mb-6 block">
            Entre na sua conta
          </strong>
          <form onSubmit={enterAccount} className="flex flex-col gap-2 w-full">
            <Input
              styleType={{ theme: "dark", size: "s" }}
              placeholder="Digite seu email"
              value={email}
              setState={setEmail}
              type={"email"}
            />
            <InputPassword
              value={password}
              setState={setPassword}
              type={"password"}
            />
            <Button styleButton={{ color: "dark yellow", size: "s" }}>
              Entrar
            </Button>
          </form>
          <span className="text-sm text-white mt-4">
            Ainda não tem uma conta?
          </span>
          <a
            href="/"
            className="font-bold mt-2 text-yellow-500 hover:text-yellow-600 transition-colors"
          >
            Inscreva-se aqui
          </a>
        </div>
      </div>
    </div>
  );
}
