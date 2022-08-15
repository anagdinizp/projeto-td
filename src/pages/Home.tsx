import { Card } from "../components/Card";

export function Home() {
  return (
    <div>
      <div className="flex flex-wrap p-8 justify-center items-center">
        <Card
          name={"Bisteca"}
          age={2}
          gender={"Macho"}
          breed={"Poodle"}
          locale={"Campinas, SP"}
          dogImage={
            "https://images.pexels.com/photos/12891915/pexels-photo-12891915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <Card
          name={"Arleu"}
          age={3}
          gender={"Macho"}
          breed={"Pitbull"}
          locale={"Florianópoles, SC"}
          dogImage={
            "https://images.pexels.com/photos/4226696/pexels-photo-4226696.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <Card
          name={"Belinha"}
          age={2}
          gender={"Fêmea"}
          breed={"Pinscher"}
          locale={"João Pessoa, PB"}
          dogImage={
            "https://images.pexels.com/photos/11654136/pexels-photo-11654136.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
        <Card
          name={"Luana"}
          age={4}
          gender={"Fêmea"}
          breed={"Buldogue"}
          locale={"Passira, PE"}
          dogImage={
            "https://images.pexels.com/photos/3930940/pexels-photo-3930940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
      </div>
      <button className="flex m-auto justify-center text-center cursor-pointer">
        <img src="https://img.icons8.com/pastel-glyph/64/000000/loop.png" />
      </button>
    </div>
  );
}
