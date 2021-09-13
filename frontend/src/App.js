import './App.css';
import './index.css';
import {io} from 'socket.io-client'
import {useState,useEffect} from 'react'
import {nanoid} from "nanoid"
const userName = nanoid(4);
//no.env
const socket = io.connect("http://localhost:3000")


function App() {

  const [message, setMessage] = useState("")
  const [chat, setChat] = useState([])
  const sendChat = (e) =>{
    e.preventDefault()
    socket.emit("chat",{message,userName});
    setMessage('');
  }

  useEffect(() => {
    socket.on("chat",(payload)=>{
      setChat([...chat,payload])
    })
  });


  return (
    
    <div className="App"  text-allign center>
      <body>
      <h1>Chat Application</h1>
      {chat.map((payload,index)=>{
          return (
            <p key ={index}>{payload.message}: <span>id: {payload.userName}</span></p>
          )
        }
      )}  
      <form onSubmit={sendChat}>
        <input type = "text" name = "chat" placeholder = "sendText" value = {message}
        onChange = {(e) =>{
          setMessage(e.target.value)
        }}
        />
        <button type = "submit">Send</button>
      </form>
      </body>
      </div>
    
  );
}

export default App;
