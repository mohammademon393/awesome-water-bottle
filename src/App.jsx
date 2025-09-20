
import './App.css'

const bottlePromies = fetch('./bottle.json').then(res => res.json()).then(data => console.log(data))
console.log(bottlePromies);


function App() {

  return (
    <>
      <h1>Awesome water bottle</h1>
      
    </>
  )
}

export default App
