import { prisma } from "../utils/prisma";

export const getAllNotes = async () => {
    const notes = await prisma.note.findMany();
    return notes;
}