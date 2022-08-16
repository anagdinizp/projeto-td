type genderType = "Macho" | "Fêmea";

interface profileData {
  dogAvatar: string;
  dogName: string;
  dogAge: number;
  dogBreed: string;
  dogGender: genderType;
  locale: string;
  dogImages: string;
  ownerAvatar: string;
  ownerName: string;
  ownerAge: number;
  ownerCareer: string;
  telefone: number;
  message: string;
}
export function Suitors(props: profileData){
  return (
    <div>
    <div>
      <img src={props.dogAvatar} />
    </div>
    <div>
      <strong>{props.dogName}</strong>
      <span>{props.dogAge}</span>
      <span>{props.dogBreed}</span>
      <span>{props.dogGender}</span>
      <span>{props.locale}</span>
    </div>
    <div>
      <img src={props.dogImages} />
    </div>
    <div>
      <div>
        <img src={props.ownerAvatar} />
      </div>
      <div>
        <strong>{props.ownerName}</strong>
        <span>{props.ownerAge}</span>
        <span>{props.ownerCareer}</span>
        <span>{props.locale}</span>
        <span>{props.telefone}</span>
      </div>
      <div>
        <span>{props.message}</span>
      </div>
    </div>
  </div>
  )
}