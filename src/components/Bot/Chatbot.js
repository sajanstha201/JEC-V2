import React, { useState, useEffect } from 'react';
import namaste from '../../media/images/namaste.jfif';

export default function Chatbot() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleChatbotVisibility = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  useEffect(() => {
    if (isChatbotVisible && messages.length === 0) {
      setMessages([{ text: "Hi there! How can I help you today?", sender: 'bot' }]);
    }
  }, [isChatbotVisible]);

  const handleSendMessage = () => {
    if (input.trim()) {
      setIsLoading(true);
      const newMessages = [...messages, { text: input, sender: 'user' }];
      setMessages(newMessages);
      setInput('');
      setTimeout(() => {
        const botResponse = getBotResponse(input);
        setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
        setIsLoading(false);
      }, 1000);
    }
  };

  const getBotResponse = (userMessage) => {
    const responses = {
      hello: "Hi there! How can I help you today?",
      help: "I'm here to assist you with any questions you have.",
      default: "I'm sorry, I don't understand that. Can you please rephrase?"
    };

    const lowerCaseMessage = userMessage.toLowerCase();
    return responses[lowerCaseMessage] || responses.default;
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center fixed bottom-0 right-0 mb-6 h-[300px] mr-0 md:mr-[20px] transition-transform transform hover:scale-105">
        <div>
          <img src={namaste} className="w-[150px] h-[150px] rounded-full shadow-lg" alt="Chatbot Icon" />
        </div>
        <div>
          <button
            type="button"
            className="btn bg-gradient-to-r from-green-400 to-green-600 h-[80px] w-[200px] text-center text-[25px] text-white rounded-lg shadow-xl transition-transform transform hover:scale-105 flex flex-col items-center justify-center"
            onClick={toggleChatbotVisibility}
          >
            <span className='font-bold'>JANAKI</span>
            <span className='text-[15px] text-black font-bold'>Chat with Janaki</span>
          </button>
        </div>
      </div>

      {isChatbotVisible && (
        <div className="flex flex-col fixed bottom-0 right-0 mr-3 mb-7 h-[500px] border-2 border-gray-300 rounded-lg w-[400px] bg-white shadow-xl transition-transform transform scale-100">
          <div className="flex justify-between items-center bg-[#43a6d0] p-3 rounded-t-lg h-[70px] shadow-md">
            <h1 className="font-bold text-[20px] text-white">CHAT WITH JANAKI</h1>
            <button
              type="button"
              className="flex items-center justify-center w-[40px] h-[40px] rounded-full bg-red-500 text-white text-xl font-bold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition-transform transform hover:scale-105"
              onClick={() => setIsChatbotVisible(false)}
            >
              &times;
            </button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-3">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-4 rounded-lg shadow-md ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} max-w-[75%] relative`}>
                  {message.text}
                  {isLoading && index === messages.length - 1 && (
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-blue-500 animate-pulse"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-gray-100 rounded-b-lg flex items-center">
            <input
              type="text"
              className="flex-1 p-3 border-2 border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
            />
            <button
              type="button"
              className="ml-2 btn bg-gradient-to-r from-blue-400 to-blue-600 text-white p-3 rounded-r-lg shadow-lg transition-transform transform hover:scale-105 active:bg-blue-700"
              onClick={handleSendMessage}
            >
              <span className="font-bold text-lg">Send</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
