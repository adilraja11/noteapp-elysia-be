import { Elysia, t } from "elysia"
import { getAllNotes } from "../controllers/getAllNotes";
import { createNote, createNoteSchema } from "../controllers/createNote";
import { getSingleNote } from "../controllers/getSingleNote";
import { updateNote, updateNoteSchema } from "../controllers/updateNote";
import { deleteNote } from "../controllers/deleteNote";

export const noteRouter = new Elysia()
    .get("/", getAllNotes)
    .post("/", createNote, createNoteSchema) //create note
    .get("/:id", getSingleNote) //get one note
    .patch("/:id", updateNote, updateNoteSchema) //update note
    .delete("/:id", deleteNote) //delete note