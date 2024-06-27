CREATE TABLE `product` (
	`status` text,
	`description` text,
	`title` text,
	`handle` text,
	`tags` text,
	`images` text,
	`id` text PRIMARY KEY NOT NULL,
	`metadata` text,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `variant` (
	`price` real,
	`weight` real,
	`height` real,
	`length` real,
	`width` real,
	`hs_code` text,
	`quantity` integer,
	`country_of_origin` text,
	`size_unit` text,
	`weight_unit` text,
	`description` text,
	`title` text,
	`image` text,
	`product_id` text NOT NULL,
	`id` text PRIMARY KEY NOT NULL,
	`metadata` text,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	`updated_at` text DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	FOREIGN KEY (`product_id`) REFERENCES `product`(`id`) ON UPDATE no action ON DELETE cascade
);
