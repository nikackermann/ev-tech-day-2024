import { z } from 'zod'
import {
    pgTable,
    serial,
    text,
    timestamp,
    uniqueIndex
} from 'drizzle-orm/pg-core'

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
)

export const formSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    company: z.string().min(1, 'Company is required'),
    title: z.string().min(1, 'Title is required'),
    phone: z.string().regex(phoneRegex, 'Phone number required')
})

// Create a pgTable that maps to a table in your DB
export const signups = pgTable(
    'signups',
    {
        id: serial('id').primaryKey(),
        name: text('name').notNull(),
        company: text('company').notNull(),
        title: text('title').notNull(),
        email: text('email').notNull(),
        phone: text('phone').notNull(),
        createdAt: timestamp('createdat').defaultNow().notNull(),
        event: text('event').notNull()
    },
    (signups) => {
        return {
            uniqueIdx: uniqueIndex('unique_idx').on(signups.email)
        }
    }
)

// infer type from Drizzle pgTable
export type Signup = typeof signups.$inferSelect
