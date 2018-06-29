// $(document).ready(function() {
//         $("#item").hide();
// });


// $('.theme_img').click(function() {
//     $('#main').hide();
//     $('#item').show();
//     $(window).scrollTop(0);
// });


// $('.sticker').click(function() {
//     $('#main').show();
//     $('#item').hide();
//     $(window).scrollTop(0);
// });


var todata = {
    title: 'Helios 44M',
    text: 'A lens with personality',
    content: 'The former Soviet Union mimicked the optical structure of the Carl Zeiss Biotar 58/2 and made a series of Helios 44M, a unique vortex effect that is its most distinctive symbol.'
}


var vm = new Vue({
    el: '#app',
    data: {
        showview: todata,
        indexview: true
    },
    methods: {
        toindex: function() {
            this.indexview = true
            this.pageview = !this.indexview
            $(window).scrollTop(0)
            console.log("index = " + this.indexview)
        },
        topage: function() {
            this.indexview = false
            this.pageview = !this.indexview
            $(window).scrollTop(0)
            console.log("index = " + this.indexview)

        }
    }
});
