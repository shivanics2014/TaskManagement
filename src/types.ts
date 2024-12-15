export interface Task {
    id: string;
    title: string;
    completed: boolean;
  }
  
  export interface AuthState {
    user: string | null;
  }
  
  export interface TaskState {
    tasks: Task[];
  }
  