
  export const tasks = (state) => {
    return state.tasks
  }

  export const completedTasks = (state) => {
    return state.tasks.filter((task) => task.completed);
  };
  
  export const pendingTasks = (state) => {
    return state.tasks.filter((task) => !task.completed);
  };