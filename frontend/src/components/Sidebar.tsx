import React, { useState } from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'

const Sidebar: React.FC = () => {
    const data = [
        {
            id: 1,
            name: "John Doe",
            msg: "Hey, just wanted to check in on the project status.",
            image: null,
        },
        {
            id: 2,
            name: "Jane Smith",
            msg: "Looking forward to our meeting tomorrow!",
            image: null,
        },
        {
            id: 3,
            name: "Alex Johnson",
            msg: "Can you share the latest updates with me?",
            image: null,
        },
        {
            id: 4,
            name: "Emily Davis",
            msg: "Happy Friday! Have a great weekend ahead.",
            image: null,
        },
        {
            id: 5,
            name: "Michael Brown",
            msg: "Thanks for the support! Really appreciate it.",
            image: null,
        },
        {
            id: 6,
            name: "Michael Brown",
            msg: "Thanks for the support! Really appreciate it.",
            image: null,
        },
        {
            id: 7,
            name: "Michael Brown",
            msg: "Thanks for the support! Really appreciate it.",
            image: null,
        },
        {
            id: 8,
            name: "Abhishek Singh",
            msg: "Thanks for the support! Really appreciate it.",
            image: null,
        },
    ];

    const [selected, setSelected] = useState(0)

    return (
        <div className={`h-full bg-slate-800 text-white flex flex-col border-r border-gray-600 w-[27vw] dark:text-slate-800 dark:bg-white`}>
            {/* Header */}
            <div className={`flex justify-center items-center w-full px-4 gap-2 border-b border-gray-600 h-20`}>
                <p className='text-lg font-semibold'>Active Conversation <span className='bg-red-600 text-white h-6 w-6 px-2  rounded-full'>5</span></p>

            </div>

            {/* Search Bar */}
            <div className="flex w-full items-center px-6 py-2 relative">
                <Input type="text" placeholder="Search anything..." className="pr-10" />
                <Search className="absolute right-8 text-gray-400" />
            </div>

            {/* Chat List */}
            <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900  dark:scrollbar-thumb-slate-200 dark:scrollbar-track-white">
                {data.map((item: any) => (
                    <div
                        onClick={() => setSelected(item.id)} // Update the selected state correctly
                        className={`flex h-20 gap-4 px-4 py-3 items-center mt-[1.2px] dark:border-t cursor-pointer hover:bg-slate-950 dark:hover:bg-gray-200 dark:text-slate-800 dark:bg-white
                     ${selected === item.id ? "bg-slate-950 dark:bg-gray-300" : "bg-slate-900 "}`} // Proper conditional styling
                        key={item.id}
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
                            <h2 className="text-lg font-semibold text-white truncate w-40 dark:text-slate-800">
                                {item.name}
                            </h2>
                            <p className="text-gray-400 text-sm truncate w-40 dark:text-slate-800">
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
