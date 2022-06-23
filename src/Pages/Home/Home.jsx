import React, { useState} from 'react'
import './style.css'
import { CardPresence } from '../../Components/Card-presence'
import { CardAbsence } from '../../Components/Card-absence'

export function Home() {

  const [studentName, setStudentName] = useState()
  const [presentStudents, setPresentStudents] = useState([])
  const [absentStudents, setAbsentStudents] = useState([])

  function handleAddPresentStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }
    
    setPresentStudents(prevState => [...prevState, newStudent])
  }

  function handleAddAbsentStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleDateString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    }
    
    setAbsentStudents(prevState => [...prevState, newStudent])
  }
  
  return (
    <div className="Home">
      {/* <header>
        <div className="perfil-informacion">
        <p>Lucas</p>
        <img src="https://github.com/Lucas-beserra.png" alt="foto de perfil"></img>
        </div>
      </header> */}
      <h1>Lista de presença:</h1>

      <input 
        type="text" 
        placeholder="Nome do aluno"
        onChange={e => setStudentName(e.target.value)}
        ></input>
      <div className="buttons">
        <button 
          type="button"
          id="button-presence"
          onClick={handleAddPresentStudent}
          >Presente</button>

        <hr></hr>

        <button 
          type="button"
          id="button-absence"
          onClick={handleAddAbsentStudent}
          >Ausente</button>
      </div>

      <h3>Presentes:</h3>

      {presentStudents.map(student => (
        <CardPresence 
          key={student.time} 
          user={student.name} 
          dateTime={student.time}/>
          )
        )
      }

      <h3>Ausentes:</h3>

      {absentStudents.map(student => (
        <CardAbsence 
          key={student.time} 
          user={student.name} 
          dateTime={student.time}/>
          )
        )
      }

    </div>
  )
}

