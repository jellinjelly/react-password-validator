import PasswordValidator from './Components/PasswordValidator'
import './App.css';

function App() {
  const passwordReqs = {
    hasNumber: true,
    hasSpecialChar: true,
    hasUpperCase: true,
  }

  return (
    <div className="App">
      <header className="App-header">
        <PasswordValidator options={passwordReqs}/>
      </header>
    </div>
  );
}

export default App;
