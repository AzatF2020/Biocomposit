import gsap from "gsap";
import initSplitText from "../vendor/initSplitText"

export default function initFirstAnimation() {
  const header = document.querySelector(".header");

  if(!header) return

  setTimeout(() => {
    gsap.to(header, {
      opacity: 1,
      yPercent: 0,
      autoAlpha: 1,
      duration: 1
    })
    initSplitText()
    document.body.classList.remove("no-scroll")
  }, 1000)
}