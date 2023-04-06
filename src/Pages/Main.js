import React, { useState, useEffect } from "react";
import TextareaAutosize from 'react-textarea-autosize';
import useApi from './../Services/OpenAPIService.js'

function Main() {
  const [message, setMessage] = useState('');
  const { response, getResponse } = useApi();

  const [chat, setChat] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMessage = { text: message, sender: 'user' };
    setChat(prevChat => [...prevChat, newMessage]);
    getResponse(message);
    setMessage('');
  };

  useEffect(() => {
    if (response) {
      const newResponse = { text: response, sender: 'bot' };
      setChat(prevChat => [...prevChat, newResponse]);
    }
  }, [response]);

  return (
    <div className="flex max-w-full max-h-screen justify-between align-center flex-col px-4 md:px-32 py-8 relative">
      <div className="flex flex-col gap-4 flex-grow pb-20">
        {chat.map((message, i) => (
          <div className={`p-2 rounded-lg ${message.sender === 'user' ? 'bg-gray-700 text-white' : 'bg-gray-500 text-white'}`} key={i}>
            {message.sender === 'user' ? 'Request: ' : 'Response: '}
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex justify-center grow align-center gap-2 shrink fixed bottom-0 left-0 w-full">
        <textarea
          className="bg-gray-700 rounded-l p-2 w-full h-10 text-lg box-border outline-none"
          placeholder="Send a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          style={{
            maxHeight: '200px',
            overflowY: 'hidden',
            whiteSpace: 'nowrap',
            overflowX: 'auto',
          }}/>
        <button type="submit" className="bg-gray-700 font-bold py-2 px-4 rounded-l max-h-[60px]">SUBMIT</button>
      </form>
    </div>
  );
}

export default Main;
