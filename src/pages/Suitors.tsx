type genderType = "Macho" | "Fêmea";

interface suitorsData {
  suitorAvatar: string;
  suitorName: string;
  suitorAge: number;
  suitorBreed: string;
  suitorGender: genderType;
  suitorLocale: string;
  suitorImages: string;
  ownerSuitorAvatar: string;
  ownerSuitorName: string;
  ownerSuitorAge: number;
  ownerSuitorCareer: string;
  ownerSuitorTelefone: number;
  ownerSuitorMessage: string;
}
export function Suitors(props: suitorsData){
  return (
    <div>
    <div>
      <img src={props.suitorAvatar} />
    </div>
    <div>
      <strong>{props.suitorName}</strong>
      <strong>Idade: <span>{props.suitorAge}</span></strong>
      <strong>Raça: <span>{props.suitorBreed}</span></strong>
      <strong>Sexo: <span>{props.suitorGender}</span></strong>
      <strong>Localização: <span>{props.suitorLocale}</span></strong>
    </div>
    <div>
      <img src={props.suitorImages} />
    </div>
    <div>
      <div>
        <img src={props.ownerSuitorAvatar} />
      </div>
      <div>
        <strong>{props.ownerSuitorName}</strong>
        <span>{props.ownerSuitorAge}</span>
        <span>{props.ownerSuitorCareer}</span>
        <span>{props.suitorLocale}</span>
        <span>{props.ownerSuitorTelefone}</span>
      </div>
      <div>
        <strong>Mensagem</strong>
        <span>{props.ownerSuitorMessage}</span>
      </div>
    </div>
  </div>
  )
}