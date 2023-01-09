import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './components/Note'

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNotes, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }
  
  useEffect(hook, [])
  console.log('render', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      content: newNotes,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }

    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  const handleNoteChange = (event) => {
    console.log(event.target.value)
    setNewNote(event.target.value)
  }

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important)

    return (
      <div>
        <h1>Notes</h1>
        <div>
          <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all' }
          </button>
        </div>   
        <ul>
          {notesToShow.map(note => 
            <Note key={note.id} note={note.content} />
          )}
        </ul>
        <form onSubmit={addNote}>
          <input
            value={newNotes}
            onChange={handleNoteChange}
          />
          <button type="submit">save</button>
        </form>
      </div>
    )
  }
export default App
