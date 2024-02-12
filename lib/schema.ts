import { z } from 'zod';

export const formSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    company: z.string().min(1, 'Company is required'),
    title: z.string().min(1, 'Title is required'),
});

export const signupSchema = z.object({});
