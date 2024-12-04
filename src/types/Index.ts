
// Column-related types
export type ColumnId = 'TODO' | 'IN_PROGRESS' | 'DONE';

export type Column = {
  id: ColumnId;
  title: string;
};

// Tag type
export type Tags = {
  id: string;
  name: string; 
};

// File and media-related types
export type Files = {
  id: string;
  name: string; 
  url: string; 
};

export type Media = {
  id: string;  // Unique identifier
  name: string; // File or image name
  url: string; // File or image URL
  type: 'image' | 'file'; // Type of media
};

// Comment type
export type Comments = {
  id: string;
  userId: string; 
  content: string; 
  createdAt: Date; 
};

// User type
export type User = {
  id: string; 
  avatar: string;
  name: string; 
};

// Task type
export type Task = {
  id: string;  // Unique identifier for the task
  title: string;  // Title of the task
  description: string;  // Optional detailed description of the task
  status: ColumnId;  // Column ID indicating the task's status
  tags: Tags[];  // List of associated tags
  files?: Media[];  // Array of media files attached to the task
  image?: Media;  // Optional cover image for the task
  comments?: Comments[];  // Array of comments on the task
  users?: User[];  // List of users assigned to the task
};

  
  