import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useDndContext } from "@dnd-kit/core";
import { cva } from "class-variance-authority";

export function ColWrapper({ children }: { children: React.ReactNode }) {
    const dndContext = useDndContext();
  
    const variations = cva('px-2  pb-4 md:px-0 flex lg:justify-start', {
      variants: {
        dragging: {
          default: '',
          active: 'snap-none'
        }
      }
    });
  
    return (
      <ScrollArea className="w-full whitespace-nowrap rounded-md mt-6 ">
        <div
          className={variations({
            dragging: dndContext.active ? 'active' : 'default'
          })}
        >
          <div className="flex flex-row items-start justify-center gap-4">
            {children}
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    );
  }