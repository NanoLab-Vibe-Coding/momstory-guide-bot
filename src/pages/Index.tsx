import { useState, useRef, useEffect } from "react";
import { ChatBubble } from "@/components/ChatBubble";
import { ActionButton } from "@/components/ActionButton";
import { AnswerContent } from "@/components/AnswerContent";
import { chatQuestions } from "@/data/chatData";
import { useSpeech } from "@/hooks/useSpeech";
import { Volume2, VolumeX } from "lucide-react";

interface Message {
  id: string;
  type: "user" | "bot";
  content: React.ReactNode;
  textContent?: string;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      type: "bot",
      content: "안녕하세요! 건국유치원 가을운동회 안내 도우미, Mom'story 입니다. 건국유치원 가을운동회에 대해 궁금하신 내용을 빠르게 알려드릴게요. 무엇을 도와드릴까요?",
      textContent: "안녕하세요! 건국유치원 가을운동회 안내 도우미, Mom'story 입니다. 건국유치원 가을운동회에 대해 궁금하신 내용을 빠르게 알려드릴게요. 무엇을 도와드릴까요?"
    }
  ]);

  const { speak, stop, isSpeaking } = useSpeech();
  const chatEndRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuestionClick = (questionId: string) => {
    const question = chatQuestions.find(q => q.id === questionId);
    if (!question) return;

    // Add user question
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: "user",
      content: question.question,
      textContent: question.question
    };

    // Prepare answer text for speech (content only, no title or emoji)
    const answerTextContent = question.answer.content
      .join(" ")
      .replace(/[\u{1F300}-\u{1F9FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/gu, '')
      .trim();

    // Add bot answer
    const botMessage: Message = {
      id: `bot-${Date.now()}`,
      type: "bot",
      content: (
        <AnswerContent
          title={question.answer.title}
          imageUrl={question.answer.imageUrl}
          isTable={question.answer.isTable}
          isLink={question.answer.isLink}
          rawContent={question.answer.content}
          showMap={question.id === 'location'}
          content={
            <div className="space-y-1">
              {question.answer.content.map((line, idx) => (
                <p key={idx} className={line === "" ? "h-2" : ""}>
                  {line}
                </p>
              ))}
            </div>
          }
        />
      ),
      textContent: answerTextContent
    };

    setMessages(prev => [...prev, userMessage, botMessage]);

    // Speak the answer (except for link type answers)
    setTimeout(() => {
      if (botMessage.textContent && !question.answer.isLink) {
        speak(botMessage.textContent);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card border-b border-border shadow-sm">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="text-center space-y-1">
            <p className="text-2xl text-muted-foreground font-medium">건국유치원</p>
            <h1 className="text-5xl font-bold text-foreground">Mom'story</h1>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <main 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto px-4 py-6 pb-32"
      >
        <div className="max-w-2xl mx-auto space-y-4">
          {messages.map((message) => (
            <ChatBubble key={message.id} type={message.type}>
              {message.content}
            </ChatBubble>
          ))}
          <div ref={chatEndRef} />
        </div>
      </main>

      {/* Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-background via-background to-transparent pt-4 pb-6 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Voice Control */}
          <div className="flex justify-end mb-3">
            <button
              onClick={isSpeaking ? stop : undefined}
              className={`p-2 rounded-full transition-colors ${
                isSpeaking 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-muted text-muted-foreground"
              }`}
              disabled={!isSpeaking}
            >
              {isSpeaking ? <Volume2 size={20} /> : <VolumeX size={20} />}
            </button>
          </div>

          {/* Scrollable Buttons */}
          <div className="overflow-x-auto scroll-smooth-x hide-scrollbar">
            <div className="flex gap-3 pb-2">
              {chatQuestions.map((question) => (
                <ActionButton
                  key={question.id}
                  icon={question.icon}
                  label={question.label}
                  onClick={() => handleQuestionClick(question.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Index;
