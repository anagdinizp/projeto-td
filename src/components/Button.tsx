type colorType = "dark yellow" | "light yellow" | "black";
type sizeType = "s" | "m" | "l";

interface buttonProps {
  children: string;
  styleButton: {
    color: colorType;
    size: sizeType;
  };
}

const getColor = (color: colorType) => {
  switch (color) {
    case "dark yellow":
      return "text-black bg-yellow-500 uppercase rounded font-bold text-sm hover:bg-yellow-600 transition-colors";
    case "light yellow":
      return "bg-yellow-300 rounded font-bold text-sm text-black hover:bg-yellow-500 transition-colors";
    case "black":
      return "bg-gray-800 rounded font-bold text-sm text-white hover:bg-gray-500 transition-colors";
  }
};

const getSize = (size: sizeType) => {
  switch (size) {
    case "s":
      return "mt-4 py-4 rounded-lg";
    case "m":
      return "mt-4 py-4 rounded-lg";
    case "l":
      return "mt-4 py-4 rounded-lg";
  }
};

export function Button({ styleButton, children }: buttonProps) {
  return (
    <button
      className={`${getColor(styleButton.color)}, ${getSize(styleButton.size)}`}
      type="submit"
    >
      {children}
    </button>
  );
}
