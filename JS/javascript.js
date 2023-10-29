window.onload = function(){
    function calcularTrigonometria(){
        var hipotenusa = document.getElementById("H").value;
        var catetoOposto = document.getElementById("CO").value;
        var catetoAdjacente = document.getElementById("CA").value;
        catetoOposto = catetoOposto.replace(",",".");
        catetoAdjacente = catetoAdjacente.replace(",",".");
        //hipotenusa = hipotenusa.replace(",",".");
        
        /*function converterValoresFloat(){    
            var hipotenusaConvertidaFloat = parseFloat(hipotenusa);
            var catetoOpostoConvertido = parseFloat(catetoOposto)
            var catetoAdjacenteConvertido = parseFloat(catetoAdjacente);
        }*/
        if(hipotenusa == ""){
            var catetoOpostoConvertido = parseFloat(catetoOposto)
            var catetoAdjacenteConvertido = parseFloat(catetoAdjacente);
            
            hipotenusaConvertidaFloat = Math.sqrt(Math.pow(catetoOpostoConvertido,2)+Math.pow(catetoAdjacenteConvertido, 2));
            hipotenusaDesconvertida = hipotenusaConvertidaFloat.toString();

            document.getElementById("H").value = hipotenusaDesconvertida;
        }
    }
    document.getElementById("btnCalcular").addEventListener("click", calcularTrigonometria);
}



