import { useState, useEffect } from "react"

export const useScroll = () => {
    let listener: any = null
    const [scrollState, setScrollState] = useState("top")

    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
            var scrolled = document?.scrollingElement?.scrollTop
            if (scrolled && scrolled >= 120) {
                if (scrollState !== "amir") {
                    setScrollState("amir")
                }
            } else {
                if (scrollState !== "top") {
                    setScrollState("top")
                }
            }
        })
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [scrollState]);

    return scrollState;
}