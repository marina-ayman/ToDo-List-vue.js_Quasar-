import { uid } from "quasar";

export const updateTask = ({ commit }, payload) => {
  console.log("update");
  console.log("payload: ", payload.updates.completed);

  commit("update", payload);
};

export const deleteTask = ({ commit }, id) => {
  commit("DELETE_TASK", id);
};

export const addTask = ({ commit }, task) => {
  let taskId = uid();
  let payload = {
    id: taskId,
    task: task,
  };
  commit("ADD_TASK", payload);
};
