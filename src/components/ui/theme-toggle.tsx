"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null)

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("theme")
      if (stored === "dark") {
        document.documentElement.classList.add("dark")
        setIsDark(true)
        return
      }
      if (stored === "light") {
        document.documentElement.classList.remove("dark")
        setIsDark(false)
        return
      }

      // No stored preference — use system preference
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      if (prefersDark) {
        document.documentElement.classList.add("dark")
        setIsDark(true)
      } else {
        document.documentElement.classList.remove("dark")
        setIsDark(false)
      }
    } catch (e) {
      // Ignore (e.g., server or privacy restrictions)
    }
  }, [])

  function toggle() {
    try {
      const next = !isDark
      setIsDark(next)
      if (next) {
        document.documentElement.classList.add("dark")
        window.localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.classList.remove("dark")
        window.localStorage.setItem("theme", "light")
      }
    } catch (e) {
      // noop
    }
  }

  return (
    <div>
      <Button variant="ghost" size="icon" onClick={toggle} aria-label="Toggle theme">
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
    </div>
  )
}
