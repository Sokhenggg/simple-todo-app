import { iTask } from "./types/tasks";

const baseUrl = "http://localhost:3001";

export const getAllTasks = async (): Promise<iTask[]> => {
  const res = await fetch(`${baseUrl}/tasks`, { cache: "no-store" });
  const todos = await res.json();
  return todos;
};

export const addTodo = async (todo: iTask): Promise<iTask> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};

export const editTodo = async (todo: iTask): Promise<iTask> => {
  const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updateTodo = await res.json();
  return updateTodo;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/tasks/${id}`, {
    method: "DELETE",
  });
};
