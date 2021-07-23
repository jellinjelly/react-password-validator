export const ValidatorIcon = ({isValidated}) => {
  // receive prop of whether validation is successful or not, to change icon color and 'x' or 'check mark'
  return (
    <div className={`icon-circle ${isValidated ? 'success' : '' }`}>
      {isValidated ? <div>&#x2713;</div> : <div>X</div>}
    </div>
  )
}

