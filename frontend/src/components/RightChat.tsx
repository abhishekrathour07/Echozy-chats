import React from 'react';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { EllipsisVertical, Expand, Minimize2 } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import Chatbox from './Chatbox';

type Props = {
    toggleSize: () => void;
    fullscreen: boolean;
};

const RightChat: React.FC<Props> = ({ toggleSize, fullscreen }) => {
    // Define actions for the icons
    const actions = [
        {
            id: 1,
            tooltip: fullscreen ? "Minimize" : "Fullscreen",
            icon: fullscreen ? (
                <Minimize2
                    onClick={toggleSize}
                    className="text-white hover:text-slate-300 cursor-pointer"
                />
            ) : (
                <Expand
                    onClick={toggleSize}
                    className="text-white hover:text-slate-300 cursor-pointer"
                />
            ),
        },
        {
            id: 2,
            tooltip: "Menu",
            icon: (
                <EllipsisVertical className="text-white hover:text-slate-300 cursor-pointer" />
            ),
        },
    ];

    return (
        <div className="flex-1 flex flex-col bg-slate-900">
            {/* Header */}
            <div className="bg-slate-800 flex h-20 gap-4 px-4 py-3 items-center border-b border-gray-700 shadow-lg">
                <Avatar>
                    <AvatarImage
                        className="w-12 h-12 rounded-full object-cover object-center"
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent('Abhishek Singh')}`}
                        alt="Abhishek Singh"
                    />
                </Avatar>
                <div className="flex text-white w-full items-center justify-between px-2">
                    <div className="flex items-center gap-2">
                        <div className="flex flex-col">
                            <h2 className="text-lg font-semibold truncate w-auto max-w-40">
                                {"Abhishek Singh"}
                            </h2>
                            <p className="text-xs text-slate-500">Contact to the chat</p>
                        </div>
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    </div>
                    <div className="flex gap-4">
                        {actions.map((action) => (
                            <TooltipProvider key={action.id}>
                                <Tooltip>
                                    <TooltipTrigger asChild>{action.icon}</TooltipTrigger>
                                    <TooltipContent side="bottom">
                                        <p className="text-xs text-white bg-slate-800 p-2 rounded-lg border">
                                            {action.tooltip}
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        ))}
                    </div>
                </div>
            </div>

            {/* Chat Messages */}
            <Chatbox fullscreen={fullscreen} />
        </div>
    );
};

export default RightChat;
