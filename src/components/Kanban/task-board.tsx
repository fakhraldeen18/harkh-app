
import { closestCenter, DndContext, DragEndEvent, DragOverEvent, DragOverlay, DragStartEvent, MouseSensor, TouchSensor, useSensor, useSensors } from "@dnd-kit/core";
import TaskColumn, { Column } from "./task-column"; 
import { useTaskStore } from "@/store/store";
import { ColWrapper } from "./layout/column-wrapper";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { arrayMove, SortableContext } from "@dnd-kit/sortable";
import {  ColumnId, Task } from "@/types/Index";

import { hasDraggableData } from "@/lib/utils";
import { createPortal } from "react-dom";
import TaskCard from "./task-card";



const TaskBoard = ()=>{



  const columns = useTaskStore((state) => state.columns);
  const setColumns = useTaskStore((state) => state.setCols);

  const tasks = useTaskStore((state) => state.tasks);
  const setTasks = useTaskStore((state) => state.setTasks);

  const tasksIds = useMemo(() => tasks.map((task) => task.id), [tasks]);
  const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

  // const pickedUpTaskColumn = useRef<ColumnId | 'TODO' | 'IN_PROGRESS' | 'DONE'>(
  //   'TODO'
  // );
  const [activeColumn, setActiveColumn] = useState<Column | null>(null);
  const [isMounted, setIsMounted] = useState<Boolean>(false);

  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor)
  );

  useEffect(() => {
    setIsMounted(true);
  }, [isMounted]);

  useEffect(() => {
    useTaskStore.persist.rehydrate();
  }, []);
  if (!isMounted) return;


  function onDragStart(event: DragStartEvent) {
    if (!hasDraggableData(event.active)) return;
    const data = event.active.data.current;
    if (data?.type === 'Column') {
      setActiveColumn(data.column);
      return;
    }

    if (data?.type === 'Task') {
      setActiveTask(data.task);
      return;
    }
  }
  function onDragEnd(event: DragEndEvent) {
    setActiveColumn(null);
    setActiveTask(null);

    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (!hasDraggableData(active)) return;

    const activeData = active.data.current;

    if (activeId === overId) return;

    const isActiveAColumn = activeData?.type === 'Column';
    if (!isActiveAColumn) return;

    const activeColumnIndex = columns.findIndex((col) => col.id === activeId);

    const overColumnIndex = columns.findIndex((col) => col.id === overId);

    setColumns(arrayMove(columns, activeColumnIndex, overColumnIndex));
  }

  function onDragOver(event: DragOverEvent) {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    if (activeId === overId) return;

    if (!hasDraggableData(active) || !hasDraggableData(over)) return;

    const activeData = active.data.current;
    const overData = over.data.current;

    const isActiveATask = activeData?.type === 'Task';
    const isOverATask = activeData?.type === 'Task';

    if (!isActiveATask) return;

    // Im dropping a Task over another Task
    if (isActiveATask && isOverATask) {
      const activeIndex = tasks.findIndex((t) => t.id === activeId);
      const overIndex = tasks.findIndex((t) => t.id === overId);
      const activeTask = tasks[activeIndex];
      const overTask = tasks[overIndex];
      if (activeTask && overTask && activeTask.status !== overTask.status) {
        activeTask.status = overTask.status;
        setTasks(arrayMove(tasks, activeIndex, overIndex - 1));
      }

      setTasks(arrayMove(tasks, activeIndex, overIndex));
    }

    const isOverAColumn = overData?.type === 'Column';

    // Im dropping a Task over a column
    if (isActiveATask && isOverAColumn) {
      const activeIndex = tasks.findIndex((t) => t.id === activeId);
      const activeTask = tasks[activeIndex];
      if (activeTask) {
        activeTask.status = overId as ColumnId;
        setTasks(arrayMove(tasks, activeIndex, activeIndex));
      }
    }
  }



  return (
    <DndContext
      sensors={sensors}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragOver={onDragOver}
    >
      <ColWrapper>
        <SortableContext items={columnsId}>
          <div className="flex space-x-4 ">
            {/* Render columns dynamically */}
            {columns?.map((col, index) => (
              <TaskColumn
                column={col}
                tasks={tasks.filter((task) => task.status === col.id)}
                tasksIds={tasksIds}
              />
            ))}
          </div>
        </SortableContext>
      </ColWrapper>
      {'document' in window &&
        createPortal(
          <DragOverlay>
            {activeColumn && (
              <TaskColumn
                isOverlay
                column={activeColumn}
                tasks={tasks.filter((task) => task.status === activeColumn.id)} tasksIds={tasksIds} />
            )}
            {activeTask && <TaskCard task={activeTask} isOverlay />}
          </DragOverlay>,
          document.body
        )}
    </DndContext>
  );
};

export default TaskBoard;

