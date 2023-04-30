import logo from './sunshine_logo_1.png';
import './App.css';
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        <EmployeeForm/>
      </p>
    <a
    className="App-link"
    href="https://app.workato.com/?fid=projects"
    target="_blank"
    rel="noopener noreferrer">
    Powered by Workato
    </a>
    </header>
    </div>
  );
}

export default App;