$(document).ready(function() {
        $("#item").hide();
});



var Item = {
    article_title: 'Helios 44M',
    article_text: 'A lens with personality',
    article_content: 'The former Soviet Union mimicked the optical structure of the Carl Zeiss Biotar 58/2 and made a series of Helios 44M, a unique vortex effect that is its most distinctive symbol.'
}

// var Album = {


// }


var vm = new Vue({
    el: '#app',
    data: Item,
    methods:{
        pageview: function(){
            $(window).scrollTop(0)
            this.over = false
            this.page = !this.over
        },
        overview: function(){
            $(window).scrollTop(0)
            this.over = true
            this.page = !this.over
        }
    }
})
