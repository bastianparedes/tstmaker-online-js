CREATE TABLE `Exercise` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`lastModifiedDate` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`name` text(100) DEFAULT '' NOT NULL,
	`description` text(100) DEFAULT '' NOT NULL,
	`code` text NOT NULL
);
