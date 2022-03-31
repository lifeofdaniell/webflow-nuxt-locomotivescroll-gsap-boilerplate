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
        Webflow - NuxtJS x LocomotiveScroll x GSAP Boilerplate
      </div>
      <div class="welcome">
        Webflow - NuxtJS x LocomotiveScroll x GSAP Boilerplate
      </div>
      <div class="welcome">
        Webflow - NuxtJS x LocomotiveScroll x GSAP Boilerplate
      </div>
    </LocomotiveScroll>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  mounted() {
    this.$nextTick(() => {
      this.$initWebflow()
    })
    this.$nuxt.$emit('update-locomotive')
    this.$initScrolltrigger(this.$refs.scroller.locomotive)
  },

  methods: {}
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
