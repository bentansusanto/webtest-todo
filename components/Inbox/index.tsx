import Image from "next/image";
import { useState } from "react";
import Chat from "../../public/assets/chat.svg";
import Inboxs from "../../public/assets/Inbox.svg";
import Task from "../../public/assets/task.svg";
import Chats from './components/Chat/index'

const Inbox = () => {
    const [showIcon, setShowIcon] = useState(false)
    const [chatIcon, setChatIcon] = useState(false)
    const [taskIcon, setTaskIcon] = useState(false)

  return (
    <div className="fixed bottom-5 right-5">

        {/* Content */}
        <div className={`${chatIcon ? "bg-gray-100 py-5 px-5 w-[40rem] h-[30rem]" : "hidden"} mr-5`}>
            <div>
                <Chats chatIcon={chatIcon} taskIcon={taskIcon}/>
                <h1 className={`${taskIcon ? "text-2xl" : "hidden"}`}>Hello guys</h1>
            </div>
        </div>

        {/* Button Icon Inbox */}
        <div className="flex flex-row-reverse space-x-reverse space-x-5 items-end">
            {/* Button inbox */}
            <div onClick={() => setShowIcon(!showIcon)} className={`${chatIcon ? "hidden" : "flex" || taskIcon ? "block" : ""}`}>
                <Image src={Inboxs} alt=""/>
            </div>

            {/* Button Chat and Task */}
            <div className={`${taskIcon && chatIcon? "flex flex-row-reverse space-x-reverse" : ""} ${showIcon? "flex" : "hidden"}  space-x-5 items-end`}>
                {/* Task */}
                <div className="space-y-2" onClick={() => setTaskIcon(!taskIcon)}>
                    <p className={`${chatIcon ? "hidden" : "text-center"} `}>Task</p>
                    <div>
                    <Image src={Task} alt=""/>
                    </div>
                </div>
                {/* Chat */}
                <div className="space-y-2" onClick={() => setChatIcon(!chatIcon)}>
                    <p className={`${chatIcon ? "hidden" : "text-center"} `}>Chat</p>
                    <div>
                    <Image src={Chat} alt=""/>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  );
};

export default Inbox;
