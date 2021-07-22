import { useState, useEffect } from "react";

export const usePasswordValidation = (
  password = "",
  options
) => {
    const [hasNumber, setHasNumber] = useState(null);
    const [hasUpperCase, setHasUpperCase] = useState(null);
    const [hasSpecialChar, setHasSpecialChar] = useState(null);

    const selectedVal = {
      hasUpperCase,
      hasSpecialChar,
      hasNumber
    }

    // list of options in array format
    const listOfValidators = Object.keys(options)

    let results = {}

    useEffect(() => {
      //regex for validating
      setHasUpperCase(/[A-Z]/.test(password));
      setHasNumber(/\d/.test(password));
      setHasSpecialChar(/[!@#$%^&*]/.test(password));

    }, [password]);

    //if option selected, return validated option
    listOfValidators.forEach(val => {
      if(options[val]) {
        results[val] = selectedVal[val]
      }
    })

    return results;
  };