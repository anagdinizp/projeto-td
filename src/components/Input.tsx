type themeType = "light" | "dark";
type sizeType = "s" | "m" | "l";

interface propsInput {
  styleType: {
    theme: themeType;
    size: sizeType;
  };
  type: string;
  placeholder: string;
  value: string;
  setState: (value: string) => void;
}

const getTheme = (theme: themeType) => {
  switch (theme) {
    case "light":
      return "bg-white rounded";
    case "dark":
      return "bg-gray-900 rounded";
  }
};

const getSize = (size: sizeType) => {
  switch (size) {
    case "s":
      return "px-5 h-14";
    case "m":
      return "px-10 h-28";
    case "l":
      return "px-20 h-40";
  }
};

export function Input({
  styleType,
  type,
  placeholder,
  value,
  setState,
}: propsInput) {
  return (
    <input
      className={`${getTheme(styleType.theme)} ${getSize(styleType.size)}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(event) => setState(event.target.value)}
    />
  );
}
