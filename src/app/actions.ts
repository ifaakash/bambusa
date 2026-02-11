'use server'

import pool from '@/lib/db';
import { z } from 'zod';

const schema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
});

export async function submitWaitlist(formData: FormData) {
    const email = formData.get('email');

    const validatedFields = schema.safeParse({ email });

    if (!validatedFields.success) {
        return {
            success: false,
            message: validatedFields.error.flatten().fieldErrors.email?.[0] || "Invalid email",
        };
    }

    try {
        const client = await pool.connect();
        try {
            await client.query(
                'INSERT INTO waitlist (email) VALUES ($1)',
                [validatedFields.data.email]
            );
            return { success: true, message: "You're on the list! 🎉" };
        } finally {
            client.release();
        }
    } catch (error: any) {
        if (error.code === '23505') { // Unique violation
            return { success: true, message: "You're already on the list!" }; // Treat as success to not leak info/confuse user
        }
        console.error('Database error:', error);
        return { success: false, message: "Something went wrong. Please try again." };
    }
}
