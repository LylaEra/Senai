Algoritmo "macas"
// Disciplina   : [Linguagem e L�gica de Programa��o]
// Professor   : Antonio Carlos Nicolodi 
// Descri��o   : Aqui voc� descreve o que o programa faz! (fun��o)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 10/03/2023
Var
// Se��o de Declara��es das vari�veis 
   quantidade_macas: inteiro
   preco_unidade, custo_total: real
Inicio
// Se��o de Comandos, procedimento, fun��es, operadores, etc... 
    escreva("Digite o n�mero de ma��s compradas: ")
   leia(quantidade_macas)

   // Verificar o pre�o por unidade
   se quantidade_macas < 12 entao
      preco_unidade <- 1.30
   senao
      preco_unidade <- 1.00
   fimse

   // Calcular o custo total da compra
   custo_total <- quantidade_macas * preco_unidade

   // Exibir o custo total da compra
   escreva("O custo total da compra � R$ ", custo_total:2:2)

Fimalgoritmo