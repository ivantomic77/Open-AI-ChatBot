import React, { useState} from "react";
import TextareaAutosize from 'react-textarea-autosize';
import ResponsesComp from "../Components/ResponsesComp.js";
import useApi from './../Services/OpenAPIService.js'

function Main() {
    const [message, setMessage] = useState('');
    const { response, getResponse } = useApi();

    const [messageList, setMessageList] = useState([]);
    const [responseList, setResponseList] = useState([]);

    const handleSubmit = (e) => {
        setMessageList(messageList => [...messageList, message]);
        e.preventDefault();
        getResponse(message);
        setResponseList(responseList => [...responseList, response]);
    };
    
    return (
        <div className="flex max-w-screen max-h-screen h-screen w-screen justify-between align-center flex-col px-32 py-8">
        <ResponsesComp messages={messageList} responses={responseList} />
        <h1 className='shrink'>{response}</h1>
            <form onSubmit={handleSubmit} className="flex justify-center align-center h-10 gap-2 ">
            <TextareaAutosize autoFocus 
                value={message}
                onChange={(e) => {
                    setMessage(e.target.value);
                }}
                className="bg-gray-700 rounded-l focus:outline-none p-2 w-[90vw] grow box-border text-lg"
                />
            <button type="submit" className="bg-gray-700 font-bold py-2 px-4 rounded-l max-h-[60px]">SUBMIT</button>
            </form>
        </div>
    );
}

export default Main;

