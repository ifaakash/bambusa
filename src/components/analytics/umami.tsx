"use client"

import Script from "next/script"
import { siteConfig } from "@/config"

export function UmamiAnalytics() {
    const { websiteId, src } = siteConfig.analytics.umami

    if (!websiteId) {
        return null
    }

    return (
        <Script
            data-website-id={websiteId}
            src={src}
            strategy="afterInteractive"
        />
    )
}
