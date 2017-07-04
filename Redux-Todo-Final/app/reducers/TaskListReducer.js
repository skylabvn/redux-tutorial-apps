// State
let appState = {
  data : [
    { title: 'Go to the office', isFinished: true },
    { title: 'Prepare tasks for today', isFinished: false },
    { title: 'Team meeting', isFinished: false },
    { title: 'Commit tasks changed', isFinished: false },
  ]
}

const taskListReducer = (state = appState, action ) => {
  
  let newTaskList = state.data;

  switch(action.type) {
    case 'ADD':
      const newTask = { title: action.taskName, isFinished: false }
      return { ...state, data: [...newTaskList, newTask] }

    case 'FINISH':
      newTaskList[action.atIndex].isFinished = true; 
      return { ...state, data: newTaskList };

    case 'DELETE':
      newTaskList = newTaskList.filter( (item, i) => i !== action.atIndex);
      return { ...state, data: newTaskList };
  
  }
  return state;
}

export default taskListReducer;