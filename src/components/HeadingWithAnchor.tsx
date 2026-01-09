"use client"

import React, { useRef } from "react"
import { slugify } from "@/lib/slugify"
import { copyToClipboard } from "@/lib/copyToClipboard"

type Props = {
    level: 2 | 3 | 4
    blockKey: string
    children: React.ReactNode
}

export default function HeadingWithAnchor({
    level,
    blockKey,
    children,
}: Props) {
    const anchorRef = useRef<HTMLAnchorElement | null>(null)

    const text =
        typeof children === "string"
            ? children
            : Array.isArray(children)
                ? children.map(String).join("")
                : ""

    /**
     * Deterministic ID:
     * - slugified heading text
     * - plus stable Sanity block key
     */
    const id = `${slugify(text)}-${blockKey.slice(0, 6)}`
    const Tag = `h${level}` as React.ElementType

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault()

        copyToClipboard(
            `${window.location.origin}${window.location.pathname}#${id}`
        )

        if (anchorRef.current) {
            anchorRef.current.classList.add("copied")
            setTimeout(() => {
                anchorRef.current?.classList.remove("copied")
            }, 1200)
        }
    }

    return (
        <Tag id={id}>
            <span>{children}</span>
            <a
                ref={anchorRef}
                href={`#${id}`}
                className="heading-anchor"
                onClick={handleClick}
                aria-label="Copy link to section"
            />
        </Tag>
    )
}
