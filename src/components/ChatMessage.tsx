interface ChatMessageProps {
  text: string;
  sender: 'user' | 'bot';
}

export default function ChatMessage({ text, sender }: ChatMessageProps) {
  return <div className={`chat-message ${sender}`}>{text}</div>;
}
