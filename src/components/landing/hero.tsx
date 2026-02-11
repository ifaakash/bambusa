"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, BadgeCheck, IndianRupee, Truck } from "lucide-react"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            <div className="container px-4 mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    <div className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-600 shadow-sm hover:bg-gray-50 transition-colors">
                        <span className="flex h-2 w-2 rounded-full bg-bamboo mr-2 animate-pulse"></span>
                        Coming Soon to India
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-charcoal text-balance">
                        The Most Comfortable Socks <br className="hidden md:block" /> You'll Ever Wear.
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto text-balance leading-relaxed">
                        Engineered with premium bamboo fiber for the Indian summer. <br className="hidden sm:block" />
                        Anti-odor, moisture-wicking, and guaranteed fresh for 7 days.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base bg-bamboo hover:bg-bamboo/90 text-white shadow-lg hover:shadow-xl transition-all" asChild>
                            <Link href="#waitlist">
                                Join the Waitlist
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 px-8 text-base" asChild>
                            <Link href="#features">
                                Why Bamboo?
                            </Link>
                        </Button>
                    </div>

                    {/* Trust Signals */}
                    <div className="pt-12 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto text-sm text-gray-600 font-medium">
                        <div className="flex items-center justify-center gap-2">
                            <BadgeCheck className="h-5 w-5 text-bamboo" />
                            <span>Made in India</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <Truck className="h-5 w-5 text-bamboo" />
                            <span>Free Delivery</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 col-span-2 md:col-span-1">
                            <IndianRupee className="h-4 w-4 text-bamboo" />
                            <span>Cash on Delivery</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
