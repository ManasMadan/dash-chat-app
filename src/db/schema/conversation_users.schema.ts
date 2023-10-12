import {
  mysqlTable,
  varchar,
  timestamp,
  mysqlEnum,
} from "drizzle-orm/mysql-core";

export const conversation_users = mysqlTable("conversation_users", {
  conversation_id: varchar("conversation_id", { length: 255 })
    .notNull()
    .primaryKey(),
  user_id: varchar("user_id", { length: 255 }).notNull().primaryKey(),
  role: mysqlEnum("role", ["PENDING", "MEMBER", "ADMIN"])
    .notNull()
    .default("PENDING"),
  joined_at: timestamp("joined_at", { mode: "date" }).notNull().defaultNow(),
  left_at: timestamp("left_at", { mode: "date" }),
});
