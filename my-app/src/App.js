import css from './App.module.css';
import Sidebar from './components/Sidebar';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
import NavBarSimple from './components/NavbarSimple';

function App() {
  return (
    <div className={css.App}>
      <Sidebar />
      <br></br>
      <StatefulGreeting greeting="I'm a stateful class component!"/>
      <StatefulGreetingWithPrevState />
      <NavBarSimple />
    </div>
  );
}

export default App;