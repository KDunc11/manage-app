export const setupBilling = () => {
  const monthlyBillingButton = document.getElementById("monthlyBilling")
  const yearlyBillingButton = document.getElementById("yearlyBilling")
  const monthlyCards = document.getElementById("monthlyCards")
  const yearlyCards = document.getElementById("yearlyCards")
  
  monthlyBillingButton.addEventListener("click", () => {
    monthlyBillingButton.classList.add("bg-white", "dark:bg-slate-900")
    yearlyBillingButton.classList.remove("bg-white", "dark:bg-slate-900")
    monthlyCards.classList.remove("hidden")
    yearlyCards.classList.add("hidden")
    monthlyCards.classList.add("grid")
    yearlyCards.classList.remove("grid")
  })
  
  yearlyBillingButton.addEventListener("click", () => {
    yearlyBillingButton.classList.add("bg-white", "dark:bg-slate-900")
    monthlyBillingButton.classList.remove("bg-white", "dark:bg-slate-900")
    yearlyCards.classList.remove("hidden")
    monthlyCards.classList.add("hidden")
    yearlyCards.classList.add("grid")
    monthlyCards.classList.remove("grid")
  }) 
}
