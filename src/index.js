import "swiper/swiper-bundle.min.css"
import { setupBilling } from "./billing"
import { setupMenu } from "./menu"
import { setupSwiper } from "./swiper"
import { setupTheme } from "./theme"

export const App = () => {
  setupBilling()
  setupMenu()
  setupTheme()
  setupSwiper()
}
