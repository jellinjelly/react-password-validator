import { useState, useReducer, useEffect } from 'react';
import PasswordValidationReducer from "./PasswordValidationReducer";
import { initialState } from "./validators";
import { ValidatorIcon } from './ValidatorIcon';
import "./style.css";

const PasswordValidator = ({options}) => {

  const [state, dispatch] = useReducer(PasswordValidationReducer, initialState);

  const [password, setPassword] = useState("");
  const [selectedValidations, setSelectedValidations] = useState({});
  const [currentValidators,setCurrentValidators] = useState([])

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  // calls dispatch to change isInUse to true and set a list of selected validations
  useEffect(() => {
    options.forEach(option => {
      dispatch({type: 'useValidation', payload: option})
    })
    let newState = {}
    Object.keys(state).forEach(key => {
      if(state[key].isInUse) {
        newState[key] = state[key]
      }
    })
    setSelectedValidations(newState)
  }, [])

  //render li for each selected option and rerender every pw change
  useEffect(() => {
    if (Object.keys(selectedValidations).length){
      let renderView = options.map(option => {
        if(selectedValidations[option]) {
          return (<li key={option} > <ValidatorIcon isValidated={selectedValidations[option].validation(password)}/>
          {selectedValidations[option].desc}
        </li>)
        }
        return <div key={option}></div>
      })
      setCurrentValidators(renderView);
    }
  }, [password, selectedValidations])

  return (
    <div className="pwv">
      <h1>Password Component</h1>
      <div className="container">
        <label htmlFor="password">Password</label>
        <input id="password" type="password" name="password" onChange={handlePasswordChange}/>
        <ul>
          {currentValidators}
        </ul>
      </div>
    </div>
  )
}

export default PasswordValidator