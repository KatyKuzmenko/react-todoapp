import {
  TODOS_INIT,
  TODO_ADD,
  TODO_DELETE,
  TODO_TOGGLE,
  TODOS_CLEAR_COMPLETED,
  TODOS_TOGGLE_ALL,
  TODO_EDIT
} from './actionTypes'

export const initState = (todos) => ({
  type: TODOS_INIT,
  options: todos,
})

export const addTodo = (id, title) => ({
  type: TODO_ADD,
  options: { id, title },
})

export const toggleTodo = (id, iscompleted) => ({
  type: TODO_TOGGLE,
  options: { id, iscompleted },
})

export const removeTodo = (id) => ({
  type: TODO_DELETE,
  options: { id },
})

export const toggleAll = (iscompleted) => ({
  type: TODOS_TOGGLE_ALL,
  options: { iscompleted },
})

export const editTitle = (id, title) => ({
  type: TODO_EDIT,
  options: { id, title },
})

export const clearTodos = () => ({
  type: TODOS_CLEAR_COMPLETED,
})
