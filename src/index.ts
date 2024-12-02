import { Elysia, t } from "elysia";
import { prisma } from "./utils/prisma";
import {swagger} from "@elysiajs/swagger"

const app = new Elysia()
  .use(swagger({
    path: "/docs"
  }))
  .get("/", async () => {
    const notes = await prisma.note.findMany();
    return notes;
  })
  .post("/", async ({body, set}) => {
    const { content } = body;
    const newNote = await prisma.note.create({
      data: {
        content
      }
    })

    set.status = 201;
    return newNote;
  }, {
    body: t.Object({
      content: t.String()
    })
  }) //create note
  .get("/:id", async ({ params }) => {
    const {id} = params;
    const note = await prisma.note.findFirst({
      where: {
        id
      }
    });

    return note;
  }) //get one note
  .patch("/:id", async ({ params, body }) => {
    const {id} = params;
    const { content, isDone } = body;
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
  }, {
    body: t.Object({
      content: t.String(),
      isDone: t.Boolean()
    })
  }) //update note
  .delete("/:id", async ({params}) => {
    const {id} = params;
    await prisma.note.delete({
      where: {
        id
      }
    })
    return 'note deleted'
  }) //delete note
  .listen(3000);

console.log("NoteBE ran at 3000")
