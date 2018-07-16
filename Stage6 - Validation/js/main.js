import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)


// var app = new Vue({
//   el: '#app',
//   data: {
//     email: '',
//     emailError: false,
//     emailErrMsg: ''
//   },
//   watch: {
//     email: function () {
//       var isMail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
//       if (!isMail.test(this.email)) {
//         this.emailError = true
//         this.emailErrMsg = 'email格式錯誤'
//       } else {
//         this.emailErrMsg = false
//       }
//     }
//   }
// })