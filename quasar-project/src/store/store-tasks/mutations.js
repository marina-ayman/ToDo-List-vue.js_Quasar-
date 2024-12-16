export const update = (state, payload) => {
  // state.tasks[payload.id].completed = payload.updates.completed;

  Object.assign(state.tasks[payload.id], payload.updates);

  console.log(payload.updates.completed);
  console.log(state.tasks);
};

export const DELETE_TASK = (state, id) => {
  delete state.tasks[id];
  console.log("delete", state.tasks);
};

export const ADD_TASK = (state, payload) => {
  // set(state.tasks, payload.id, payload.task);
  state.tasks[payload.id] = payload.task;
};
