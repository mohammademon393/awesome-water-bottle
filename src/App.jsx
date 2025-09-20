
import { Suspense } from 'react';
import './App.css'
import Bottles from './Component/Bottles/Bottles';

const bottlePromies = fetch('./bottle.json').then(res => res.json());


function App() {

  return (
    <>
      <h1>Awesome water bottle</h1>
      <Suspense fallback={<h3>Bottles are loding...</h3>}>
        <Bottles bottlePromies={bottlePromies}></Bottles>
      </Suspense>
    </>
  );
}

export default App
