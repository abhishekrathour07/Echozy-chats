import React from 'react'
import ChatInputForm from './ChatInputForm'

const Chatbox: React.FC = () => {
    return (
        <div className='flex-1 flex flex-col dark:text-slate-800 dark:bg-white'>
            <div className="flex-1 overflow-y-auto bg-[url('/bg-main.png')] px-6 py-4 bg-slate-950 dark:bg-slate-200">
                <div className="flex flex-col gap-3">

                    <div className="self-start py-3 px-1 gap-1 max-w-xs">
                        <p className='bg-slate-700 text-white dark:text-slate-800 dark:bg-white p-3 rounded-tl-none rounded-lg max-w-xs shadow-md'>
                            Hello gandu bhai gand doge kya ..?
                            <p className='text-xs text-slate-200 dark:text-slate-800 px-2 flex justify-end mt-1'>12:00</p>
                        </p>
                    </div>
                    <div className="self-end bg-[#ca4a4a] text-white  p-2 rounded-br-none rounded-lg max-w-xs shadow-md">
                        Could you provide more details on the project?
                        <p className='text-xs text-slate-200  flex justify-end mt-1'>12:00</p>

                    </div>

                </div>
            </div>

            <ChatInputForm />
        </div>
    )
}

export default Chatbox
