# VueRutube

![Rutube](https://upload.wikimedia.org/wikipedia/en/thumb/b/b2/Rutube-Logo-transparent-black-and-white.svg/1280px-Rutube-Logo-transparent-black-and-white.svg.png)
## Intro
vue-rutube is an wrapper of [Rutube Player JSON API](https://github.com/rutube/RutubePlayerJSAPI)

This Library implemention and documentation is inspired by [VueYoutube](https://www.npmjs.com/package/vue-youtube) plugin. I tried to make a similar interface, so if you are used to it, you will not be lost. It's not a plugin, but just a	 simple library. This is my first contribution to NPM, please be kind :).

## Installation

    npm install vue-rutube

 ## Usage
 #### template:
 ```html
<vue-rutube ref="player" width="720" height="480" videoId='7163336' />
<button  @click="play()">play</button>
```
#### script:
```js
import VueRutube from 'vue-rutube'

export default {
  components: {
    VueRutube
},
computed: {
  player() {
    return this.$refs.player
  }
},
methods: {
  play() {
    this.player.play()
  },
  pause() {
    this.player.pause()
  }
}
```
### Events :
The component triggers events to notify the parent component of changes in the player. For more information, see [Rutube Player JSON API](https://github.com/rutube/RutubePlayerJSAPI)

| Event|
|--|
| ready |
| playing |
| paused |
| stopped |
| currentTime |

### Player :
You have access to all [api methods](https://github.com/rutube/RutubePlayerJSAPI) through [component referencing](https://vuejs.org/v2/api/#ref). You can also find them below.
Example :
 ```html
<vue-rutube ref="player" width="720" height="480" videoId='7163336' />
```

```js
export default {
  //...
  methods: {
    play() {
      this.$refs.player.play()
    }
  }
}
```
####  Methods : 
| Name | Parameters | Description |
|--|--|--|
| play | none | play video |
| pause | none | pause video | 
| stop | none | stop video | 
| mute | none | mute video | 
| unMute | none | unmute video | 
| setCurrentTime (seconds) | Number | set current time (absolute) in seconds |
| getCurrentTime | none | get current time in seconds |
| relativelySeek (seconds) | Number | set current time (relative) - negative value seek back |
| changeVideo (id, quality) | String, Number | change player video |
| setVolume (volume) | Number | value between 0 .. 1 |
| remove | none | remove player |

### props:
| Prop | Type | Default | Description|
|--|--|--|--|
| videoId | String | '7163336' | Id of the video played  |
| width | String | '720' | `iframe` pixel width  |
| height | String | '480' | `iframe` pixel height  |
| frameborder | String | '0' | `iframe` frameborder  |

## License
[MIT](https://opensource.org/licenses/MIT)
### Keywords :
[vuejs](https://www.npmjs.com/search?q=keywords:vuejs) [rutube](https://www.npmjs.com/search?q=keywords:rutube) [player](https://www.npmjs.com/search?q=keywords:player) [api](https://www.npmjs.com/search?q=keywords:vuejs)

