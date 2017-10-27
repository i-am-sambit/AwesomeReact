
export const setTaskAction = (task) => {
    console.log('actions');
    console.log(task);
    return {
        type: "SET_ALL_TASK",
        payload: task
    }
};