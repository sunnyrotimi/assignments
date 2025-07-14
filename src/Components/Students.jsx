import React from 'react'

const Students = (props) => {
  return (    
       <div className='table'><h3>Task2: Display Student Data in a Table Using Props</h3>
        <table style={{ border: '1px solid #ddd'}} border={1}>
      <thead>
        <tr>        
          <th>Sn</th>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
        </tr>
      </thead>
      <tbody>
        {props.students.map((student, index) => (
          <tr key={index}>
            <td>{student.sn}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.course}</td>
          </tr>
        ))}
      </tbody>
    </table></div>
    
  )
}

export default Students