'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { db } from '@/lib/db';
import { formSchema } from '@/lib/schema';
import { SignupsTable } from '@/lib/db';
import { revalidatePath } from 'next/cache';
import { createSafeActionClient } from 'next-safe-action';

export const action = createSafeActionClient();

// import { EmailTemplate } from '@/components/email-template'

export const createSafeSignup = action(
    formSchema,
    async ({ name, company, title, email }) => {
        const newSignup = await db
            .insert(SignupsTable)
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

        if (newSignup[0].id) return { success: newSignup[0] };
    }
);
