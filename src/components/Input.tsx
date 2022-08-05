import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

type themeType = "light" | "dark";
type sizeType = "s" | "m" | "l";
type inputType = "email" | "text";

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
      return "bg-white outline-none";
    case "dark":
      return "bg-gray-900 outline-none";
  }
};

const getSize = (size: sizeType) => {
  switch (size) {
    case "s":
      return "px-9 h-14";
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
    setPasswordShown(passwordShown ? false : true);
  }
  const eye = <FontAwesomeIcon icon={faEye} />;

  return (
    <div className="flex relative content-between">
      <input
        className="bg-gray-900 px-[37px] h-14 outline-none"
        type={passwordShown ? "text" : "password"}
        placeholder={"Digite sua senha"}
        value={value}
        onChange={(event) => setState(event.target.value)}
      />
      <span className="bg-gray-900 px-5 h-14 outline-none ">
        <i
          className="absolute top-[35%] right-[5%] hover:text-yellow-400 transition-colors cursor-pointer"
          onClick={passwordVisibility}
        >
          {eye}
        </i>
      </span>
    </div>
  );
}
