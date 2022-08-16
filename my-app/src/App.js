import css from './App.module.css';
// import LifeCyclesCDU from './components/LifeCyclesCDU';
// import Sidebar from './components/Sidebar';
// import StatefulGreeting from './components/StatefulGreeting';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';
// import NavBarSimple from './components/NavbarSimple';
// import Content from './components/Content';
// import LifeCyclesCDM from "./components/LifeCyclesCDM";
// import LifeCyclesCDU from "./components/LifeCyclesCDU";
import LifeCyclesCWU from "./components/LifeCyclesCWU";


function App() {
  return (
    <div className={css.App}>
      {/* <Sidebar />
      <StatefulGreeting greeting="I'm a stateful class component!"/>
      <StatefulGreetingWithPrevState />
      <NavBarSimple /> */}
      {/* <Content />
      <Clock /> */}
      {/* <LifeCyclesCDM /> */}
      {/* <LifeCyclesCDU /> */}
      <LifeCyclesCWU />
    </div>
  );
}

export default App;