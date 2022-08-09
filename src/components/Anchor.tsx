type iconType = "home" | "suitors" | "crushs" | "pawBlack" | "pawRed";

interface AType {
  href: string;
  text: string;
  icon: iconType;
}

function getIcon(icon: iconType) {
  switch (icon) {
    case "home":
      return <img src="https://img.icons8.com/windows/30/000000/dog-house.png" />;
    case "suitors":
      return <img src="https://img.icons8.com/pastel-glyph/25/000000/dog-heart--v2.png"/>;
    case "crushs":
      return <img src="https://img.icons8.com/ios/30/000000/pet.png" />;
    case "pawBlack":
      return <img src="https://img.icons8.com/ios/30/000000/dog-paw-print.png" />;
    case "pawRed":
      return <img src="https://img.icons8.com/color/30/000000/dog-paw-print.png" />
  }
}

export function Ancor({ href, text, icon }: AType) {
  return (
    <div>
      <a href={href} className="py-7 px-3 flex items-center justify-center" >
        <div>{getIcon(icon)}</div>
        <span className="text-center p-2 text-lg font-extralight">{text}</span>
      </a>
    </div>
  );
}