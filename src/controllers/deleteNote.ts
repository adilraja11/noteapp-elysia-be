import { Context } from "elysia";
import { prisma } from "../utils/prisma";
 
 export const deleteNote = async ({params}: Context) => {
    const {id} = params;
    await prisma.note.delete({
    where: {
        id
    }
    })
    return 'note deleted'
}