import { integer, text, pgTable, uuid } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: uuid("id").defaultRandom().notNull().primaryKey(),
  content: text("content"),
  done: integer("done"),
});
