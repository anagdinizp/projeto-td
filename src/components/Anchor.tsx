type iconType = "home" | "suitors" | "crushs" | "pawBlack" | "pawRed";

interface AType {
  href: string;
  text: string;
  icon: iconType;
}

function getIcon(icon: iconType) {
  switch (icon) {
    case "home":
      return <img src="https://img.icons8.com/windows/35/000000/dog-house.png" />;
    case "suitors":
      return <img src="https://img.icons8.com/pastel-glyph/35/000000/dog-heart--v2.png" />;
    case "crushs":
      return <img src="https://img.icons8.com/ios/35/000000/pet.png" />;
    case "pawBlack":
      return <img src="https://img.icons8.com/ios/35/000000/dog-paw-print.png" />;
    case "pawRed":
      return <img src="https://img.icons8.com/color/35/000000/dog-paw-print.png" />
  }
}

export function Anchor({ href, text, icon }: AType) {
  return (
    <div className="m-auto align-middle justify-center">
      <a href={href}>
        <div className="inline-block align-middle">{getIcon(icon)}</div>
        <span className="hidden md:inline-block text-center p-2 text-lg font-extralight">{text}</span>
      </a>
    </div>
  );
}
