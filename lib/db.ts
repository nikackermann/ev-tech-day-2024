import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import {
    pgTable,
    serial,
    text,
    timestamp,
    uniqueIndex,
} from 'drizzle-orm/pg-core';

// Use this object to send drizzle queries to your DB
export const db = drizzle(sql);
// Create a pgTable that maps to a table in your DB
export const SignupsTable = pgTable(
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

export const getExampleTable = async () => {
    const selectResult = await db.select().from(SignupsTable);
    console.log('Results', selectResult);
};
