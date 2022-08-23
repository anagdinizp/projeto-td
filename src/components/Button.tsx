type colorType = "purple" | "gray" | "black";
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
    case "purple":
      return "text-black bg-purple-400 uppercase rounded font-bold text-sm hover:bg-purple-500 transition-colors";
    case "gray":
      return "bg-grat-300 rounded font-bold text-sm text-black hover:bg-yellow-500 transition-colors";
    case "black":
      return "bg-gray-800 rounded font-bold text-lg text-white hover:bg-gray-500 transition-colors";
  }
};

const getSize = (size: sizeType) => {
  switch (size) {
    case "s":
      return "mt-4 py-2 w-[150px] h-[50px] rounded-lg mb-8";
    case "m":
      return "mt-4 py-4 w-[410px] h-[60px] rounded-lg";
    case "l":
      return "mt-4 py-4 rounded-lg";
  }
};

export function Button({ styleButton, children }: buttonProps) {
  return (
    <div className="flex justify-center text-center items-center">
      <button
        className={`${getColor(styleButton.color)}, ${getSize(
          styleButton.size
        )}`}
        type="submit"
      >
        {children}
      </button>
    </div>
  );
}
