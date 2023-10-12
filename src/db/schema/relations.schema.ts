import { relations } from "drizzle-orm";
import { users } from "./auth.schema";
import { openai_api_keys } from "./openai.schema";
import { conversations } from "./conversations.schema";
import { conversation_users } from "./conversation_users.schema";

export const usersRelations = relations(users, ({ one, many }) => ({
  openai_api_keys: one(openai_api_keys),
  conversation_users: many(conversation_users),
}));
export const conversationRelations = relations(conversations, ({ many }) => ({
  conversation_users: many(conversation_users),
}));

export const keyRelations = relations(openai_api_keys, ({ one }) => ({
  user: one(users, {
    fields: [openai_api_keys.user_id],
    references: [users.id],
  }),
}));

export const conversationUsersRelations = relations(
  conversation_users,
  ({ one }) => ({
    user: one(users, {
      fields: [conversation_users.user_id],
      references: [users.id],
    }),
    conversation: one(conversations, {
      fields: [conversation_users.conversation_id],
      references: [conversations.id],
    }),
  })
);
