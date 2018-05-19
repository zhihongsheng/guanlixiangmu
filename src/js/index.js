require(["config"],function(){
    require(["jquery","zoom","load"],function($){
        $(function(){
            $(".container").hover(function(){
                $(this).stop().animate({opacity: 0.3}, 3000)
            }, function(){
                $(this).stop().animate({opacity: 1}, 3000)
            });

            $(function(){
                $(".zoom").elevateZoom({
                    zoomType:"lens",
                    lensShape:"round",
                    containLensZoom:true,
                    lensSize:200
                });
            });


        });
    });
});


