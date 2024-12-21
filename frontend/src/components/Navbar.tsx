import {
  CircleEllipsis,
  CircleUserRound,
  LogOut,
  MessageSquare,
  Shapes,
  Users,
} from 'lucide-react';
import React, { useState } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';
import ModeSwitch from './Modes';

const Navbar: React.FC = () => {
  const iconsArray = [
    { id: 4, name: 'Message', icon: <MessageSquare /> },
    { id: 1, name: 'Workspace', icon: <Shapes /> },
    { id: 2, name: 'Groups', icon: <Users /> },
    { id: 3, name: 'Profile', icon: <CircleUserRound /> },
    { id: 5, name: 'More', icon: <CircleEllipsis /> },
  ];

  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col justify-between py-6 items-center bg-slate-800 px-2 border-r border-gray-600 drop-shadow-xl w-16 dark:bg-white  dark:text-fill">
      <div className="flex flex-col gap-6 items-center">
        <img src="/Echozy.png" alt="Logo" className="h-10 rounded-full " />
        {iconsArray.map(({ id, name, icon }) => (
          <TooltipProvider key={id}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div
                  onClick={() => setSelected(id)} // Update the selected state here
                  className={`text-white dark:text-black hover:text-slate-300 cursor-pointer border border-slate-900 dark:border-slate-300 p-2 rounded-md ${selected === id ? 'bg-slate-900 dark:bg-slate-200' : ''
                    }`}
                >
                  {icon}
                </div>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p className="text-xs text-white bg-slate-800 p-2 rounded-lg border dark:text-slate-800 dark:bg-white">
                  {name}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      <div className="flex flex-col gap-6 items-center">
        <TooltipProvider>
          <Tooltip delayDuration={400}>
            <TooltipTrigger asChild>
              <ModeSwitch />
            </TooltipTrigger>
            <TooltipContent side="right">
              <p className="text-xs text-white bg-slate-800 p-2 rounded-lg border dark:text-slate-800 dark:bg-white">
                Switch Mode
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip delayDuration={400}>
            <TooltipTrigger asChild>
              <div className='border border-slate-900 p-2 rounded-md dark:border-slate-300'>
                <LogOut className="text-white hover:text-slate-500 cursor-pointer dark:text-slate-800 dark:bg-white " />

              </div>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p className="text-xs text-white bg-slate-800 dark:text-slate-800 dark:bg-white p-2 rounded-lg border">
                Log out
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Navbar;
