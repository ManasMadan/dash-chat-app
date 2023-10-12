ALTER TABLE `conversation_users` MODIFY COLUMN `joined_at` timestamp NOT NULL DEFAULT (now());--> statement-breakpoint
ALTER TABLE `conversation_users` ADD `left_at` timestamp;