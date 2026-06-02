import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";

import { cn } from "@/lib/utils";

type SuperProps = {
  scriptText: string;
  scriptContent: string;
};

function Super({
  className,
  scriptText,
  scriptContent,
  ...props
}: React.ComponentProps<"div"> & SuperProps) {
  return (
    <HoverCard openDelay={1}>
      <HoverCardTrigger>
        <sup
          className={cn(className, "text-blue-300 hover:cursor-default")}
          {...props}
        >
          {scriptText}
        </sup>
      </HoverCardTrigger>
      <HoverCardContent>
        <p>{scriptContent}</p>
      </HoverCardContent>
    </HoverCard>
  );
}

export { Super };
