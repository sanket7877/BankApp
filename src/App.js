import './App.css';
import { Button } from 'antd';
import SignUpForm from './signup/signupform';

function App() {
  return (
    <div className="App">
      <SignUpForm/>
      <Button type="primary">Primary Button</Button>
    </div>
  );
}

export default App;
