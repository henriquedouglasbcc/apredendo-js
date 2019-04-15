(function(){
    //Estou utilizando uma EFI e trabalhando com o node.JS;
    
    var myTriangle = "#";

    console.log("Meu triângulo");
    for(var i=0; i < 7; i++){
        console.log(myTriangle);
        myTriangle += "#";
    }

    console.log("\nTamanho da minha string: abc");
    var abc = "abc";
    console.log(abc.length);

    console.log("\nPrograma FizzBuzz");
    for(var i=1; i <= 100; i++){
        if(i % 3 == 0){
            console.log("Fizz");
        }
        else if(i % 5 == 0){
            console.log("Buzz");
        }
        else{
            console.log(i);
        }
    }

    console.log("\n\nTabuleiro de Xadrez\n");

    var xadrez = "";
    var size = 15;

    for(var linha = 1; linha <= size; linha++){
        for(var coluna = 1; coluna <= size; coluna++){
            if(linha % 2 !== 0){
                if(coluna % 2 !== 0){
                    xadrez += "#";
                }
                else{
                    xadrez += " ";
                }
            }
            else{
                if(coluna % 2 !== 0){
                    xadrez += " ";
                }
                else{
                    xadrez += "#";
                }
            }
        }
        xadrez += "\n";
    }

    console.log(xadrez);


}());