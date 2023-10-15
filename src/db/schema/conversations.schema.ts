import { sql } from "drizzle-orm";
import {
  mysqlTable,
  varchar,
  timestamp,
  mysqlEnum,
  index,
} from "drizzle-orm/mysql-core";

export const conversations = mysqlTable(
  "conversations",
  {
    id: varchar("id", { length: 255 }).notNull().primaryKey(),
    name: varchar("name", { length: 255 }),
    created_at: timestamp("created_at", { mode: "date" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updated_at: timestamp("updated_at", { mode: "date" })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    type: mysqlEnum("type", ["ONE_TO_ONE", "GROUP"]).notNull(),
  },
  (table) => {
    return {
      idIdx: index("id_idx").on(table.id),
    };
  }
);
