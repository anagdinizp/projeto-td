import { useEffect, useRef, useState } from "react";
import useBreakpoint from "../Hooks/useBreakpoints";
import { Ancor } from "./Anchor";
import { UserAvatar, UserAvatarAnchor } from "./Avatar";
import { DropdownUser } from "./Dropdow";

export function Navbar({ children }: any) {
  const [open, setOpen] = useState(false);
  const ref = useRef();
  const breakpoint = useBreakpoint();

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);

    function handleClick(event: any) {
      // event.preventDefault();
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
      <ul className="gap-2 md:gap-8 flex items-center text-black">
        <li className="flex items-center justify-center">
          <Ancor href={"/inicio"} text={"Início"} icon={"home"} />
        </li>
        <li>
          <Ancor href={"#"} text={"Meus crushs"} icon={"crushs"} />
        </li>
        <li>
          <Ancor href={"#"} text={"Pretendentes"} icon={"suitors"} />
        </li>
        <li>
          {breakpoint == "xs" || breakpoint == "sm" ? (
            <UserAvatarAnchor width={"44rem"} height={"14rem"} />
          ) : (
            <div ref={ref as any} onClick={() => setOpen(!open)}>
              <UserAvatar width={"44rem"} height={"14rem"} />
              {open && <DropdownUser />}
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}
