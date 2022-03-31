import Vue from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

Vue.prototype.$gsap = gsap

Vue.prototype.$initScrolltrigger = (refScroller) => {
  // const locomotive = this.$refs.scroller.locomotive
  const locomotive = refScroller
  locomotive.on('scroll', ScrollTrigger.update)
  ScrollTrigger.scrollerProxy(locomotive.el, {
    scrollTop(value) {
      return arguments.length
        ? locomotive.scrollTo(value, 0, 0)
        : locomotive.scroll.instance.scroll.y
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight
      }
    }
  })
}
