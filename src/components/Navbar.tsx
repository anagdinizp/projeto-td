import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Ancor } from "./Anchor";
import { UserAvatar } from "./Avatar";
import { DropdownUser } from "./Dropdow";
import { Logo } from "./Logo";

export function Navbar({ children }: any) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.addEventListener("click", handleClick);
    
    return () => document.removeEventListener("click", handleClick);
    
    function handleClick(event: any) {
      if (ref && ref.current) {
        const myRef: any = ref.current;
        if (!myRef.contains(event.target)) {
          setOpen(false);
        }
      }
    }
  });

  return (
    <div className="flex items-center h-16 justify-around bg-yellow-100 border-b border-b-gray-800">
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
      <div  ref={ref as any} onClick={() => setOpen(!open)}>
        <UserAvatar width={"44rem"} height={"14rem"} />
        {open && <DropdownUser />}
      </div>
    </div>
  );
}
