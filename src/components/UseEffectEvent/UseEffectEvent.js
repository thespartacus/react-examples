import { useEffect, useState } from "react";

const ChatRoom = (props) => {
  const [ message, setMessage ] = useState('');

  const sendMessage = () => {
    console.log("Message Sent.");
  }

  const onConnected = useEffectEvent(() => {
    console.log("Theme is: ", props.theme);
  })

  useEffect(() => {
    console.log("Room Connected.");
    onConnected();
    return console.log("Room Disconnected");
  }, [props.roomId, props.theme])

  return (
    <div>
      <input value={message} nChange={e => setMessage(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState('general');
  const [show, setShow] = useState(false);
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={e => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={e => setIsDark(e.target.checked)}
        />
        Use dark theme
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? 'Close chat' : 'Open chat'}
      </button>
      {show && <hr />}
      {show && <ChatRoom roomId={roomId} theme={isDark} />}
    </>
  );
}
