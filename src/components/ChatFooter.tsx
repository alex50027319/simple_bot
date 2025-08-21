import { useState, KeyboardEvent, ChangeEvent } from 'react';

interface ChatFooterProps {
  onSend: (message: string) => void;
}

export default function ChatFooter({ onSend }: ChatFooterProps) {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;
    onSend(input);
    setInput('');
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSend();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="chat-footer">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type your message..."
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}
