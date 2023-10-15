CREATE TABLE `accounts` (
	`userId` varchar(255) NOT NULL,
	`type` varchar(255) NOT NULL,
	`provider` varchar(255) NOT NULL,
	`providerAccountId` varchar(255) NOT NULL,
	`refresh_token` varchar(255),
	`refresh_token_expires_in` int,
	`access_token` varchar(255),
	`expires_at` int,
	`token_type` varchar(255),
	`scope` varchar(255),
	`id_token` text,
	`session_state` text,
	CONSTRAINT `accounts_provider_providerAccountId` PRIMARY KEY(`provider`,`providerAccountId`)
);
--> statement-breakpoint
CREATE TABLE `sessions` (
	`sessionToken` varchar(255) NOT NULL,
	`userId` varchar(255) NOT NULL,
	`expires` timestamp NOT NULL,
	CONSTRAINT `sessions_sessionToken` PRIMARY KEY(`sessionToken`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` varchar(255) NOT NULL,
	`name` varchar(255),
	`email` varchar(255) NOT NULL,
	`emailVerified` timestamp,
	`image` varchar(255),
	CONSTRAINT `users_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `verificationToken` (
	`identifier` varchar(255) NOT NULL,
	`token` varchar(255) NOT NULL,
	`expires` timestamp NOT NULL,
	CONSTRAINT `verificationToken_identifier_token` PRIMARY KEY(`identifier`,`token`)
);
--> statement-breakpoint
CREATE TABLE `conversations` (
	`id` varchar(255) NOT NULL,
	`name` varchar(255),
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	`type` enum('ONE_TO_ONE','GROUP') NOT NULL,
	CONSTRAINT `conversations_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `conversation_users` (
	`conversation_id` varchar(255) NOT NULL,
	`user_id` varchar(255) NOT NULL,
	`role` enum('PENDING','MEMBER','ADMIN') NOT NULL DEFAULT 'PENDING',
	`joined_at` timestamp NOT NULL DEFAULT (now()),
	`left_at` timestamp,
	CONSTRAINT `conversation_users_conversation_id` PRIMARY KEY(`conversation_id`)
);
--> statement-breakpoint
CREATE TABLE `openai_api_keys` (
	`user_id` varchar(255) NOT NULL,
	`api_key` varchar(255) NOT NULL,
	CONSTRAINT `openai_api_keys_user_id` PRIMARY KEY(`user_id`)
);
--> statement-breakpoint
CREATE INDEX `id_idx` ON `users` (`id`);--> statement-breakpoint
CREATE INDEX `email_idx` ON `users` (`email`);--> statement-breakpoint
CREATE INDEX `id_idx` ON `conversations` (`id`);--> statement-breakpoint
CREATE INDEX `conversation_id_idx` ON `conversation_users` (`conversation_id`);--> statement-breakpoint
CREATE INDEX `user_id_idx` ON `conversation_users` (`user_id`);--> statement-breakpoint
CREATE INDEX `user_id_idx` ON `openai_api_keys` (`user_id`);