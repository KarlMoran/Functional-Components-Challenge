import css from './App.module.css';
// import Sidebar from './components/Sidebar';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
// import NavBarSimple from './components/NavbarSimple';
import Content from './components/Content';

function App() {
  return (
    <div className={css.App}>
      {/* <Sidebar />
      <StatefulGreeting greeting="I'm a stateful class component!"/>
      <StatefulGreetingWithPrevState />
      <NavBarSimple /> */}
      <Content />
    </div>
  );
}

export default App;