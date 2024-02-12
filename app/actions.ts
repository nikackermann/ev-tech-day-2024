'use server';

import { db } from '@/lib/db';
import { formSchema } from '@/lib/schema';
import { signups, Signup } from '@/lib/schema';
import { revalidatePath } from 'next/cache';
import { createSafeActionClient } from 'next-safe-action';
import { Resend } from 'resend';
import EmailTemplate from '@/emails';

const resend = new Resend(process.env.RESEND_API_KEY);

export const action = createSafeActionClient();

export const createSafeSignup = action(
    formSchema,
    async ({ name, company, title, email }) => {
        const newSignup = await db
            .insert(signups)
            .values({
                name,
                company,
                title,
                email,
                createdAt: new Date(),
                event: 'ev-tech-day',
            })
            .returning();

        revalidatePath('/');

        if (!newSignup) return { error: 'Could not create new signup' };

        if (newSignup[0].id) {
            resend.emails.send({
                from: 'EV Tech Day 2024 <event@updates.wafios.online>',
                to: email,
                subject: 'Welcome to EV Tech Day 2024 - Presented by WAFIOS',
                react: EmailTemplate({
                    name,
                }) as React.ReactElement,
            });

            return { success: newSignup[0] };
        }
    }
);

export const fetchSignups = async () => {
    const data: Signup[] = await db.select().from(signups);
    revalidatePath('/signups');
    return data;
};
