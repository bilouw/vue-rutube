<template>
  <iframe id="rutube-player" :width="width" :height="height" :src="sourceUrl" :frameborder="frameborder" webkitAllowFullScreen mozallowfullscreen allowFullScreen />
</template>

<script>
export default {
  props: {
    videoId: {
      type: String,
      default: '7163336'
    },
    width: {
      type: String,
      default: '720'
    },
    height: {
      type: String,
      default: '480'
    },
    frameborder: {
      type: String,
      default: '0'
    }
  },
  data: () => {
    return {
      player: null,
      ready: false,
      currentTime: 0
    }
  },
  computed: {
    sourceUrl() {
      return `//rutube.ru/play/embed/${this.videoId}?quality=1`
    }
  },
  mounted() {
    this.player = document.getElementById('rutube-player')
    this.handleEvent()
  },
  methods: {
    sendPostMessage(type, data) {
      if (!this.ready) return

      this.player.contentWindow.postMessage(JSON.stringify({
        type: `player:${type}`,
        data: data
      }), '*');
    },
    play() {
      this.sendPostMessage('play', {})
    },
    pause() {
      this.sendPostMessage('pause', {})
    },
    stop() {
      this.sendPostMessage('stop', {})
    },
    mute() {
      this.sendPostMessage('mute', {})
    },
    unMute() {
      this.sendPostMessage('unMute', {})
    },
    setCurrentTime(seconds) {
      this.sendPostMessage('setCurrentTime', {time: seconds})
    },
    getCurrentTime() {
      return this.currentTime
    },
    relativelySeek(seconds) {
      this.sendPostMessage('relativelySeek', {time: seconds})
    },
    changeVideo(id, quality=1) {
      this.sendPostMessage('changeVideo', {params: {hash: id, quality: quality}})
    },
    setVolume(volume) {
      this.sendPostMessage('setVolume', {volume: volume})
    },
    setSkinColor(color) {
      this.sendPostMessage('setSkinColor', {params: {color: color}})
    },
    remove() {
      this.sendPostMessage('remove', {})
    },
    handleEvent() {
      window.addEventListener('message', (event) => {
        let message = JSON.parse(event.data)
        this.emitEvent(message)
      })
    },
    emitEvent(message) {
      switch (message.type) {
        case 'player:ready':
          this.ready = true
          this.$emit('ready')
          break
        case 'player:changeState':
          this.$emit(message.data.state)
          break
        case 'player:currentTime':
          this.currentTime = message.data.time
          this.$emit('currentTime', message.data.time)
      }
    }
  }
}
</script>