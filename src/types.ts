export interface Todo {
  id: string;
  title: string;
  text: string;
  done: boolean;
}

export type TodoTextInfo = Pick<Todo, 'text' | 'title'>

export interface Statistics {
  done: number;
  active: number;
}