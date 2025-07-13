'use client';

export default function NoteCard({ note, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-5 hover:shadow-2xl transition-all relative">
  <div className="absolute top-2 -left-4 text-sm font-semibold bg-[#2d70fd] text-white rounded-full w-7 h-7 flex items-center justify-center shadow-md">
  {note.number}
</div>

  <h3 className="text-lg font-semibold mb-2 text-gray-900 break-words">{note.title}</h3>
  <p className="text-sm text-gray-700 mb-6 break-words">{note.content}</p>
  <button
    onClick={() => onDelete(note._id)}
    className="absolute bottom-3 right-3 text-xs bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 transition"
  >
    Delete
  </button>
</div>

  );
}