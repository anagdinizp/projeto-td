import { Avatar } from "@material-tailwind/react";

interface types{
  width: string;
  height: string;
}

export function UserAvatar({width, height}: types) {
  return (
    <div className="flex">
      <Avatar className="rounded-full cursor-pointer" src="https://avatars.githubusercontent.com/u/79330582?v=4" alt="Avatar do usuário" variant="circular" width={width} height={height}/>
    </div>
  )
}