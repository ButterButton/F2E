$('input').click(function() {
    $(this).val("");
});


$('input').mouseout(function(){
    $(this).val("+ Add task");
});


