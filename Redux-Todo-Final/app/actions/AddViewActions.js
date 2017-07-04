// Action
const addTask = (name) => {
  return {
    type: 'ADD',
    taskName: name
  }
}

export default addTask;