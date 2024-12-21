import React from 'react';
import Sidebar from '../../components/Sidebar';
import RightChat from '../../components/RightChat';
import Navbar from '../../components/Navbar';
import { useTheme } from '../../context/theme';


const Chats: React.FC = () => {

 const{theme} =useTheme()
 console.log(theme);
 
    return (
        <div className="bg-slate-900 h-screen flex items-center justify-center">
            <div className={`bg-white shadow-xl flex  h-full w-full`} >
                <Navbar />
                {/* Sidebar */}
                <Sidebar />

                {/* chat section  */}
                <RightChat />

            </div>
        </div>
    )
}

export default Chats;
