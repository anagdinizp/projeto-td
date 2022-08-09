import { Ancor } from "./Anchor";
import { UserAvatar } from "./Avatar";
import { Logo } from "./Logo";


export function Navbar({ children }: any) {
  return (
    <div className="flex items-center justify-between bg-yellow-200 border-b border-b-gray-800 w-full p-4">
        <ul className="text-sm flex items-center outline-none">
          <li>
            <Logo width={"120"} height={"120"} />
          </li>
          <li>
             <Ancor href={"#"} text={"Início"} icon={"home"} />
          </li>
          <li>
            <Ancor href={"#"} text={"Meus crushs"} icon={"crushs"} />
          </li>
          <li>
            <Ancor href={"#"} text={"Pretendentes"} icon={"suitors"} />
          </li>
          <li>
            <UserAvatar />
          </li>
        </ul>
    </div>
  );
}