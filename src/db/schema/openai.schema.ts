import { index, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const openai_api_keys = mysqlTable(
  "openai_api_keys",
  {
    user_id: varchar("user_id", { length: 255 }).notNull().primaryKey(),
    api_key: varchar("api_key", { length: 255 }).notNull(),
  },
  (table) => {
    return {
      useridIdx: index("user_id_idx").on(table.user_id),
    };
  }
);
