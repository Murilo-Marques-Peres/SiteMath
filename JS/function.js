$(function(){
    $("*").css("padding","0").css("margin","0").css("border","0");
    var url = "images/imagemMath.jpg";
    $("body").css("background-image","url(" + url + ")").css("height","2000px").css("background-size","cover"); 
    
    $(".fundo").css("height","600px").css("width","500px").css("background-color","rgba(100, 100, 100, 0.6)");
    $(".fundoDireita").css("position","absolute").css("top","0").css("display", "none");
    $(".fundoDireita").css("height","600px").css("width","840px").css("right","0").css("background-color","rgba(100, 100, 100, 0.6)");
    $(".botao_principal").on("click", function(){
        $(".fundoDireita").fadeIn(3000);
    });

    $("button").css("width","250px").css("height","40px").css("font-size","20px").css("background","linear-gradient(blue, black)");
    $("button").css("color","gray").css("display","block").css("margin-bottom","10px");
    $("#btn_trigonometria").css("margin-top","30px");
    $(".p_escolhaMath").css("font-size","30px").css("color","white").css("font-weight","bold").css("text-align","center");

})