import { Context, t } from "elysia";
import { prisma } from "../utils/prisma";

export const updateNoteSchema = {
    body: t.Object({
    content: t.String(),
    isDone: t.Boolean()
    })
}

export const updateNote = async ({ params, body }: Context) => {
    const {id} = params;
    const { content, isDone } = body as { content: string, isDone: boolean};
    const updatedNote = await prisma.note.update({
    where: {
        id
    },
    data: {
        content,
        isDone
    }
    })

    return updatedNote;
}