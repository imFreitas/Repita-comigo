//Não consegui realizar os exercícios 05 e 11.

let opcao = parseInt(prompt("Escolha a opção desejada \n 1) Exercicio 1 \n  2) Exercicio 2 \n  3) Exercicio 3 \n  4) Exercicio 4 \n  5) Exercicio 5 \n  6) Exercicio 6 \n  7) Exercicio 7 \n  8) Exercicio 8 \n  9) Exercicio 9 \n  10) Exercicio 10 \n"));

switch(opcao){

    case 1:

        exerc1();
        break;

    case 2:

        exerc2();
        break;

    case 3:

        exerc3();
        break;

    case 4:

        exerc4();
        break;

    case 5:

        exerc5();
        break;

    case 6:

        exerc6();
        break;

    case 7:

        exerc7();
        break;

    case 8:

        exerc8();
        break;

    case 9:

        exerc9();
        break;

    case 10:

        exerc10();
        break;
    
    default:

        alert("Opção Inválida, escolha uma opção de 1 a 10");
}

function exerc1(){

    alert("EXERCICIO 1");
    
    let number1  = parseInt(prompt("Insira um número"));
    let number2 = parseInt(prompt ("Insira um número"));

    while(number2 <= 0){

        alert("Numero Invalido, insira um número maior que 0");
        number2 = parseInt(prompt("Insira um número"))

    }

    let divisao = number1 / number2;

    return(alert("O resultado é: " + divisao));
}

function exerc2(){

    alert("EXERCICIO 2");

    let contagem = 30;

    while(contagem >= 0){

        alert("Explosão em: " + contagem);
        contagem--;
    }

    alert("BOOOMMMM");
}

function exerc3(){

    alert("EXERCICIO 3");

    let contagem = 10;

    while(contagem >= 1 ){

        alert(contagem);
        contagem--;

    }
}

function exerc4(){

    alert("EXERCICIO 4");
    alert("A média de numeros entre 15 e 100");

    let contagem = 15;
    let soma = 0;

    while(contagem <= 100){

        alert(contagem);
        soma = soma + contagem;
        contagem++;
        
    
    }

    let média = soma / 85;

    return(alert("A média entre os números de 15 a 100 é: " + Math.round(média)));

    
}
function exerc5(){

 alert("EXERCICIO 5");

    alert("Não consegui realizar")

        }
        


function exerc6(){

    alert("EXERCICIO 6");


    let nota1 = parseFloat(prompt("Insira a 1º nota do aluno"));
    let nota2 = parseFloat(prompt("Insira a 2º nota do aluno"));
    let media = (nota1 + nota2) / 2;


    if(media >= 9.5){

        alert("Aluno Aprovado com média: " + media);

    }else{

        alert("Aluno Reprovado com média: " + media);

    }

    let opcao = prompt("Deseja calcular a média de outro aluno? Sim(S) / Não(N)");

    while(opcao == "S"){

        let nota1 = parseFloat(prompt("Insira a 1º nota do aluno"));
        let nota2 = parseFloat(prompt("Insira a 2º nota do aluno"));
        let media = (nota1 + nota2) / 2;


        if(media >= 9.5){

            alert("Aluno Aprovado com média: " + media);

        }else{

            alert("Aluno Reprovado com média: " + media);

        }

        opcao = prompt("Deseja calcular a média de outro aluno? Sim(S) / Não(N)");
    }
}

function exerc7(){

    alert("EXERCICIO 7");

    let nota1 = parseInt(prompt("Insira a 1º nota do aluno"));

    while(nota1 > 10 || nota1 < 0){

        alert("Insira uma nota valida de 0 a 10");
        nota1 = parseInt(prompt("Insira a 1º nota do aluno"));

    }


    let nota2 = parseInt(prompt("Insira a 2º nota do aluno"));

    while(nota2 > 10 || nota2 < 0){

        alert("Insira uma nota valida de 0 a 10");
        nota2 = parseInt(prompt("Insira a 2º nota do aluno"));

    }


    let nota3 = parseInt(prompt("Insira a 3º nota do aluno"));

    while(nota3 > 10 || nota3 < 0){

        alert("Insira uma nota valida de 0 a 10");
        nota3 = parseInt(prompt("Insira a 3º nota do aluno"));

    }


    let nota4 = parseInt(prompt("Insira a 4º nota do aluno"));

    while(nota4 > 10 || nota4 < 0){

        alert("Insira uma nota valida de 0 a 10");
        nota4 = parseInt(prompt("Insira a 4º nota do aluno"));

    }


    let nota5 = parseInt(prompt("Insira a 5º nota do aluno"));

    while(nota5 > 10 || nota5 < 0){

        alert("Insira uma nota valida de 0 a 10");
        nota5 = parseInt(prompt("Insira a 5º nota do aluno"));

    }

    let nota6 = parseInt(prompt("Insira a 6º nota do aluno"));

    while(nota6 > 10 || nota6 < 0){

        alert("Insira uma nota valida de 0 a 10");
        nota6 = parseInt(prompt("Insira a 6º nota do aluno"));

    }

    let media = (nota1 + nota2 + nota3 + nota4 + nota5 + nota6) / 6;

    return(alert("A média do Aluno é: " + media));
}

function exerc8(){

    alert("EXERCICIO 8");

    let contagem = 1;
    let N = parseInt(prompt("Insira um número maior do que 1"));

    while(N <= contagem){

        alert("Número Invalido, insira um número maior do que 1");
        N = parseInt(prompt("Insira um número limite válido"));

    }

    while(contagem < N){
                
        document.write(contagem + "<br>");
        contagem++;

    }

    document.write(N);
}

function exerc9(){

    alert("EXERCICIO 9");

    let contagem = 100;

    while(contagem <= 110){
        
        document.write(contagem  + "<br>");
        contagem++;

    }
}

function exerc10(){

    alert("EXERCICIO 10");


    let N = parseInt(prompt("Insira o número que você deseja que vá"));
    let multi = 0;
    let contagem = 1;

    while(contagem <= N){
        while(multi <= 10){

            alert(contagem + " X " + multi + " = " + (contagem * multi));
            multi++;
            
        }
        contagem++;
        multi = 0;
        alert("<br><br>");
    }
    
}

 

