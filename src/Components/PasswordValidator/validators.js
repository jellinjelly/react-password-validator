// each validation must contain all fields
export const initialState = {
  "hasNumber" : {
    "desc" : "Has a Number 0-9",
    "validation" : (password) => /\d/.test(password),
    "isInUse" : false,
  },
  "hasUpperCase" : {
    "desc" : "Has uppercase Letter",
    "validation" : (password) => /[A-Z]/.test(password),
    "isInUse" : false,
  },
  "hasSpecialChar" : {
    "desc" : "Has a special char !@#$%^&*",
    "validation" : (password) => /[!@#$%^&*]/.test(password),
    "isInUse" : false,
  },
  "noConsecutiveLetters" : {
    "desc" : "Has no consecutive letters",
    "validation" : (password) => {
      for(let i = 0; i < password.length; i++) {
        if(password[i].toLowerCase() === (password[i - 1] && password[i-1].toLowerCase()) && (/[a-zA-Z]/).test(password[i])) {
          return false
        }
      }
      return true
    },
    "isInUse" : false,
  }
}
