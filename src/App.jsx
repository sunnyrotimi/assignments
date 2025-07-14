import React from 'react'
import Counter from './Components/Counter'
import Students from './Components/Students'

const App = () => {


   const students = [
    { sn: 1, name: 'Alice Johnson', age: 21, course: 'React' },
    { sn: 2, name: 'Bob Smith', age: 22, course: 'Node.js' },
    { sn: 3, name: 'Charlie Brown', age: 23, course: 'Python' },
    { sn: 4, name: 'Diana Prince', age: 20, course: 'JavaScript' },
    { sn: 5, name: 'Ethan Hunt', age: 24, course: 'DevOps' },
  ];



  return (
    <div>
      <Counter />
      <Students students={students}/>
    </div>
  )
}

export default App
