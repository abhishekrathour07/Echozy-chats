import React, { useState } from 'react';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { EllipsisVertical, Phone, Video } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import Chatbox from './Chatbox';
import { MenupopUp } from './MenupopUp';
import UserInformation from './UserInformation';



const RightChat: React.FC = () => {

    const actions = [
        {
            id: 1,
            tooltip: "Video Call",
            icon: (
                <Video className="text-white hover:text-slate-300 cursor-pointer" />
            ),
        },
        {
            id: 2,
            tooltip: "Call",
            icon: (
                <Phone className="text-white hover:text-slate-300 cursor-pointer" />
            ),
        },

    ];

    const [userInfo, setUserInfo] = useState<true | false>(false);
    const toggleUserInfo = () => setUserInfo(!userInfo)

    return (
        <>
            <div className="flex-1 flex flex-col bg-slate-900 " >
                {/* Header */}
                <div className="bg-slate-800 flex h-20 gap-4 px-4 py-3 items-center border-b border-gray-700 shadow-lg w-full">

                    <div className='flex w-96 gap-4 cursor-pointer' onClick={toggleUserInfo}>
                        <Avatar>
                            <AvatarImage
                                className="w-12 h-12 rounded-full object-cover object-center"
                                src={`https://ui-avatars.com/api/?name=${encodeURIComponent('Abhishek Singh')}`}
                                alt="Abhishek Singh"
                            />
                        </Avatar>
                        <div className="flex items-center gap-2">
                            <div className="flex flex-col">
                                <h2 className="text-lg font-semibold truncate w-auto max-w-40 text-white">
                                    {"Abhishek Singh"}
                                </h2>
                                <p className="text-xs text-slate-500">Contact to the chat</p>
                            </div>
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        </div>

                    </div>
                    <div className="flex text-white w-full items-center justify-end px-2">
                        <div className="flex gap-2">
                            {actions.map((action) => (
                                <TooltipProvider key={action.id}>
                                    <Tooltip delayDuration={40}>
                                        <TooltipTrigger asChild><p className='border border-slate-900 p-2 rounded-md'>{action.icon}</p></TooltipTrigger>
                                        <TooltipContent side="bottom">
                                            <p className="text-xs text-white bg-slate-800 p-2 rounded-lg border">
                                                {action.tooltip}
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            ))}

                        </div>
                        <p className='border border-slate-900 p-2 rounded-md ml-2 cursor-pointer'> <MenupopUp title={<EllipsisVertical />} /></p>
                    </div>
                </div>
                <Chatbox />

            </div>
            {userInfo && <UserInformation toggleInfo={toggleUserInfo} isOpen={userInfo} />}
        </>
    );
};

export default RightChat;
