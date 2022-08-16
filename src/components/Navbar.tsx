import { useEffect, useRef, useState } from "react";
import useBreakpoint from "../Hooks/useBreakpoints";
import { Anchor } from "./Anchor";
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
      <ul className="gap-14 md:gap-20 flex justify-center items-center text-black">
        <li>
          <Anchor href={"/inicio"} text={"Início"} icon={"home"} />
        </li>
        <li>
          <Anchor href={"#"} text={"Meus crushs"} icon={"crushs"} />
        </li>
        <li>
          <Anchor href={"#"} text={"Pretendentes"} icon={"suitors"} />
        </li>
        <li>
          {breakpoint == "xs" || breakpoint == "sm" ? (
            <UserAvatarAnchor image="https://avatars.githubusercontent.com/u/79330582?v=4" width={"44rem"} height={"14rem"} />
          ) : (
            <div ref={ref as any} onClick={() => setOpen(!open)}>
              <UserAvatar image="https://avatars.githubusercontent.com/u/79330582?v=4" width={"44rem"} height={"14rem"} />
              {open && <DropdownUser />}
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}
