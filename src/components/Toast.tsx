import { createContext, useContext, useState } from "react";

type ContentType = {
  showToast: (message: string) => void;
};

const ToastContext = createContext<ContentType>({
  showToast: () => {},
});

function Toast({ children }: { children: any }) {
  const [message, setMessage] = useState<string>("");
  const [visible, setVisible] = useState(false);

  function showToast(message: string) {
    setVisible(true);
    setMessage(message);
    setTimeout(() => {
      setVisible(false);
      setMessage("");
    }, 9000);
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {visible ? (
        <div className="absolute top-5 right-5 justify-center text-center p-4 bg-red-300 text-black rounded">
          {message}
        </div>
      ) : (
        <></>
      )}
      {children}
    </ToastContext.Provider>
  );
}

function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("Algo não está certo");
  }
  return context;
}

export { Toast, useToast };
