Algoritmo "macas"
// Disciplina   : [Linguagem e Lógica de Programação]
// Professor   : Antonio Carlos Nicolodi 
// Descrição   : Aqui você descreve o que o programa faz! (função)
// Autor(a)    : Nome do(a) aluno(a)
// Data atual  : 10/03/2023
Var
// Seção de Declarações das variáveis 
   quantidade_macas: inteiro
   preco_unidade, custo_total: real
Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreva("Digite o número de maçãs compradas: ")
   leia(quantidade_macas)

   // Verificar o preço por unidade
   se quantidade_macas < 12 entao
      preco_unidade <- 1.30
   senao
      preco_unidade <- 1.00
   fimse

   // Calcular o custo total da compra
   custo_total <- quantidade_macas * preco_unidade

   // Exibir o custo total da compra
   escreva("O custo total da compra é R$ ", custo_total:2:2)

Fimalgoritmo