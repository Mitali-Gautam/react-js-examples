import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCounterPrevious from './components/HookCounterPrevious'
import HookCounterObjects from './components/HookCounterObjects'
import HookcounterArrays from './components/HookcounterArrays'
import CountryList from './components/CountryList'
import StudentList from './components/StudentList'
import StudentsPercentage from './components/StudentsPercentage'

import Gallery from './components/CardComponentChildren'

function App() {
  return (
    <div className="App">
      {/*<Greet name="mitali" lastName="gautam">
        <p>this is paragraph</p>
      </Greet>
      <Greet name="krisha" lastName="gautam">
        <button>Check</button>
      </Greet>
      <Greet name="abhihek" lastName="gautam"/>
      <Welcome name="mitali" lastName="gautam">
        <p>this is paragraph</p>
      </Welcome>
      {/*<Hello />*/}
      {/*<Avatar size={100} person = {{firstName: 'mitali', lastName: 'gautam',imageId: 'YfeOqp2'}}/>
      <Avatar size={80} person = {{firstName: 'mitali', lastName: 'gautam',imageId: 'YfeOqp2'}}/>
  <Avatar size={30} person = {{firstName: 'mitali', lastName: 'gautam',imageId: 'YfeOqp2'}}/> */}
  <Gallery/>
    </div>
  );
}

export default App;
