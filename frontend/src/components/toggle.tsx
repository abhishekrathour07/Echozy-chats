import { useState } from "react";
import { Minus, Check } from "lucide-react";

const ToggleButton = () => {
    const [isToggled, setIsToggled] = useState(false);

    const toggleHandler = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div
            className={`relative flex items-center w-14 h-7 p-1  rounded-full ${isToggled ? "bg-green-500" : "bg-gray-300"
                }`}
            onClick={toggleHandler}
        >
            <div
                className={`absolute w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300 ${isToggled ? "translate-x-6" : "translate-x-0"
                    }`}
            >
                {isToggled ? <Check size={20} color="green" /> : <Minus size={20} color="gray" />}
            </div>
        </div>
    );
};

export default ToggleButton;
