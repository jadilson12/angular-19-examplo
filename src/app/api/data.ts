function randomUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export interface Todo {
  id: string;
  name: string;
}

let data: Todo[] = [
  {
    id: randomUUID(),
    name: 'John Doe',
  },
  {
    id: randomUUID(),
    name: 'Jane Doe',
  },
  {
    id: randomUUID(),
    name: 'Alice',
  },
];

function getTodos(): Promise<Todo[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 200);
  });
}

function addTodo(todo: Todo): Promise<Todo> {
  return new Promise((resolve, reject) => {
    todo.id = randomUUID();
    setTimeout(() => {
      data.push(todo);
      if (todo) {
        resolve(todo);
      } else {
        reject(new Error('Todo not found'));
      }
    }, 200);
  });
}

function updateTodo(Todo: Todo): Promise<Todo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const index = data.findIndex((i) => i.id === Todo.id);
      data[index] = Todo;
      resolve(Todo);
    }, 200);
  });
}

function deleteTodo(id: string): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      data = data.filter((i) => i.id !== id);
      resolve();
    }, 200);
  });
}

function getTodo(id: string): Promise<Todo> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const Todo = data.find((i) => i.id === id);
      if (Todo) {
        resolve(Todo);
      } else {
        reject(new Error('Todo not found'));
      }
    }, 200);
  });
}

export { addTodo, deleteTodo, getTodo, getTodos, updateTodo };
