import ControlledComponent1 from './components/ControlledComponent1'
import ControlledComponent2 from './components/ControlledComponent2'
import UncontrolledComponent from './components/UncontrolledComponent'
import './App.css'

function App() {
  return (
    <div className='App'>
      <ControlledComponent1 />
      <ControlledComponent2 />
      <UncontrolledComponent />
    </div>
  )
}

export default App