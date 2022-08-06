import { Logo } from "./Logo";

export function Sidebar({ children }: any) {
  return (
    <div className="bg-yellow-200 rw-60 h-full shadow-md px-1 absolute">
        <ul className="relative text-2xl text-black w-full">
          <li className="relative">
            <Logo />
          </li>
          <li className="relative">
            <a href="" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-yellow-300 transition duration-300 ease-in-out">Início</a>
          </li>
          <li className="relative">
            <a href="" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-yellow-300 transition duration-300 ease-in-out">Perfil</a>
          </li>
          <li className="relative">
            <a href="" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-yellow-300 transition duration-300 ease-in-out">Interesses</a>
          </li>
          <li className="relative">
            <a href="" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-yellow-300 transition duration-300 ease-in-out">Interessados</a>
          </li>
          <li className="relative">
            <a href="" className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-yellow-300 transition duration-300 ease-in-out">Sair</a>
          </li>
        </ul>
      </div>
  );
}
