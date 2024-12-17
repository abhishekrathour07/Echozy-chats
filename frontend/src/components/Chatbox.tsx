import { Camera, Mic, Paperclip, Send } from 'lucide-react'
import React from 'react'
import { Input } from './ui/input'
import EmojiPickerPopup from './SelectEmoji'

type props = {
    fullscreen: boolean,
}
const Chatbox: React.FC<props> = ({ fullscreen }) => {
    return (
        <div className='flex-1 flex flex-col'>
            <div className="flex-1 overflow-y-auto bg-[url('/bg-main.png')] px-6 py-4 bg-slate-950 ">
                <div className="flex flex-col gap-3">

                    <div className="self-start py-3 px-1 gap-1 max-w-xs">
                        <p className='bg-slate-700 text-white p-3 rounded-tl-none rounded-lg max-w-xs shadow-md'>
                            Hello gandu bhai gand doge kya ..?
                            <p className='text-xs text-slate-200 px-2 flex justify-end mt-1'>12:00</p>
                        </p>
                    </div>
                    <div className="self-end bg-[#ca4a4a] text-white p-2 rounded-br-none rounded-lg max-w-xs shadow-md">
                        Could you provide more details on the project?
                        <p className='text-xs text-slate-200  flex justify-end mt-1'>12:00</p>

                    </div>

                </div>
            </div>

            {/* Message Input Area */}
            <div className="flex items-center gap-2 bg-slate-800 p-4 border-t border-gray-600 relative">
                <Input
                    placeholder="Type a message..."
                    className="flex-1 h-10 bg-slate-700 text-white rounded-lg px-4 focus:ring-[#f56565] focus:border-none "
                />
                <div className='absolute right-32 flex items-center gap-1'>
                    <Mic  className='text-slate-400 hover:text-slate-500 h-8 w-8 p-1 rounded-full hover:bg-slate-900' />
                    <Paperclip className='text-slate-400 hover:text-slate-500 h-7 w-7 p-1 rounded-full hover:bg-slate-900' />
                    <Camera className='text-slate-400 hover:text-slate-500 h-8 w-8 p-1 rounded-full hover:bg-slate-900' />


                </div>
                <EmojiPickerPopup fullscreen={fullscreen} />
                <div className=" bg-[#ca4a4a] text-white h-10 w-12 rounded-lg hover:bg-[#ec6d6d] cursor-pointer flex items-center justify-center">
                    <Send />
                </div>
            </div>
        </div>
    )
}

export default Chatbox
