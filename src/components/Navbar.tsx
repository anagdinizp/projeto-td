import { useEffect, useRef, useState } from "react";
import { Anchor } from "./Anchor";
import { UserAvatar, UserAvatarAnchor } from "./Avatar";
import { DropdownUser } from "./Dropdow";

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
    <div className="flex items-center h-16 justify-around bg-white border-b border-b-gray-200">
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
          <UserAvatarAnchor
            image="https://avatars.githubusercontent.com/u/79330582?v=4"
            width={"44rem"}
            height={"14rem"}
          />
        </li>
      </ul>
    </div>
  );
}
