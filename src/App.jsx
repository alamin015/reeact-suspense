import { Suspense, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch('https://toy-server-pearl.vercel.app/specific_toy/?email=alaminsf40@gmail.com&order=1')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])

  return (
    <>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, nobis.</h3>
      <Suspense fallback="Loading.......................">
        {
          <><h2>hello world how are you</h2>
          {user.length}
          </>
        }
      </Suspense>
    </>
  )
}

export default App
