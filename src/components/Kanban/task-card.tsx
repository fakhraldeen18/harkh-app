import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Avatar, AvatarImage } from '../ui/avatar';
import { MessageCircle, Paperclip } from 'lucide-react';
import { Task } from '@/types/Index';
import { Card, CardDescription, CardTitle } from '../ui/card';
import { cva } from 'class-variance-authority';




const avatarImages : string[] = [
  "https://github.com/shadcn.png",
  "https://github.com/shadcn.png",

];

interface TaskCardProps {
  task: Task;
  isOverlay?: boolean;
}

export type TaskType = 'Task';

export interface TaskDragData {
  type: TaskType;
  task: Task;
}




 const TaskCard: React.FC<TaskCardProps> = ({task, isOverlay}) => {


  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: task.id,
    data: {
      type: 'Task',
      task
    } satisfies TaskDragData,
    attributes: {
      roleDescription: 'Task'
    }
  });


  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  const variants = cva('w-[353px] p-4 bg-white rounded-lg shadow-md space-y-2 cursor-grab my-3 w', {
    variants: {
      dragging: {
        over: 'ring-2 opacity-30',
        overlay: 'ring-2 ring-primary'
      }
    }
  });

  return (
    
    <Card 
    
    ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
     className={variants({
        dragging: isOverlay ? 'overlay' : isDragging ? 'over' : undefined
      })}
    >
      <div className="flex justify-between items-center">
      <div className="flex gap-2">
      {task.tags.map((tag) => (
            <span
              key={tag.id}
              className="px-3 py-0.5 text-sm bg-red-50 text-red-400 rounded "
            >
              {tag.name}
            </span>
          ))}
          </div>
        <button className="text-gray-400 hover:text-gray-600">...</button>
      </div>

      
      <div className="flex flex-col text-left space-y-1 w-full">
  <CardTitle className="px-1 py-0.5 text-xl text-slate-950 font-bold truncate w-full">
   {task.title}
  </CardTitle>
  <CardDescription className="px-1 py-0.5 text-sm text-slate-500 font-light whitespace-break-spaces">
    {task.description}
  </CardDescription>
</div>
{task.image?.url && (
        <div className="h-24 bg-gray-100 rounded overflow-hidden">
          <img
            src={task.image.url}
            alt={task.image.name}
            className="object-cover w-full h-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300"
          />
        </div>
      )}
     

      <div className="flex justify-between items-center text-sm text-gray-500">
      <Avatar className="flex -space-x-3 w-14 -mr-1">{avatarImages.map((src, index) => (
    <AvatarImage
      key={index} 
      src={src}
      alt={`@shadcn-${index}`}
      className="rounded-full w-8 h-8 border-slate-300 border-2"
    />
  ))}
    </Avatar>

        <div className="flex gap-3 ">
          <div className="flex gap-1 items-center">
            <MessageCircle className="w-4 h-4 mt-0.5" /> <span> {task.comments?.length || 0} comments</span>
          </div>
          <div className="flex gap-1 items-center">
            <Paperclip className="w-4 h-4 mt-0.5" /> <span> {task.files?.length || 0} files</span>
          </div>
        </div>
        

      </div>
    </Card>
  );
};

export default TaskCard;
