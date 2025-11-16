import { cn } from "@/lib/utils";

interface ActionButtonProps {
  icon: string;
  label: string;
  onClick: () => void;
  className?: string;
}

export const ActionButton = ({ icon, label, onClick, className }: ActionButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex-shrink-0 flex flex-col items-center gap-2 px-5 py-3 bg-card rounded-2xl border-2 border-border hover:border-primary hover:bg-secondary/30 transition-all duration-200 active:scale-95 shadow-sm",
        className
      )}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-xs font-medium text-foreground whitespace-nowrap">
        {label}
      </span>
    </button>
  );
};
