CREATE TABLE `category` (
	`id` varchar(50) NOT NULL,
	`name` varchar(50),
	`talent` varchar(50) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp,
	`deleted_at` timestamp,
	CONSTRAINT `category_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `talent` (
	`id` varchar(50) NOT NULL,
	`name` varchar(50),
	`email` varchar(50),
	`status` enum('ACTIVELY_SEARCHING','OPEN_FOR_NEGOTIATION','CLOSED'),
	`skills` json,
	`experience` json,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp,
	`deleted_at` timestamp,
	CONSTRAINT `talent_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `category` ADD CONSTRAINT `category_talent_talent_id_fk` FOREIGN KEY (`talent`) REFERENCES `talent`(`id`) ON DELETE no action ON UPDATE no action;