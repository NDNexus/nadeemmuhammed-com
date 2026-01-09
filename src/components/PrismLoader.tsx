"use client";

import { useEffect } from "react";
import Prism from "prismjs";

/* Languages you’ll realistically use */
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-css";
import "prismjs/components/prism-markup";

export default function PrismLoader() {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    return null;
}
