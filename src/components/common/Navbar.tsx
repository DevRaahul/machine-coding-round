import { Button } from "@/components/ui/button";
import { IThemeIcon } from "@/constant/interface";
import { useTheme } from "@/context/themeProvider";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { setTheme } = useTheme();
  const [themeIcon, setThemeIcon] = useState("light");

  const themeToggle = () => {
    const theme = themeIcon === "light" ? "dark" : "light";
    setTheme(theme);
    setThemeIcon(theme);
  };

  return (
    <nav className="sticky inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90 mb-2">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <div className="flex items-center">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Coding Gyan</span>
            {/* TODO: Navigation checks */}
            <Link to={"/"}>
              <span className="text-left m-2">Coding Gyan</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" size="sm">
              Sign in
            </Button>
            <Button size="sm">Sign up</Button>
            <ThemeIcon themeChange={themeToggle} mode={themeIcon} />
          </div>
        </div>
      </div>
    </nav>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function ThemeIcon({ mode, themeChange }: IThemeIcon) {
  return (
    <span className="cursor-pointer" onClick={themeChange}>
      {mode === "light" ? <Sun /> : <Moon />}
    </span>
  );
}