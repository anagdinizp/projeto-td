import { Avatar } from "@material-tailwind/react";

export function UserAvatar() {
  return (
    <div className="flex">
      <Avatar className="w-10 h-10 rounded-full" src="https://avatars.githubusercontent.com/u/79330582?v=4" alt="Avatar do usuário" variant="circular"/>
    </div>
  )
}