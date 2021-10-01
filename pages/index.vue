<template>
  <div>
    <LocomotiveScroll
      ref="scroller"
      :getted-options="{
        direction: 'vertical',
        smooth: true,
        getSpeed: true,
        lerp: 0.075,
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      }">
      <div class="welcome">
        NuxtJS x LocomotiveScroll x GSAP Boilerplate
      </div>
      <div class="welcome">
        NuxtJS x LocomotiveScroll x GSAP Boilerplate
      </div>
      <div class="welcome">
        NuxtJS x LocomotiveScroll x GSAP Boilerplate
      </div>
    </LocomotiveScroll>
  </div>
</template>

<script>
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {

    }
  },

  mounted() {
    this.$nuxt.$emit('update-locomotive')
    this.initScrolltrigger()
  },

  methods: {
     initScrolltrigger () {
      const locomotive = this.$refs.scroller.locomotive
      locomotive.on('scroll', ScrollTrigger.update)
      ScrollTrigger.scrollerProxy(locomotive.el, {
        scrollTop (value) {
          return arguments.length
            ? locomotive.scrollTo(value, 0, 0)
            : locomotive.scroll.instance.scroll.y
        },
        getBoundingClientRect () {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight
          }
        }
      })
    }
  }
}
</script>

<style>
.welcome {
  height: 100vh;
  background-color: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
