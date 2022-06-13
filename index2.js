$('document').ready(function(){
         $('.calculateFileSize').on('click', function(e){
                console.log("hello");
        let width1 = parseInt($('#width').first().val());
        let height1 = parseInt($('#height').first().val());
        let numberOfColors1 = parseInt($('#numberOfColors').first().val());
        let fileSize = parseInt((width1 * height1 * numberOfColors1) / 8 / 1024);
        // console.log(fileSize);
        $(".container").animate({
                opacity:1,
        })
        if(fileSize < 2000){
                $('.text').text(`File is ${fileSize}KB which is OK`);   
                $('.text').css("color","green");
        }
        else{
                $('.text').text(`File is ${fileSize}KB which is not OK`); 
                $('.text').css("color","red"); 
        }
        // $('.text').text(fileSize)
        });   
});