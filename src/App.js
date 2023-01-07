import { useState } from 'react'
import Note from './components/Note'

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const[newNotes,setNewNote] = useState('a new note..')

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

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note.content} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value = {newNotes}
        onChange = {handleNoteChange}/>
        <button type="submit">save</button>
      </form>   
    </div>
  )
}
export default App
