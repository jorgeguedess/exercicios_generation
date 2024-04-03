import readlineSync from "readline-sync";

import { Stack } from "./class/Stack";
import { colors } from "./utils/Colors";

function main() {
  const pilha = new Stack<string>();

  do {
    exibirMenu();

    let opcao = readlineSync.questionInt("Entre com a opção desejada: ", {
      limitMessage: `${colors.fg.redstrong}Opção inválida. Digite de 0 a 3!\n${colors.reset}`,
    });
    switch (opcao) {
      case 1:
        let nome = readlineSync.question("\nNome do Livro: ");
        if (!nome) {
          console.log(
            `${colors.fg.redstrong}Ocorreu um erro ao tentar adicionar o livro${colors.reset}`
          );

          keyPress();
          break;
        }

        nome = capitalize(nome);
        adicionarLivro(nome);

        console.log(`\n${colors.fg.yellowstrong}Pilha:${colors.reset}\n`);

        listarLivros(pilha);
        console.log(
          `\n${colors.fg.greenstrong}Livro Adicionado!${colors.reset}`
        );

        keyPress();
        break;
      case 2:
        if (!pilha.isEmpty())
          console.log(
            `\n${colors.fg.yellowstrong}Lista de Livros na Pilha\n${colors.reset}`
          );
        listarLivros(pilha);

        keyPress();
        break;
      case 3:
        retirarLivro(pilha);

        if (!pilha.isEmpty()) {
          console.log(`\n${colors.fg.yellowstrong}Pilha:${colors.reset}\n`);
          listarLivros(pilha);
          console.log(
            `\n${colors.fg.greenstrong}Um Livro foi retirado da pilha!${colors.reset}`
          );
        }

        keyPress();
        break;
      case 0:
        console.log(colors.fg.magenta, "\n\nPrograma Finalizado!");
        sobre();
        console.log(colors.reset, "");
        return;
      default:
        console.log(
          `${colors.fg.redstrong}Opção inválida! Digite de 0 a 3!\n${colors.reset}`
        );
        keyPress();
        break;
    }
  } while (true);

  function adicionarLivro(nome: string): void {
    pilha.push(nome);
  }

  function listarLivros(pilha: Stack<string>): void {
    if (pilha.isEmpty()) {
      console.log(`\n${colors.fg.red}A pilha está vazia${colors.reset}`);
      return;
    }

    pilha.printStack();
  }

  function retirarLivro(pilha: Stack<string>) {
    pilha.pop();
  }

  /** METODOS ADICIONAIS */

  function sobre(): void {
    console.log(`
*****************************************************
Projeto Desenvolvido por:

Jorge Guedes - apoio da Generation Brasil
https://github.com/jorgeguedess
https://www.linkedin.com/in/jorgeguedess/
*****************************************************`);
  }

  function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlineSync.prompt();
  }

  function exibirMenu(): void {
    console.log(`${colors.fg.bluestrong}
************************************************************
      
    1 - Adicionar Livro na pilha
    2 - Listar todos os Livros
    3 - Retirar Livro da pilha
    0 - Sair
  
************************************************************\n${colors.reset}`);
  }

  function capitalize(word: string): string {
    const words = word.split(" ");

    return words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
  }
}

main();
