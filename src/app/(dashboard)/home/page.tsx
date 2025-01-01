import React from 'react'
import { TasksList } from '@/components/tasks-list';
import { TasksStatus } from '@/components/task-status';

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <TasksStatus />
          <TasksList />
        </div>
        <div className="space-y-6">
          
        </div>
      </div>
    </div>
  );
}
