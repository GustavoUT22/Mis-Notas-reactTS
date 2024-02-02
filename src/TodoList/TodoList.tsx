import { useState, useEffect } from "react";
import {
  Container,
  StyledTitle,
  StyledNotes,
  StyledNote,
} from "./TodoList.styles";
import uuid from "react-uuid";
import Textarea from "../Textarea/Textarea";

interface NoteProps {
  id: string;
  content: string;
}

const initialNotes: NoteProps[] = [
  { id: uuid(), content: "Comer 4pm" },
  { id: uuid(), content: "Hacer ejercicio" },
  { id: uuid(), content: "Lavar los trastes" },
  {
    id: uuid(),
    content: "modelar la base de datos modelar la base de datosmod",
  },
];

const STORAGE_KEY = "My notes";

function TodoList() {
  const [notes, setNotes] = useState<NoteProps[]>(() => {
    const storedNotes = localStorage.getItem(STORAGE_KEY);
    return storedNotes ? JSON.parse(storedNotes) : initialNotes;
  });

  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  const addTask = () => {
    if (newNote.trim() !== "") {
      const newTask: NoteProps = {
        id: uuid(),
        content: newNote,
      };
      setNotes((prevTasks) => [...prevTasks, newTask]);
      setNewNote("");
    }
  };

  const deleteTask = (id: string) => {
    setNotes((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <Container>
      <StyledTitle>Mis Notas</StyledTitle>
      <Textarea
        onChange={(e) => setNewNote(e.target.value)}
        value={newNote}
        name="texto"
        placeholder="Write here"
      />
      <button className="button-create" onClick={addTask}>
        Crear
      </button>
      <StyledNotes>
        {notes.map((nota) => (
          <StyledNote key={nota.id}>
            {nota.content}
            <button
              className="button-delete"
              onClick={() => deleteTask(nota.id)}
            >
              Borrar
            </button>
          </StyledNote>
        ))}
      </StyledNotes>
    </Container>
  );
}

export default TodoList;
