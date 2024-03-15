<template>
  <div class="dog-chat-block">
    <!-- TODO: Add OnClick to the .dog-chat-block that opens the chatbox details and resets the dogUnreadMessages counter -->
    <div class="chat-block-portrait">
      <!-- TODO: Implement default image fallback (hard) -->
      <img :src="dogPortrait" alt="Dog Portrait"/>
    </div>
    <div class="chat-block-preview">
      <h2 class="chat-block-dog-name">
        {{ chatPreviewProp.dogName }}
      </h2>
      <p class="chat-block-paragraph-preview">
        {{ truncatedLastMessage }}
      </p>
    </div>
    <div v-show="chatPreviewProp.dogUnreadMessages > 0"
    class="unread-messages-counter-container">
      <p class="unread-messages-counter">
        {{ chatPreviewProp.dogUnreadMessages }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatblockComponent',

  data () {
    return {
      // TODO: Implement default fallback portrait
      // placeholderPortrait: require('@/assets/images/portraits/unknown.png'),
      dogPortrait: require('@/assets/images/portraits/' + this.chatPreviewProp.dogPortrait + '.png')
    }
  },

  props: ['chatPreviewProp'],

  methods: {
  },

  computed: {
    truncatedLastMessage () {
      if (this.chatPreviewProp.dogLastMessage.length > 150) {
        return this.chatPreviewProp.dogLastMessage.slice(0, 150) + '...'
      } else {
        return this.chatPreviewProp.dogLastMessage
      }
    }
  }
}

</script>
