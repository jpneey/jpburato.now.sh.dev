<template>
  <div id="home" class="d-block position-relative w-100 pt-5">
    <div class="container d-block position-relative py-5">
      <div class="d-block py-5 mt-3">
        <h1 class="text-white mt-5 hero fw-bold mb-2">
          Let's start a<br>project <em>together</em>.
        </h1>
      </div>
    </div>
    <div class="container input-wrap-container d-block position-relative text-white">
      <div class="input-wrap position-relative"><span class="position-absolute form-counter">01</span>
        <label for="name">What's your name?</label>
        <input type="text" id="name" name="name" v-model="sender_name" placeholder="John Doe *" autocomplete="off">
      </div> 
      
      <div class="input-wrap position-relative"><span class="position-absolute form-counter">02</span>
        <label for="email">What's your email?</label>
        <input type="email" id="email" name="email" v-model="sender_email" placeholder="john@doe.com *" autocomplete="off">
      </div> 

      <div class="input-wrap position-relative"><span class="position-absolute form-counter">03</span>
        <label for="org">What's the name of your organization?</label>
        <input type="text" id="org" name="org" v-model="sender_org" placeholder="John & Doe &copy;" autocomplete="off">
      </div> 

      <div class="input-wrap position-relative"><span class="position-absolute form-counter">04</span>
        <label for="service">What services are you looking for?</label>
        <input type="text" id="service" name="service" v-model="sender_service" placeholder="Web Design, Web Development ..." autocomplete="off">
      </div> 

      <div class="input-wrap position-relative"><span class="position-absolute form-counter">05</span>
        <label for="message">Your message</label>
        <textarea name="message" id="message" cols="30" rows="5" v-model="sender_message" placeholder="Hello JP, can you help me with ..."></textarea>
      </div>
      <a :href=" this.prepareMailto " class="btn btn-danger fw-bold py-3 px-5 pulse">Send your message</a>
    </div>
    
    <div class="hello hello-contact">
      <div class="track">
        <h3>Connect.Соединять.Verbinden.Kumonekta</h3>
      </div>
    </div>

  </div>
</template>

<script>
import Work from '@/components/Work'
import experiences from '@/api/experiences.json';

const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}

export default {
  name: 'Contact',
  data() {
    return {
      sender_name : "",
      sender_email : "",
      sender_org : "",
      sender_service : "",
      sender_message: ""
    }
  },
  computed: {
    prepareMailto: function() {
      const url = new URL( 'mailto:johnpaulburato.jp@gmail.com' );
      let html = "Name: " + this.sender_name + " \n==========\n";
      html += "Message: " + this.sender_message
      url.searchParams.append( 'subject', this.sender_service )
      url.searchParams.append( 'body', html)
      return url;
    }
  },
  components: {
    Work
  },
  watch: {
    '$route' (to, from) {
      toTop();
    }
  },
  methods: {
  }
}
</script>
