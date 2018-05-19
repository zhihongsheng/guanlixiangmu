define(["jquery","cookie"],function($){
    $("header").load("/xm/src/html/include/header.html",function(){
        $(".search .word").on("keyup",function(){
            let _search = $(this).val(),
                url = `https://suggest.taobao.com/sug?code=utf-8&q=${_search}&callback=?`;
            $.getJSON(url,function(data){
                var html = "";
                data.result.forEach(function(curr){
                    html += `<div>${curr[0]}</div>`;
                });
                $(".suggest").html(html);
            });

        });


            $.cookie.json = true;
            // $.cookie("loginUser","zhihongsheng",{path:"/"})

            let user = $.cookie("loginUser");
            if (user) {
                $(".login_register").html(`
                    <a href="#">欢迎您：${user}</a>
                    <a href="#">退出</a>
                    `);
            }
        });

    $("footer").load("/xm/src/html/include/footer.html");
});

