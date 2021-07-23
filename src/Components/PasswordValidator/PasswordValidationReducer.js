
const PasswordValidationReducer = (state, action) => {
  switch(action.type) {
    case 'useValidation':
      state[action.payload].isInUse = true;
      return state
    default:
      throw new Error();
  }
}

export default PasswordValidationReducer;