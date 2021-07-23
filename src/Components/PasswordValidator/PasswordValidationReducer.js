
const PasswordValidationReducer = (state, action) => {
  switch(action.type) {
    case 'useValidation':
      if(state[action.payload]) {
        state[action.payload].isInUse = true;
      }
      return state
    default:
      throw new Error();
  }
}

export default PasswordValidationReducer;