<template>
  <div class="panel-welcome" id="section-2">
    <div class="avatar-section">
      <img :src="avatar" class="img-rounded avatar" id="avatar-image">
    </div>
    <h1 class="landing-heading">Hello, <span id="heading-name">{{ givenName }}</span>!</h1>
    <p class="lead">
      <a
        href="#"
        class="btn btn-primary btn-lg"
        id="signout-button"
        @click.prevent="signOut"
      >
        Logout
      </a>
    </p>
  </div>
</template>

<script>
import { userSession } from '../userSession'
export default {
  methods: {
    signOut () {
      userSession.signUserOut(window.location.href)
    }
  },
  data () {
    return {
      aladin: window.aladin,
      avatar: 'https://s3.amazonaws.com/onename/avatar-placeholder.png',
      givenName: 'Anonymous'
    }
  },
  mounted () {
    const aladin = this.aladin
    if (aladin.isUserSignedIn()) {
      const profile = aladin.loadUserData().profile
      const user = new aladin.Person(profile)
      this.givenName = user.name() ? user.name() : 'Nameless Person'
      if (user.avatarUrl()) this.avatar = user.avatarUrl()
    } else if (aladin.isSignInPending()) {
      aladin.handlePendingSignIn()
        .then((userData) => {
          window.location = window.location.origin
        })
    }
  }
}
</script>

<style scoped></style>
