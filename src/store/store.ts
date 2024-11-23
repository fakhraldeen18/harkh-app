import  {create}  from 'zustand';
import { v4 as uuid } from 'uuid';
import { persist } from 'zustand/middleware';
import { Task, Media, Comments, User, Tags, ColumnId, Column } from '@/types/Index';
import { initialTasks } from '@/context/taskData';
import { initialCols } from '@/context/columnsData';





type KanbanState = {
  tasks: Task[];
  columns: Column[];
  addTask: (title: string, tags:Tags[],description: string, ) => void;
  updateTaskStatus: (taskId: string, newStatus: ColumnId) => void;
  setTasks: (updatedTask: Task[]) => void;
  setCols: (cols: Column[]) => void;
};

export const useTaskStore = create<KanbanState>()(
    persist(
        (set) => ({
            columns: initialCols,
            tasks: initialTasks,
            draggedTask: null,

            setCols: (newCols: Column[]) => set({ columns: newCols }),
            setTasks: (newTasks: Task[]) => set({ tasks: newTasks }),
            addTask: (title: string, tags: Tags[],description: string ) =>
                set((state) => ({
                    tasks: [
                        ...state.tasks,
                        { id: uuid(), title, description, status: 'TODO' , tags}
                    ]
                })),
            updateTaskStatus: (taskId, newStatus) =>
                set((state) => ({
                    tasks: state.tasks.map((task) =>
                        task.id === taskId ? { ...task, status: newStatus } : task
                    ),
                })),



        }),

        { name: 'task-store' }
    ))







