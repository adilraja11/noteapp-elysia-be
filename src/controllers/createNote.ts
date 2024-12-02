import { Context, t } from "elysia";
import { prisma } from "../utils/prisma";

export const createNoteSchema = {
    body: t.Object({
    content: t.String()
    })
}

export const createNote = async ({body, set}: Context) => {
    const { content } = body as { content: string };
    const newNote = await prisma.note.create({
    data: {
        content
    }
    })

    set.status = 201;
    return newNote;
}