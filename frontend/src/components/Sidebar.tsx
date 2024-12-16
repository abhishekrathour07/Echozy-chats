import React from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'

interface SidebarProps {
    fullscreen: boolean;
}
const Sidebar:React.FC<SidebarProps> = ({fullscreen}) => {
    const data = [
        {
            name: "John Doe",
            msg: "Hey, just wanted to check in on the project status.",
            image: "/assets/profile_enrique.png"
        },
        {
            name: "Jane Smith",
            msg: "Looking forward to our meeting tomorrow!",
            image: null
        },
        {
            name: "Alex Johnson",
            msg: "Can you share the latest updates with me?",
            image: null
        },
        {
            name: "Emily Davis",
            msg: "Happy Friday! Have a great weekend ahead.",
            image: null
        },
        {
            name: "Michael Brown",
            msg: "Thanks for the support! Really appreciate it.",
            image: null
        },
        {
            name: "Abhishek Singh",
            msg: "Thanks for the support! Really appreciate it.",
            image: null
        }
    ];

    return (
        <div className={`h-full bg-slate-800 text-white flex flex-col border-r border-gray-600 ${fullscreen ? "w-[27vw]" : "w-[23vw]"}`}>
            {/* Header */}
            <div className={`flex justify-center items-center w-full px-4 gap-2 border-b border-gray-600 ${fullscreen ? "h-20" : "h-20"}`}>
                <p className='text-lg font-semibold'>Active Conversation <span className='bg-red-600 text-white h-6 w-6 px-2  rounded-full'>5</span></p>
            </div>

            {/* Search Bar */}
            <div className="flex w-full items-center px-6 py-2 relative">
                <Input type="text" placeholder="Search anything..." className="pr-10" />
                <Search className="absolute right-8 text-gray-400" />
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
                {data.map((item, index) => (
                    <div
                        className="bg-slate-900 flex h-20 gap-4 px-4 py-3 items-center mt-[1.2px] hover:bg-slate-700 cursor-pointer"
                        key={index}
                    >
                        <Avatar>
                            <AvatarImage
                                className="w-12 h-12 rounded-full"
                                src={
                                    item.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}`
                                }
                                alt={item.name}
                            />
                        </Avatar>
                        <div className="flex flex-col">
                            <h2 className="text-lg font-semibold text-white truncate w-40">
                                {item.name}
                            </h2>
                            <p className="text-gray-400 text-sm truncate w-40">
                                {item.msg}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
