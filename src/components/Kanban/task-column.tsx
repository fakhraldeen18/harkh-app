import React, { useMemo } from 'react';
import TaskCard from './task-card';
import { UniqueIdentifier } from '@dnd-kit/core';
import { Task } from '@/types/Index';
import { cva } from 'class-variance-authority';
import { CSS } from '@dnd-kit/utilities';
import { SortableContext, useSortable } from '@dnd-kit/sortable';
import { Button } from '../ui/button';
import { GripVertical } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';




export interface Column {
  id: UniqueIdentifier;
  title: string;
}


export type ColumnType = 'Column';

export interface ColumnDragData {
  type: ColumnType;
  column: Column;
}

interface BoardColumnProps {
  column: Column;
  tasks: Task[];
  isOverlay?: boolean;
  tasksIds: string[]
}

const TaskColumn: React.FC<BoardColumnProps> = ({ column, tasks, isOverlay, tasksIds }) => {


  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: 'Column',
      column,
    } satisfies ColumnDragData,
    attributes: {
      roleDescription: `Column: ${column.title}`,
    },
  });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform)
  };
  
  const variants = cva(
    'p-4 bg-gray-100/75 rounded-md space-y-4 h-[69vh] max-h-[75vh] w-[380px] max-w-full flex flex-col flex-shrink-0 snap-center',
    {
      variants: {
        dragging: {
          default: 'border-2 border-transparent',
          over: 'ring-2 opacity-30',
          overlay: 'ring-2 ring-primary'
        }
      }
    }
  );

  const colorVariants = cva('rounded-full w-2 h-2', {
    variants: {
      status: {
        todo: 'bg-purple-500',
        inprogress: 'bg-orange-500',
        done: 'bg-green-500',
        default: 'bg-gray-400', // fallback color
      },
      line: {

      }

    },
    defaultVariants: {
      status: 'default',
    },
  });

  const borderVariants = cva('flex justify-between items-center gap-2 border-b-2 pb-4', {
    variants: {
      status: {
        todo: 'border-purple-500',
        inprogress: 'border-orange-500',
        done: 'border-green-500',
        default: 'border-gray-400',
      },
    },
    defaultVariants: { status: 'default' },
  });

  const columnStatus = column.title.toLowerCase().replace(' ', '') as 'todo' | 'inprogress' | 'done';



  return (
    <div
      ref={setNodeRef}
      style={style}
      className={variants({
        dragging: isOverlay ? 'overlay' : isDragging ? 'over' : undefined,
      })}
    >
      <div className={borderVariants({ status: columnStatus })}>
        <div className="flex items-center gap-2">
          <span className={colorVariants({ status: columnStatus })}></span>
          <h2 className="text-lg font-semibold ">{column.title}</h2>
          <span className="flex items-center text-xs text-slate-500 rounded-full w-4 h-4  bg-slate-200">
            <span className='p-1'>{tasks.length}</span></span>
        </div>
        <div>
          <Button
            variant={'ghost'}
            {...attributes}
            {...listeners}
            className=" relative -ml-2 h-auto cursor-grab p-1 text-primary/50"
          >
            <span className="sr-only">{`Move column: ${column.title}`}</span>
            <GripVertical />
          </Button>
        </div>
      </div>
      
      <div className="flex flex-grow flex-col gap-2 overflow-x-hidden ">
        <ScrollArea className="h-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
          <SortableContext items={tasksIds}>
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />

            ))}
          </SortableContext>
        </ScrollArea>
      </div>
    </div>
  );
}

export default TaskColumn;