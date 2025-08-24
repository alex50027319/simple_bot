interface ChatMessageProps {
  text: string;
  sender: 'user' | 'bot';
}

export default function ChatMessage({ text, sender }: ChatMessageProps) {
  const side = sender === 'user' ? 'user' : 'bot';
  return (
    <div className={`chat-row ${side}`}>
      <div className={`chat-message ${side}`}>
        {text}
      </div>
    </div>
  );
}
