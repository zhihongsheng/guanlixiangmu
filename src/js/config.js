require.config({
    baseUrl:"/",
    paths:{
        jquery:"/xm/src/lib/jquery/jquery-1.12.4.min",
        template:"/xm/src/lib/artTemplate/template-web",
        cookie:"/xm/src/lib/jquery-plugins/jquery.cookie",
        fly:"/xm/src/lib/jquery-plugins/jquery.fly.min",
        zoom:"/xm/src/lib/jquery-plugins/jquery.elevateZoom-3.0.8.min",
        load:"/xm/src/js/loadHeaderAndFooter"
        

    },
    shim:{
        fly:{
            deps:["jquery"]
        },
        zoom:{
            deps:["jquery"]
        }

    }
});
