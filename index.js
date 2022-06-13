$('document').ready(function(){
    // $('#pname, #char, #adv, #adj').bind('keyup', function() {
    //     if(allFilled())$('.tellStory').removeAttr('disabled');
    // });
    
    // function allFilled() {
    //     var filled = true;
    //     $('body input').each(function() {
    //         if($(this).val() == '') filled = false;
    //     });
    //     return filled;
    // }

    $('.tellStory').on('click', function(e){
        e.preventDefault();
        let name = $('#pname').val();
        let character = $('#char').val();
        let adverb = $('#adv').val();
        let adject = $('#adj').val();
        // $("#result").css("display", "block");
        $(".name").text(name);
        $(".character").text(character);
        $("#adjective").text(adject);
        $("#adverb").text(adverb);
        $("span").css("color", "green");
        $(".container").animate({
            opacity:1,
    })
    });   
        

});




