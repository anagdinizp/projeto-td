interface avatarProps{
  width: string;
  height: string;
  image: string;
}

export function UserAvatar({width, height, image}: avatarProps) {
  return (
    <div className="flex w-fit">
      <img className="rounded-full cursor-pointer mr-6" src={image} alt="Avatar do usuário" width={width} height={height}/>
    </div>
  )
}

export function UserAvatarAnchor({width, height, image}: avatarProps) {
  return (
    <a href="/perfil" className="flex w-fit">
      <img className="rounded-full cursor-pointer" src={image} alt="Avatar do usuário" width={width} height={height}/>
    </a>
  )
}