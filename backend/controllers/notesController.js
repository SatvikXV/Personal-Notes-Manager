const Note = require("../models/noteModel");

// Get all notes
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Create a new note
const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (err) {
    res.status(400).json({ error: "Invalid data" });
  }
  
};

// Delete a note
const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) return res.status(404).json({ error: "Note not found" });
    res.status(200).json({ message: "Note deleted" });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { getNotes, createNote, deleteNote };
