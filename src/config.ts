export const siteConfig = {
    name: "Bambusa",
    description: "Engineered for comfort. Made in India. 7-Day Freshness Guarantee.",
    url: "https://bambusa.in", // Placeholder
    ogImage: "https://bambusa.in/og.jpg", // Placeholder
    links: {
        twitter: "https://twitter.com/bambusa",
        github: "https://github.com/bambusa",
    },
    analytics: {
        umami: {
            websiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || "",
            src: process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL || "https://analytics.umami.is/script.js",
        },
    },
};
