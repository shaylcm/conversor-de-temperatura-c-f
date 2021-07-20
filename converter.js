//vai aplicar o evento onclik no elemento identificado pelo id ,e nesse onclick ira executar a função
document.getElementById("botao").onclick = convertemp;
document.getElementById("clear").onclick=limpar;

function convertemp()
{
    //armazenando dento da variavel  o valor do input ,que é o que vamos digitar na temperatura
    var fahrenheit =document.getElementById("fah").value;
    var celsius=document.getElementById("cel").value;


    //precavendo erros

    //caso o usuario digite letras em vez de numeros 
    //isNaN- is not a number -seignifica que não é um numero então faz a verificação
    //se não for numero vai retornar true ,uma das duas ou uma ou outra.
    if (isNaN(fahrenheit) || isNaN(celsius))
    {
       alert("digite um numero  válido");
       return
     //se não digitar nada em fahrenheit
     //=== -> significa exata igualdade 
    }else if (fahrenheit ===''){
        fahrenheit=(parseFloat(celsius)*1.8) +32;
    
     //se não digitar nada em celsius  
     //1.8 pos 5/9 é 1.8
     //parsefloat para transformar a variavel em tipo float
     }else if (celsius === ''){
        celsius=(parseFloat(fahrenheit)-32)/1.8;

     }    

    
    //mostrando o resultado do input,da variavel
    //to fixed serve para informar quantas casa quer apos a virgula , no caso definimos uma casa decimal
    document.getElementById("fah").value=parseFloat(fahrenheit).toFixed(2);
    document.getElementById("cel").value=parseFloat(celsius).toFixed(2);
    
 }

function limpar()
{
    document.getElementById("fah").value="";
    document.getElementById("cel").value="";
}