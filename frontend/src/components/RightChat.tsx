import React, { useState } from 'react';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { EllipsisVertical, Phone, Video } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import Chatbox from './Chatbox';
import { MenupopUp } from './MenupopUp';
import UserInformation from './UserInformation';

type imagesbg = {
    id: number;
    src: string;
    alt: string;
    value: string;
}[];
type actionTypes = {
    id: number;
    tooltip: string;
    icon: JSX.Element;
}[];

const RightChat: React.FC = () => {

    const actions: actionTypes = [
        {
            id: 1,
            tooltip: "Video Call",
            icon: <Video className="text-white hover:text-slate-300 cursor-pointer dark:text-slate-800" />
        },
        {
            id: 2,
            tooltip: "Call",
            icon: <Phone className="text-white hover:text-slate-300 cursor-pointer dark:text-slate-800 " />
        },
    ];

    const imageArray: imagesbg = [
        { id: 2, src: 'chat1.png', alt: 'Serene beach at sunset', value: 'Beach' },
        { id: 1, src: '/background.png', alt: 'Beautiful mountain landscape', value: 'Mountain' },
        { id: 3, src: '/bg-main.png', alt: 'Lush green forest', value: 'Forest 1' },
        { id: 4, src: '/background.png', alt: 'Serene beach at sunset', value: 'Beach 2' },
        { id: 5, src: '/bg-main.png', alt: 'Lush green forest', value: 'Forest 2' },
    ];

    const [backgroundImage, setBackgroundImage] = useState<string>(imageArray[0].src);
    const [userInfo, setUserInfo] = useState<true | false>(false);
    const toggleUserInfo = () => setUserInfo(!userInfo)

    const handleImageChange = (e: any) => {
        const selectedImage = imageArray.find((image) => image.value === e.target.value);
        if (selectedImage) {
            setBackgroundImage(selectedImage.src);
        }
    };

    return (
        <>
            <div className="flex-1 flex flex-col bg-slate-900 dark:text-slate-800 dark:bg-white ">
                <div className="bg-slate-800 dark:bg-white flex h-20 gap-4 px-4 py-3 items-center border-b border-gray-700 shadow-lg w-full">
                    <div className="flex w-96 gap-4 cursor-pointer" onClick={toggleUserInfo}>
                        <Avatar>
                            <AvatarImage
                                className="w-12 h-12 rounded-full object-cover object-center"
                                src={`https://ui-avatars.com/api/?name=${encodeURIComponent('Abhishek Singh')}`}
                                alt="Abhishek Singh"
                            />
                        </Avatar>
                        <div className="flex items-center gap-2">
                            <div className="flex flex-col">
                                <h2 className="text-lg font-semibold truncate w-auto max-w-40 text-white dark:text-slate-800">
                                    {"Abhishek Singh"}
                                </h2>
                                <p className="text-xs text-slate-500">Contact to the chat</p>
                            </div>
                            <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        </div>
                    </div>
                    <div className="flex text-white dark:text-slate-800 w-full items-center justify-end px-2">
                        <div className="flex gap-2">
                            {actions.map((action) => (
                                <TooltipProvider key={action.id}>
                                    <Tooltip delayDuration={40}>
                                        <TooltipTrigger asChild><p className="border border-slate-900 p-2 rounded-md dark:text-slate-800 dark:border-slate-300">{action.icon}</p></TooltipTrigger>
                                        <TooltipContent side="bottom">
                                            <p className="text-xs text-white dark:text-slate-800 dark:bg-white bg-slate-800 p-2 rounded-lg border ">{action.tooltip}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            ))}
                        </div>
                        <p className="border border-slate-900 p-2 rounded-md ml-2 cursor-pointer dark:border-slate-300">
                            <MenupopUp title={<EllipsisVertical />} toggleInfo={toggleUserInfo} isOpen={userInfo} />
                        </p>
                        <select
                            className="ml-2 p-2 rounded-md dark:text-slate-900 text-white bg-gray-800 dark:bg-gray-200 outline-none border"
                            onChange={handleImageChange}>
                            {imageArray.map((image) => (
                                <option key={image.id} value={image.value}>
                                    {image.value}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <Chatbox backgroundImage={backgroundImage} />
            </div>
            {userInfo && <UserInformation toggleInfo={toggleUserInfo} isOpen={userInfo} />}
        </>
    );
};

export default RightChat;
