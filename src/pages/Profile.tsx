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

export function Profile(props: profileData) {
  return (
    <div>
      <div>
        <div>
          <img src={props.ownerAvatar} />
        </div>
        <div>
          <strong></strong>
          <strong>
            Idade: <span>{props.ownerAge}</span>
          </strong>
          <strong>
            Profissão: <span>{props.ownerCareer}</span>
          </strong>
          <strong>
            Localização: <span>{props.locale}</span>
          </strong>
          <strong>
            Contato: <span>{props.telefone}</span>
          </strong>
        </div>
      </div>

      <div>
        <div>
          <img src={props.dogAvatar} />
        </div>
        <div>
          <strong>{props.dogName}</strong>
          <strong>Idade: <span>{props.dogAge}</span></strong>
          <strong>Raça: <span>{props.dogBreed}</span></strong>
          <strong>Sexo: <span>{props.dogGender}</span></strong>
          <strong>Localização: <span>{props.locale}</span></strong>
        </div>
        <div>
          {props.dogImages}
        </div>
      </div>

      <button></button>
    </div>
  );
}
