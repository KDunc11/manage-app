const getTheme = () => {
  const theme = localStorage.getItem("theme")
  return theme
}

const setTheme = (theme) => {
  const html = document.querySelector("html")

  if (theme === "dark") {
    html.classList.add("dark")
    document.body.style.backgroundImage = "url('/bg-tablet-pattern-dark.svg')"
    localStorage.setItem("theme", "dark")
  } else {
    html.classList.remove("dark")
    document.body.style.backgroundImage = "url('/bg-tablet-pattern.svg')"
    localStorage.setItem("theme", "light")
  }
}

export const setupTheme = () => {
  const themeButton = document.getElementById("theme-toggle")
  const mobileThemeButton = document.getElementById("theme-toggle-mobile")

  window.addEventListener("load", () => {
    const defaultTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    const theme = localStorage.getItem("theme") || localStorage.setItem("theme", defaultTheme)
    setTheme(theme)
  })
  
  themeButton.addEventListener("click", () => {
    const theme = getTheme()
    setTheme(theme === "dark" ? "light" : "dark")
  })
  
  mobileThemeButton.addEventListener("click", () => {
    const theme = getTheme()
    setTheme(theme === "dark" ? "light" : "dark")
  })
}
