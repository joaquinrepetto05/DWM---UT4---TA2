import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <Card>
        <h2 className='cardTitle'>Task 1</h2>
        <p className='cardContent'>This is a description of task 1</p>
        <p className='cardContent'>Assigned to: Jhon Duran</p>
        <p className='cardContent'>Start Date: 2021-10-10</p>
        <p className='cardContent'>End Date: 2021-10-24</p>
      </Card>
    </>
  )
}

export default App