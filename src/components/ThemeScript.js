'use client'

import Script from "next/script";

const ThemeScript = () => {
  return (
    <Script strategy="beforeInteractive">
    {
      `document.documentElement.classList.toggle(
'dark',
localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
)`
    }
  </Script>
  )
}

export default ThemeScript
