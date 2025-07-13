'use client';

import { useEffect, useState } from 'react';
import NoteCard from '../components/NoteCard';
import AddNoteForm from '../components/AddNoteForm';

export default function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/notes')
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  const handleAddNote = (newNote) => {
    setNotes([newNote, ...notes]);
  };

  const handleDeleteNote = async (id) => {
    await fetch(`http://localhost:5000/api/notes/${id}`, { method: 'DELETE' });
    setNotes(notes.filter((note) => note._id !== id));
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#2d70fd] to-[#163e92] text-[#001747] py-12 px-6">
  <div className="max-w-5xl mx-auto">
    <h1 className="text-4xl font-bold text-center text-white mb-10 tracking-wide">📒 Personal Notes</h1>

        <AddNoteForm onAdd={handleAddNote} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {notes.map((note, index) => (
            <NoteCard
              key={note._id}
              note={{ ...note, number: index + 1 }}
              onDelete={handleDeleteNote}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
