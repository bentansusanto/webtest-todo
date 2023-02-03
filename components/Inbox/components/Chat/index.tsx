import React from 'react'
import Search from './components/Search'

interface ChatProps {
    chatIcon : boolean,
    taskIcon : boolean
}

const Chat : React.FC<ChatProps> = ({chatIcon, taskIcon}) => {
  return (
    <div className={`${chatIcon ? "block" : "hidden"} ${taskIcon? "hidden" : "block"}`}>
        <Search/>
    </div>
  )
}

export default Chat