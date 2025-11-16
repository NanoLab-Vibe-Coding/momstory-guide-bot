interface AnswerContentProps {
  title: string;
  imagePlaceholder?: boolean;
  content: React.ReactNode;
  mapLocation?: string;
}

export const AnswerContent = ({ 
  title, 
  imagePlaceholder, 
  content,
  mapLocation 
}: AnswerContentProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-primary flex items-center gap-2">
        {title}
      </h3>
      
      {imagePlaceholder && (
        <div className="w-full aspect-video bg-muted rounded-2xl flex items-center justify-center border-2 border-dashed border-border">
          <span className="text-muted-foreground text-sm">이미지 영역</span>
        </div>
      )}

      {mapLocation && (
        <div className="w-full h-64 bg-muted rounded-2xl overflow-hidden border border-border">
          <iframe
            src={`https://map.kakao.com/link/map/${mapLocation},36.9736,127.9277`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="호암체육관 위치"
          />
        </div>
      )}
      
      <div className="text-foreground leading-relaxed space-y-2">
        {content}
      </div>
    </div>
  );
};
