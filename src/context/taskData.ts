import { Task, Media, Comments, User, Tags, ColumnId } from '@/types/Index';

// Example users
const users: User[] = [
  { id: 'user1', avatar: 'avatar1.png', name: 'Alice' },
  { id: 'user2', avatar: 'avatar2.png', name: 'Bob' },
  { id: 'user3', avatar: 'avatar3.png', name: 'Charlie' }
];

// Example tags
const tags: Tags[] = [
  { id: 'tag1', name: 'Urgent' },
  { id: 'tag2', name: 'Frontend' },
  { id: 'tag3', name: 'Backend' },
];

// Example media (images/files)
const mediaFiles: Media[] = [
  { id: 'media1', name: 'image1.png', url: '/images/image1.png', type: 'image' },
  { id: 'media2', name: 'document.pdf', url: '/files/document.pdf', type: 'file' },
];

// Example comments
const comments: Comments[] = [
  { id: 'comment1', userId: 'user1', content: 'Started working on the task.', createdAt: new Date() },
  { id: 'comment2', userId: 'user2', content: 'Added some new features.', createdAt: new Date() },
  { id: 'comment3', userId: 'user3', content: 'Completed the task and pushed to repo.', createdAt: new Date() },
];

// Function to generate initial tasks
export const generateInitialTasks = (): Task[] => {
  return [
    {
      id: 'task1',
      title: 'Project initiation and planning',
      description: 'Initial planning of the project including goals, timelines, and team assignments.',
      status: 'TODO' as ColumnId,
      tags: [tags[0], tags[1]],  // 'Urgent', 'Frontend'
           // Cover image
      comments: [comments[0]],    // Initial comment
      users: [users[0], users[1]],  // Assigned to Alice and Bob
    },
    {
      id: 'task2',
      title: 'Gather requirements from stakeholders',
      description: 'Collecting requirements and specifications from the project stakeholders.',
      status: 'IN_PROGRESS' as ColumnId,
      tags: [tags[0]],  // 'Urgent'
      files: [mediaFiles[1]],   // PDF document attached
      image: mediaFiles[1],     // Cover image
      comments: [comments[1]],  // Comment by Bob
      users: [users[1], users[2]],  // Assigned to Bob and Charlie
    },
    {
      id: 'task3',
      title: 'Design the project UI',
      description: 'Creating wireframes and design mockups for the project interface.',
      status: 'TODO' as ColumnId,
      tags: [tags[1]],  // 'Frontend'
      files: [mediaFiles[0]],   // Image attached (e.g., wireframe image)
      comments: [comments[2]],  // Comment by Charlie
      users: [users[2]],        // Assigned to Charlie
    },
    {
      id: 'task4',
      title: 'Develop the backend API',
      description: 'Building the server-side API for the project, including authentication and data handling.',
      status: 'IN_PROGRESS' as ColumnId,
      tags: [tags[2]],  // 'Backend'
      files: [mediaFiles[1]],   // PDF documentation attached
      comments: [comments[1], comments[2]],  // Comments by Bob and Charlie
      users: [users[0], users[2]],  // Assigned to Alice and Charlie
    },
    {
      id: 'task5',
      title: 'Testing and QA',
      description: 'Performing unit tests and quality assurance checks on the developed features.',
      status: 'DONE' as ColumnId,
      tags: [tags[0], tags[1]],  // 'Urgent', 'Frontend'
      files: [mediaFiles[0]],   // Test result image attached
      comments: [comments[0], comments[2]],  // Comments by Alice and Charlie
      users: [users[1]],  // Assigned to Bob
    },
  ];
};

export const initialTasks = generateInitialTasks();
