<template>
  <div>
    <vue-rutube ref="player" videoId='7163336' />
    <button @click="play()">play</button>
  </div>
</template>

<script>
import VueRutube from './VueRutube'

export default {
  components: {
    VueRutube
  },

  computed: {
    player() {
      return this.$refs.player
    }
  },

  mounted() {
    setInterval(() => {
      console.log(this.player.currentTime)
    }, 1000)
  },

  methods: {
    play() {
      this.player.play()
    },
    pause() {
      this.player.pause()
    }
  }

}
</script>