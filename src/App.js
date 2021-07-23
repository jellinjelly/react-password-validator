import PasswordValidator from './Components/PasswordValidator'

function App() {
  const passwordReqs = [
    "hasNumber",
    "hasSpecialChar",
    "hasUpperCase",
    "noConsecutiveLetters"
  ]

  return (
    <div className="App">
      <section>
        <PasswordValidator options={passwordReqs}/>
      </section>
    </div>
  );
}

export default App;
