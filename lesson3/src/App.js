import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import MessageList from './components/MessageList';
import ThemeSwitcher from './components/ThemeSwitcher';
import Content from './components/Content';
import TextDisplayForm from './components/TextDisplayForm';

function App() {
  return (
    <div className="App">
      {/* <div>
        <Greeting name="Оля" />
        <Greeting name="Варя" />
        <Greeting name="Симба" />
      </div>
      <Counter />
      <MessageList />
      <ThemeSwitcher /> 
      <ThemeSwitcher /> */}
      <TextDisplayForm />
    </div>
  );
}

export default App;
