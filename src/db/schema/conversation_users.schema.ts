import { sql } from "drizzle-orm";
import {
  mysqlTable,
  varchar,
  timestamp,
  mysqlEnum,
  index,
} from "drizzle-orm/mysql-core";

export const conversation_users = mysqlTable(
  "conversation_users",
  {
    conversation_id: varchar("conversation_id", { length: 255 })
      .notNull()
      .primaryKey(),
    user_id: varchar("user_id", { length: 255 }).notNull().primaryKey(),
    role: mysqlEnum("role", ["PENDING", "MEMBER", "ADMIN"])
      .notNull()
      .default("PENDING"),
    joined_at: timestamp("joined_at", { mode: "date" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    left_at: timestamp("left_at", { mode: "date" }),
    last_read: timestamp("last_read", { mode: "date" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (table) => {
    return {
      conversationidIdx: index("conversation_id_idx").on(table.conversation_id),
      useridIdx: index("user_id_idx").on(table.user_id),
    };
  }
);
