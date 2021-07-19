import './App.scss'
import { FixedNav, MainBody } from './components'

function App() {
  return (
    <div className="App">
      <div className="homepage_container">
        <FixedNav />
        <MainBody />
      </div>
    </div>
  )
}

export default App
