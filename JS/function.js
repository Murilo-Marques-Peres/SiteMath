$(function(){
    $("*").css("padding","0").css("margin","0").css("border","0");
    var url = "images/imagemMath.jpg";
    var timer;
    var confirmacao = 0;
    $("body").css("background-image","url(" + url + ")").css("height","2000px").css("background-size","cover"); 
    
    function funcaoAbrirTrigonometria(){
        $("#btn_trigonometria").on("click", function(){
            if(confirmacao == 0){
                $(".fundoDireita").slideUp(2000);
                $("#fundo_trigonometria").slideDown(2000);
                
            }
            if(confirmacao > 0){
                $(".fundoDireita").slideUp(2000);
                timer = setTimeout(function(){
                    $("#fundo_trigonometria").slideDown(2000);
                }, 2000);
                
            }
            confirmacao++;
        });
    }
    function funcaoAbrirFuncao1(){
        $("#btn_funcaoPrimeiroGrau").on("click", function(){
            if(confirmacao == 0){
                console.log("confirmacao == " + confirmacao);
                $(".fundoDireita").slideUp(2000);
                $("#fundo_funcaoPrimeiroGrau").slideDown(2000);
            }
            if(confirmacao > 0){
                $(".fundoDireita").slideUp(2000);
                timer = setTimeout(function(){
                    $("#fundo_funcaoPrimeiroGrau").slideDown(2000);
                    console.log("confirmacao == " + confirmacao);
                }, 2000);
            }
            confirmacao++;
        });
    }
    function funcaoAbrirFuncao2(){
        $("#btn_funcaoSegundoGrau").on("click", function(){
            if(confirmacao == 0){
                console.log("confirmacao == " + confirmacao);
                $(".fundoDireita").slideUp(2000);
                $("#fundo_funcaoSegundoGrau").slideDown(2000);
            }
            if(confirmacao > 0){
                $(".fundoDireita").slideUp(2000);
                timer = setTimeout(function(){
                    $("#fundo_funcaoSegundoGrau").slideDown(2000);
                    console.log("confirmacao == " + confirmacao);
                }, 2000);
            }
            confirmacao++;
        });
    }


    $(".fundo").css("height","600px").css("width","500px").css("background-color","rgba(100, 100, 100, 0.6)");
    $(".fundoDireita").css("position","absolute").css("top","0").css("display", "none");
    
    $("#fundo_trigonometria").css("height","600px").css("width","840px").css("right","0").css("background-color","rgba(191, 6, 46, 0.6)");
    $("#fundo_funcaoPrimeiroGrau").css("height","600px").css("width","840px").css("right","0").css("background-color","rgba(148, 3, 3, 0.6)");
    $("#fundo_funcaoSegundoGrau").css("height","600px").css("width","840px").css("right","0").css("background-color","rgba(11, 4, 120, 0.6)");
    
    

    $("button").css("width","250px").css("height","40px").css("font-size","20px").css("background","linear-gradient(blue, black)");
    $("button").css("color","gray").css("display","block").css("margin-bottom","10px").css("cursor","pointer");
    $("#btn_trigonometria").css("margin-top","30px");
    $(".p_escolhaMath").css("font-size","30px").css("color","white").css("font-weight","bold").css("text-align","center");
    funcaoAbrirTrigonometria();
    funcaoAbrirFuncao1();
    funcaoAbrirFuncao2();
});