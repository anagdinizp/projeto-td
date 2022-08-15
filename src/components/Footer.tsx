import { LogoFooter } from "./Logo";

export function Footer() {
  return (
    <footer className="absolute bottom-0 p-1 bg-yellow-100 flex w-full justify-center text-center border border-t-gray-800">
      <LogoFooter />
    </footer>
  )
}