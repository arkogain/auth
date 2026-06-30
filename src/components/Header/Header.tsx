import Link from "next/link";
import LogOutBtn from "../Auth/LogOutBtn";
import ThemeToggleButton from "../Buttons/ThemeToggleButton";

const Header = () => {
  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 border-b shadow"
      aria-label="app-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href={"/"}>
          <h1
            className="text-2xl font-semibold"
            aria-label="App Name">
            NSF App
          </h1>
        </Link>

        <nav className="flex items-center gap-4">
          <Link href={"/"}>Home</Link>

          <LogOutBtn />

          <ThemeToggleButton />
        </nav>
      </div>
    </header>
  );
};

export default Header;
