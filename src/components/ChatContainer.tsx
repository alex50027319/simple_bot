import { useState } from 'react';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

export default function ChatContainer() {
  const [messages, setMessages] = useState<Message[]>([
    { text: 'How can I help you today?', sender: 'bot' },
  ]);

  const handleSend = (message: string) => {
    setMessages((prev) => [...prev, { text: message, sender: 'user' }]);

    const loadingMsg: Message = { text: '...', sender: 'bot' };
    setMessages((prev) => [...prev, loadingMsg]);

    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg === loadingMsg ? { text: 'This is a bot reply!', sender: 'bot' } : msg
        )
      );
    }, 1000);
  };

  return (
    <div className="chat-container">
      <ChatHeader />
      <ChatBody messages={messages} />
      <ChatFooter onSend={handleSend} />
    </div>
  );
}
