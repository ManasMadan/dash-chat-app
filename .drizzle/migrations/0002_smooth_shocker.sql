ALTER TABLE `conversations` MODIFY COLUMN `created_at` timestamp DEFAULT (now());--> statement-breakpoint
ALTER TABLE `conversations` MODIFY COLUMN `updated_at` timestamp DEFAULT (now());