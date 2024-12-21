import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/theme";

export default function ModeSwitch() {
    const { theme, toggleTheme } = useTheme();
    console.log(theme);


    return (
        <div
            className={
                "flex flex-col text-white rounded-full bg-slate-900 dark:bg-slate-200 dark:text-black p-1 text-xs font-semibold transition-all duration-300 "
            }
        >
            {/* Dark Mode Button */}
            <button
                onClick={toggleTheme}
                className={`rounded-full p-2 flex items-center gap-1 justify-center transition-all duration-300 ${theme === "dark" ? "bg-slate-100" : ""
                    }`}
            >
                <Sun className="h-4 w-4 dark:fill-black dark:text-black text-white fill-white" />
            </button>

            {/* Light Mode Button */}
            <button
                onClick={toggleTheme}
                className={`rounded-full p-2 flex items-center gap-1 justify-center transition-all duration-300 ${theme === "light" ? "bg-slate-700 text-black" : "text-black"
                    }`}
            >
                <Moon className="h-4 w-4 dark:fill-white text-white  fill-black dark:text-black" />
            </button>
        </div>
    );
}
