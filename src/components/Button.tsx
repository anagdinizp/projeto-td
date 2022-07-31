type colorType = "dark yellow" | "light yellow" | "black"
type sizeType = "s" | "m" | "l"

interface buttonProps {
  children: string;
  styleButton: {
    color: colorType,
    size: sizeType
  };
}

const getColor = (color: colorType) => {
  switch (color) {
    case "dark yellow":
      return "text-black bg-yellow-500 uppercase rounded font-bold text-sm ";
    case "light yellow":
      return "bg-yellow-300 rounded font-bold text-sm text-black";
    case "black":
      return "bg-gray-800 rounded font-bold text-sm text-white"
  }
}

const getSize = (size: sizeType) => {
  switch(size) {
    case "s":
      return "mt-4 py-4 rounded";
    case "m":
      return "mt-4 py-4 rounded";
    case "l":
      return "mt-4 py-4 rounded";
  }
}

export function Button({styleButton, children}: buttonProps) {
  return (
    <button className={`${getColor(styleButton.color)}, ${getSize(styleButton.size)}`} type="submit">
      {children}
    </button>
  )
}