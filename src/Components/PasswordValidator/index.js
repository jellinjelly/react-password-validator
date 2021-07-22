import {useState} from 'react';
import {usePasswordValidation} from "./usePasswordValidation";
import {validatorDescs} from './listOfValidators.json';

const PasswordValidator = ({options}) => {
  const [password, setPassword] = useState("");
  const validators = usePasswordValidation(password, options)

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  // list of options in array format
  const listOfValidators = Object.keys(options)

  //render li for each selected option
  let results = listOfValidators.map(option => {
    return options[option] ? (<li>
    {validatorDescs[option]} {validators[option] ? <span>True</span> : <span>False</span>}
  </li>) : (<></>)
  })

  return (
    <>
      <h1>Password Component</h1>
      <label htmlFor="password">Password</label>
      <input type="password" name="password" onChange={handlePasswordChange}/>
      <ul>
        {results}
      </ul>
    </>
  )
}

export default PasswordValidator