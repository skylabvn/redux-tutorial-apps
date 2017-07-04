// Actions

const addNumber = (addVal) => {
  return {
    type: 'ADD_NUMBER',
    value: addVal
  }
}

export const subNumber = (subVal) => {
  return {
    type: 'SUB_NUMBER',
    value: subVal
  }
}

export default addNumber;