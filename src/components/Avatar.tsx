interface types{
  width: string;
  height: string;
}

export function UserAvatar({width, height}: types) {
  return (
    <div className="flex w-fit">
      <img className="rounded-full cursor-pointer mr-6" src="https://avatars.githubusercontent.com/u/79330582?v=4" alt="Avatar do usuário" width={width} height={height}/>
    </div>
  )
}