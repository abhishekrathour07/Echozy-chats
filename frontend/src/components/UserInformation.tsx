import { EllipsisVertical, MessageSquare, Video, X } from 'lucide-react'
import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar'

type props = {
    toggleInfo: () => void,
    isOpen: boolean
}
const UserInformation: React.FC<props> = ({ toggleInfo }) => {
    return (
        <div
            className={`fixed top-0 right-0 z-50 bg-slate-800 shadow-lg h-full w-full sm:w-1/2 md:w1/3 lg:w-1/4 p-4 transition-transform duration-400`}
        >
            <div className='flex px-2 h-14 border-b border-slate-500 justify-between items-center text-xl font-semibold text-white'>
                <p >Profile</p>
                <X onClick={toggleInfo} className='cursor-pointer hover:text-slate-600' />
            </div>
            <div className='w-full flex flex-col justify-betweeen gap-2 mt-4 items-center text-white px-2 py-4'>
                <Avatar className='w-24 h-24 rounded-md '>
                    <AvatarImage
                        className="w-24 h-24 rounded-md object-cover object-center"
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent('Abhishek Singh')}`}
                        alt="Abhishek Singh"
                    />
                </Avatar>
                <h2 className='text-2xl'>Abhishek Singh</h2>
                <p className='text-md text-slate-400'>software Developer</p>
            </div>
            <div className='flex gap-2 text-white justify-between px-4'>
                <div className=' border border-slate-500 flex items-center rounded-md px-6 py-2 gap-2'>
                    <MessageSquare size={18} />
                    <p>Message</p>
                </div>
                <div  className=' border border-slate-500 flex items-center rounded-md px-6 py-2 gap-2'>
                    <Video size={18}/>
                    <p>Huddle</p>
                </div>
                <div  className=' border border-slate-500 flex items-center rounded-md px-2 py-2'>
                    <EllipsisVertical size={18}/>

                </div>
            </div>
        </div>
    )
}

export default UserInformation
