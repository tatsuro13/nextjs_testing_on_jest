export interface POST {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface COMMNET {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface TASK {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
