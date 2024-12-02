import { Elysia, t } from "elysia";
import {swagger} from "@elysiajs/swagger"
import { noteRouter } from "./routes/noteRouter";

const app = new Elysia()
  .use(swagger({
    path: "/docs"
  }))
  .use(noteRouter)
  .listen(3000);

console.log("NoteBE ran at 3000")
