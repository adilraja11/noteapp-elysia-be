import { prisma } from "../utils/prisma";
import { Context } from "elysia";

export const getSingleNote = async ({ params }: Context) => {
    const {id} = params;
    const note = await prisma.note.findFirst({
    where: {
        id
    }
    });

    return note;
}