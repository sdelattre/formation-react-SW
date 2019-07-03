const initialState = {
  list: [
    {id: 0, name: "Learn React", done: false},
    {id: 1, name: "Learn CSS", done: true},
    {id: 2, name: "Web development", done: true}
  ]
};

const tasks = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_TASK_STATE':
        let newList = state.list.map(task =>
          task.id === action.id ? { ...task, done: !task.done } : task
        );
        return {
          ...state, list: newList
        }
      default:
        return state
    }
  }

export default tasks