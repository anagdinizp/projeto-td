type iconType = "home" | "suitors" | "crushs" | "pawBlack" | "pawRed";

interface AType {
  href: string;
  text: string;
  icon: iconType;
}

function getIcon(icon: iconType) {
  switch (icon) {
    case "home":
      return <img src="https://img.icons8.com/windows/32/000000/dog-house.png" />;
    case "suitors":
      return <img src="https://img.icons8.com/pastel-glyph/35/000000/dog-heart--v2.png"/>;
    case "crushs":
      return <img src="https://img.icons8.com/ios/50/000000/pet.png" />;
    case "pawBlack":
      return <img src="https://img.icons8.com/ios/35/000000/dog-paw-print.png" />;
    case "pawRed":
      return <img src="https://img.icons8.com/color/35/000000/dog-paw-print.png" />
  }
}

export function Ancor({ href, text, icon }: AType) {
  return (
    <div className="w-full md:block md:w-auto">
      <a href={href} className="block mt-4 lg:inline-block lg:mt-0 hover: mr-4">
        <span>{text}</span>
      </a>
      {getIcon(icon)}
    </div>
  );
}