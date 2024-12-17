import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ModeSwitch() {
    const [darkMode, setDarkMode] = useState(true);
    const toggleMode = () => setDarkMode(!darkMode)

    return (
        <div
            className={
                "flex flex-col rounded-full bg-slate-900 p-1 text-xs font-semibold transition-all duration-300 "
            }
        >
            {/* Dark Mode Button */}
            <button
                onClick={toggleMode}
                className={`rounded-full p-2 flex items-center gap-1 justify-center transition-all duration-300 ${darkMode ? "bg-slate-700 text-white" : "text-gray-400"
                    }`}
            >
                <Moon className="h-4 w-4 dark:fill-white dark:text-white" />
            </button>

            {/* Light Mode Button */}
            <button
                onClick={toggleMode}
                className={`rounded-full p-2 flex items-center gap-1 justify-center transition-all duration-300 ${!darkMode ? "bg-slate-600 text-white" : "text-gray-400"
                    }`}
            >
                <Sun className="h-4 w-4 fill-white" />
            </button>
        </div>
    );
}
