export interface Todo {
  id: string;
  title: string;
  text: string;
  done: boolean;
}

export interface Statistics {
  done: number;
  active: number;
}