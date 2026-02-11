"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { submitWaitlist } from "@/app/actions"

export function Waitlist() {
    const [loading, setLoading] = useState(false)
    const [submitted, setSubmitted] = useState(false)
    const [message, setMessage] = useState("")

    const handleSubmit = async (formData: FormData) => {
        setLoading(true)
        setMessage("")

        try {
            const result = await submitWaitlist(formData)

            if (result.success) {
                setSubmitted(true)
            } else {
                setMessage(result.message || "Something went wrong.")
            }
        } catch (error) {
            setMessage("An unexpected error occurred. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <section id="waitlist" className="py-24 bg-charcoal text-white relative overflow-hidden">
            {/* Abstract Background */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute right-0 top-0 w-96 h-96 bg-bamboo rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute left-0 bottom-0 w-64 h-64 bg-bamboo rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="container px-4 mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Join the Club
                    </h2>
                    <p className="text-gray-400 mb-8 text-lg">
                        Be the first to experience Bambusa. Get exclusive early access and a special launch discount.
                    </p>

                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
                        >
                            <div className="text-bamboo text-xl font-bold mb-2">You're on the list! 🎉</div>
                            <p className="text-gray-300">Keep an eye on your inbox. We'll be in touch soon.</p>
                        </motion.div>
                    ) : (
                        <form action={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                required
                                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-bamboo transition-all"
                            />
                            <Button
                                type="submit"
                                size="lg"
                                className="h-auto py-4 px-8 text-base bg-bamboo hover:bg-bamboo/90 text-white rounded-xl font-bold"
                                disabled={loading}
                            >
                                {loading ? <Loader2 className="animate-spin" /> : "Join Waitlist"}
                            </Button>
                        </form>
                    )}

                    {message && !submitted && (
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="mt-4 text-red-400 text-sm bg-red-900/20 p-2 rounded-lg inline-block"
                        >
                            {message}
                        </motion.p>
                    )}

                    <p className="mt-6 text-sm text-gray-500">
                        No spam. Unsubscribe anytime.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
