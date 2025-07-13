'use client';
import { useState } from 'react';

export default function AddNoteForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const res = await fetch('http://localhost:5000/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content }),
    });

    const data = await res.json();
    onAdd(data);
    setTitle('');
    setContent('');
  };

  return (
    <form
  onSubmit={handleSubmit}
  className="bg-white/90 shadow-xl rounded-2xl p-6 space-y-4"
>
  <input
    type="text"
    placeholder="Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
  />
  <textarea
    placeholder="Write your note..."
    value={content}
    onChange={(e) => setContent(e.target.value)}
    rows={4}
    className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
  ></textarea>
  <button
    type="submit"
    className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-blue-700 transition-all shadow-md"
  >
    ➕ Add Note
  </button>
</form>

  );
}
