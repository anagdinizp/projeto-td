import { useState } from "react";
import { Ancor } from "./Anchor";
import { UserAvatar } from "./Avatar";
import { DropdownUser } from "./Dropdow";
import { Logo } from "./Logo";

export function Navbar({ children }: any) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center h-16 justify-around bg-yellow-300 border-b border-b-gray-800">
      <Logo width={"150"} height={"150"} />
      <ul className="flex items-center gap-8 text-black">
        <li className="flex items-center justify-center">
          <Ancor href={"/inicio"} text={"Início"} icon={"home"} />
        </li>
        <li>
          <Ancor href={"#"} text={"Meus crushs"} icon={"crushs"} />
        </li>
        <li>
            <Ancor href={"#"} text={"Pretendentes"} icon={"suitors"} />
        </li>
      </ul>
      <div onClick={() => setOpen(!open)}>
        <UserAvatar width={"44rem"} height={"14rem"} />
        {open && <DropdownUser />}
      </div>
    </div>
  );
}
