interface AnswerContentProps {
  title: string;
  imagePlaceholder?: boolean;
  content: React.ReactNode;
  mapLocation?: string;
  isTable?: boolean;
  isLink?: boolean;
  rawContent?: string[];
}

export const AnswerContent = ({ 
  title, 
  imagePlaceholder, 
  content,
  mapLocation,
  isTable,
  isLink,
  rawContent
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
        {isTable && rawContent ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-border rounded-lg">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border px-4 py-2 text-left font-semibold">시간</th>
                  <th className="border border-border px-4 py-2 text-left font-semibold">내용</th>
                </tr>
              </thead>
              <tbody>
                {rawContent.map((row, idx) => {
                  const [time, description] = row.split('|');
                  return (
                    <tr key={idx} className="hover:bg-muted/50">
                      <td className="border border-border px-4 py-2 whitespace-nowrap align-top font-medium">{time}</td>
                      <td className="border border-border px-4 py-2 whitespace-pre-line">{description}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : isLink && rawContent ? (
          <div>
            {rawContent.map((line, idx) => {
              if (line.startsWith('http')) {
                return (
                  <a 
                    key={idx}
                    href={line}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-primary hover:text-primary/80 underline font-medium"
                  >
                    건국유치원 추가문의 링크
                  </a>
                );
              }
              return <p key={idx} className={line === "" ? "h-2" : ""}>{line}</p>;
            })}
          </div>
        ) : (
          content
        )}
      </div>
    </div>
  );
};
