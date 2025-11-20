import { useState } from "react";

interface AnswerContentProps {
  title: string;
  imageUrl?: string;
  content: React.ReactNode;
  isTable?: boolean;
  isLink?: boolean;
  rawContent?: string[];
  showMap?: boolean;
}

export const AnswerContent = ({ 
  title,
  imageUrl,
  content,
  isTable,
  isLink,
  rawContent,
  showMap
}: AnswerContentProps) => {
  const [imageOk, setImageOk] = useState(true);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-primary flex items-center gap-2">{title}</h3>

      {showMap ? (
        <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border">
          <img
            src="/assets/event-place.jpg"
            alt="행사장 위치 약도"
            className="w-full h-full object-cover"
          />
        </div>
      ) : null}

      {!showMap && !isLink && imageUrl && imageOk ? (
        <div className="w-full max-h-[500px] rounded-2xl overflow-hidden border border-border bg-muted/20 flex items-center justify-center">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto object-contain"
            onError={() => setImageOk(false)}
          />
        </div>
      ) : !showMap && !isLink ? (
        <div className="w-full aspect-[4/3] bg-muted/50 rounded-2xl flex items-center justify-center border-2 border-dashed border-border/50">
          <span className="text-muted-foreground text-sm">이미지 영역</span>
        </div>
      ) : null}

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
