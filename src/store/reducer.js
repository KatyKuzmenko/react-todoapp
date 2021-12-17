import {
  TODOS_INIT,
  TODO_ADD,
  TODO_DELETE,
  TODO_TOGGLE,
  TODOS_CLEAR_COMPLETED,
  TODOS_TOGGLE_ALL,
  TODO_EDIT
} from './actionTypes'

export default function todosReducer(state = [], action) {
  switch (action.type) {
    case TODOS_INIT:
      return [...action.options]

    case TODO_ADD:
      return [
        ...state,
        {
          id: action.options.id,
          title: action.options.title,
          iscompleted: false,
        },
      ]

    case TODO_TOGGLE:
      return state.map((todo) => {
        if (todo.id === action.options.id) {
          return { ...todo, iscompleted: action.options.iscompleted }
        }

        return todo
      })

    case TODO_DELETE:
      return state.filter((todo) => action.options.id !== todo.id)

    case TODO_EDIT:
      return state.map((todo) => {
        if (todo.id === action.options.id) {
          return { ...todo, title: action.options.title }
        }

        return todo
      })

    case TODOS_TOGGLE_ALL:
      return state.map((todo) => {
        return { ...todo, iscompleted: action.options.iscompleted }
      })

    case TODOS_CLEAR_COMPLETED:
      return state.filter((todo) => todo.iscompleted === false)

    default:
      return state
  }
}
