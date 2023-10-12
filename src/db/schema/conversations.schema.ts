import {
  mysqlTable,
  varchar,
  timestamp,
  mysqlEnum,
} from "drizzle-orm/mysql-core";

export const conversations = mysqlTable("conversations", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  name: varchar("name", { length: 255 }),
  created_at: timestamp("created_at", { mode: "date" }).notNull().defaultNow(),
  updated_at: timestamp("updated_at", { mode: "date" }).notNull().defaultNow(),
  type: mysqlEnum("type", ["ONE_TO_ONE", "GROUP"]).notNull(),
});
