"use client"

import { motion } from "framer-motion"
import { Check, X, ShieldCheck, Wind, Droplets, Feather } from "lucide-react"

const features = [
    {
        icon: Wind,
        title: "Breathable & Cool",
        desc: "Micro-gaps in bamboo fiber allow 3x more airflow than cotton.",
    },
    {
        icon: ShieldCheck,
        title: "Anti-Odor Technology",
        desc: "Naturally antibacterial. Stays fresh for up to 7 days without washing.",
    },
    {
        icon: Droplets,
        title: "Moisture Wicking",
        desc: "Absorbs and evaporates sweat instantly. Keeps feet dry all day.",
    },
    {
        icon: Feather,
        title: "Cloud-Like Softness",
        desc: "Softer than 1000-thread count cotton. Feels like silk on your skin.",
    },
]

export function Features() {
    return (
        <section id="features" className="py-20 bg-gray-50">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
                        Why Switch to Bamboo?
                    </h2>
                    <p className="text-gray-600">
                        Engineered to solve the problems of the Indian climate. Better than cotton in every way.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                        >
                            <div className="h-12 w-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 text-bamboo">
                                <f.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-xl font-bold text-charcoal mb-2">{f.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison Table */}
                <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden max-w-4xl mx-auto">
                    <div className="grid grid-cols-3 p-6 border-b border-gray-100 bg-gray-50/50 text-sm font-bold text-charcoal">
                        <div>Feature</div>
                        <div className="text-center text-gray-400">Regular Cotton</div>
                        <div className="text-center text-bamboo">Moso Bamboo</div>
                    </div>
                    {[
                        { label: "Odor Control", old: false, new: true },
                        { label: "Moisture Wicking", old: false, new: true },
                        { label: "Softness", old: "Rough", new: "Silky" },
                        { label: "Sustainability", old: "High Water Usage", new: "Eco-Friendly" },
                    ].map((row, i) => (
                        <div key={i} className="grid grid-cols-3 p-6 border-b border-gray-100 last:border-0 items-center">
                            <div className="font-medium text-gray-700">{row.label}</div>
                            <div className="text-center flex justify-center text-gray-400">
                                {typeof row.old === "boolean" ? (
                                    row.old ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />
                                ) : (
                                    <span className="text-sm">{row.old}</span>
                                )}
                            </div>
                            <div className="text-center flex justify-center text-bamboo font-bold">
                                {typeof row.new === "boolean" ? (
                                    row.new ? <Check className="h-5 w-5" /> : <X className="h-5 w-5" />
                                ) : (
                                    <span className="text-sm">{row.new}</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
