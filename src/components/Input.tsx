import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

type themeType = "light" | "dark";
type sizeType = "s" | "m" | "l";
type inputType = "email" | "text" | "number";

interface propsInput {
  styleType: {
    theme: themeType;
    size: sizeType;
  };
  type: inputType;
  placeholder: string;
  value: string;
  setState: (value: string) => void;
}

interface inputPassword {
  setState: (value: string) => void;
  type: string;
  value: string;
}

const getTheme = (theme: themeType) => {
  switch (theme) {
    case "light":
      return "bg-white outline-none rounded-lg";
    case "dark":
      return "bg-gray-900 outline-none rounded-lg";
  }
};

const getSize = (size: sizeType) => {
  switch (size) {
    case "s":
      return "px-5 h-10";
    case "m":
      return "px-10 h-28";
    case "l":
      return "px-20 h-40";
  }
};

export function Input({
  styleType,
  placeholder,
  value,
  type,
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

export function InputPassword({ value, setState, type }: inputPassword) {
  const [passwordShown, setPasswordShown] = useState(false);
  function passwordVisibility() {
    setPasswordShown(!passwordShown);
  }
  const eye = <FontAwesomeIcon icon={faEye} />;

  return (
    <div className="flex">
      <input
        className="bg-gray-900 w-full p-5 h-10 rounded-l-lg outline-none"
        type={passwordShown ? "text" : "password"}
        placeholder={"Digite sua senha"}
        value={value}
        onChange={(event) => setState(event.target.value)}
      />
      <div className="flex items-center justify-center rounded-r-lg bg-gray-900 w-fit p-5 h-10 outline-none ">
        <i
          className="md:w-full hover:text-yellow-400 transition-colors cursor-pointer"
          onClick={passwordVisibility}
        >
          {eye}
        </i>
      </div>
    </div>
  );
}
