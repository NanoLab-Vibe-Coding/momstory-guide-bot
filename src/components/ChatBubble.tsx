import { cn } from "@/lib/utils";

interface ChatBubbleProps {
  type: "user" | "bot";
  children: React.ReactNode;
  className?: string;
}

export const ChatBubble = ({ type, children, className }: ChatBubbleProps) => {
  return (
    <div
      className={cn(
        "max-w-[85%] animate-fade-in",
        type === "user" ? "ml-auto" : "mr-auto"
      )}
    >
      <div
        className={cn(
          "chat-bubble px-5 py-4",
          type === "user" ? "chat-bubble-user" : "chat-bubble-bot",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
