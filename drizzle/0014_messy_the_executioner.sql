ALTER TABLE "course" ADD COLUMN "level" text DEFAULT 'All Levels' NOT NULL;--> statement-breakpoint
ALTER TABLE "course" ADD COLUMN "portfolio_stats" json;--> statement-breakpoint
ALTER TABLE "course" ADD COLUMN "upcoming_cohort" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "phone" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "city" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "student_type" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "preferred_track" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "college_name" text;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "enrollment_message" text;