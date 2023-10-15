ALTER TABLE `conversations` MODIFY COLUMN `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `conversations` MODIFY COLUMN `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP;--> statement-breakpoint
ALTER TABLE `conversation_users` MODIFY COLUMN `joined_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP;