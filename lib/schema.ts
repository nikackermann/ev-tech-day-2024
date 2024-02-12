import { z } from 'zod';
import {
    pgTable,
    serial,
    text,
    timestamp,
    uniqueIndex,
} from 'drizzle-orm/pg-core';

export const formSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    company: z.string().min(1, 'Company is required'),
    title: z.string().min(1, 'Title is required'),
});

// Create a pgTable that maps to a table in your DB
export const signups = pgTable(
    'signups',
    {
        id: serial('id').primaryKey(),
        name: text('name').notNull(),
        company: text('company').notNull(),
        title: text('title').notNull(),
        email: text('email').notNull(),
        createdAt: timestamp('createdat').defaultNow().notNull(),
        event: text('event').notNull(),
    },
    (signups) => {
        return {
            uniqueIdx: uniqueIndex('unique_idx').on(signups.email),
        };
    }
);

export type Signup = typeof signups.$inferSelect;
