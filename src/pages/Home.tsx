import { Card } from "../components/Card";

const cards = [
  {
    name: "Simba",
    age: 2,
    gender: "Macho",
    breed: "Poodle",
    locale: "Campina Grande, PB",
    dogAvatar:
      "https://images.pexels.com/photos/1139794/pexels-photo-1139794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Arleu",
    age: 3,
    breed: "Dachshund",
    gender: "Macho",
    locale: "João Pessoa, PB",
    dogAvatar:
      "https://images.pexels.com/photos/4148015/pexels-photo-4148015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export function Home() {
  return (
    <div>
      <div className="flex flex-wrap p-8 justify-center items-center">
        {cards.map((card) => (
          <Card
            name={card.name}
            age={card.age}
            gender={card.gender}
            breed={card.breed}
            locale={card.locale}
            dogImage={card.locale}
          />
        ))}
      </div>
      <button className="flex m-auto justify-center text-center cursor-pointer">
        <img src="https://img.icons8.com/pastel-glyph/64/000000/loop.png" />
      </button>
    </div>
  );
}
