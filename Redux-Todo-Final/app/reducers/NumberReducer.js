const numberReducer = (state = { number: 1 }, action) => {

  switch(action.type) {
    case 'ADD_NUMBER':
      return { number : state.number + 1 }

    case 'SUB_NUMBER':
      return { number : state.number - 1 }
  }

  return state;
}

export default numberReducer;