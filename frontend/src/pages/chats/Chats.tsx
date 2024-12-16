import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import RightChat from '../../components/RightChat';
import Navbar from '../../components/Navbar';


const Chats: React.FC = () => {

    const [fullscreen, setFullScreen] = useState(false);
    const toggleSize = () => {
        setFullScreen((prev) => !prev);
    };

    return (
        <div className="bg-slate-900 h-screen flex items-center justify-center">
            <div className={`bg-white shadow-xl flex ${fullscreen ? "h-full w-full" : "h-[75vh] w-[75vw]"}`} >
                <Navbar/>
                {/* Sidebar */}
                <Sidebar fullscreen={fullscreen} />
                  
                {/* chat section  */}
                <RightChat toggleSize={toggleSize} fullscreen={fullscreen}/>

            </div>
        </div>
    )
}

export default Chats;
