import Image from "next/image";
import { useState } from "react";
import Chat from "../../public/assets/chat-gray.svg";
import Chat1 from "../../public/assets/chat-white.svg";
import Inboxs from "../../public/assets/inbox.svg";
import Task from "../../public/assets/task-yellow.svg";
import Task1 from "../../public/assets/task-white.svg";
import Chats from "./components/Chat/index";

const Inbox = () => {
  const [showIcon, setShowIcon] = useState(false);
  const [chatIcon, setChatIcon] = useState(false);
  const [taskIcon, setTaskIcon] = useState(false);

  return (
    <div className="fixed bottom-6 right-5">
      {/* Content for Chat */}

      <div
        className={`${
          chatIcon ? "bg-gray-100 py-5 px-5 w-[40rem] h-[30rem] mr-5" : "hidden"
        } `}
      >    
          <Chats chatIcon={chatIcon} taskIcon={taskIcon} />
      </div>
      {/* Content for Task */}
      <div
        className={`${
          taskIcon ? "bg-gray-100 py-5 px-5 w-[40rem] h-[30rem] mr-5" : "hidden"
        } ${chatIcon ? "hidden" : ""}`}
      >
        <div>
         <h1>Hello guys</h1>
        </div>
      </div>

      {/* Button Icon Inbox */}
      <div className="flex flex-row-reverse space-x-reverse space-x-5 items-end">
        {/* Button inbox */}
        <div
          onClick={() => setShowIcon(!showIcon)}
          className={`${
            chatIcon ? "hidden" : "flex"
          } ${taskIcon ? "hidden" : "flex"}`} 
        >
          <div className="bg-[#2F80ED] py-5 px-7 rounded-full shadow-md">
            <Image src={Inboxs} alt="" />
          </div>
        </div>

        {/* Button Chat and Task */}
        <div
          className={`${
            taskIcon ? "flex flex-row-reverse space-x-reverse items-center" : "flex items-center"
          }  ${showIcon ? "flex space-x-5 items-end" : "hidden"}`}
        >
          {/* Task */}
          <div className="space-y-2" onClick={() => setTaskIcon(!taskIcon)}>
            <p className={`${chatIcon  ? "hidden" : "text-center"} ${taskIcon ? "hidden" : "text-center"} `}>Task</p>
            <div onClick={() => setChatIcon(false)} className={` ${taskIcon ? "bg-[#F8B76B] py-[1.8rem] px-[1.7rem]" : "bg-[#f5f5f5] py-[1.3rem] px-[1.2rem]"} rounded-full shadow-md`}>
            {
                    taskIcon ?  (<Image src={Task1} alt="" />) : (<Image src={Task} alt="" />) 
                }
            </div>
          </div>
          {/* Chat */}
          <div className="space-y-2" onClick={() => setChatIcon(!chatIcon)}>
            <p className={`${chatIcon? "hidden" : "text-center"} ${taskIcon ? "hidden" : "text-center"} `}>Chat</p>
            <div>
              <div onClick={() => setTaskIcon(false)} className={` ${ chatIcon ? "bg-[#8785FF] p-6" : "bg-[#f5f5f5] p-5"} rounded-full shadow-md`} >
                {
                    chatIcon ?  (<Image src={Chat1} alt="" />) : (<Image src={Chat} alt="" />)
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
