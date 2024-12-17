import { LogOut, MessageSquare } from 'lucide-react'
import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import ModeSwitch from './Modes'



const Navbar: React.FC = () => {
    return (
        <div className='flex flex-col justify-between py-6 items-center bg-slate-800 px-2 border-r border-gray-600 drop-shadow-xl w-16 '>
            <div className='flex flex-col gap-6 items-center'>
                <img src="/Echozy.png" alt="Logo" className="h-10 rounded-full" />
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <MessageSquare className='text-white hover:text-slate-300 cursor-pointer' />
                        </TooltipTrigger>
                        <TooltipContent side='right'>
                            <p className='text-xs text-white bg-slate-800 p-2 rounded-lg border'>Message</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <div className='flex flex-col gap-6 items-center'>
               
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                        <p> <ModeSwitch /></p>
                        </TooltipTrigger>
                        <TooltipContent side='right' >
                            <p className='text-xs text-white bg-slate-800 p-2 rounded-lg border'>Switch Mode</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <LogOut className='text-white hover:text-slate-300 cursor-pointer' />
                        </TooltipTrigger>
                        <TooltipContent side='right' >
                            <p className='text-xs text-white bg-slate-800 p-2 rounded-lg border'>Log out</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
               
            </div>
        </div>
    )
}

export default Navbar
