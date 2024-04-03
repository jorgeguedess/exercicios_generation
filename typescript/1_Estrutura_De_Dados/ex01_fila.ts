import readlineSync from "readline-sync";

import { Queue } from "./class/Queue";
import { colors } from "./utils/Colors";

function main() {
  const fila = new Queue<string>();

  do {
    exibirMenu();

    let opcao = readlineSync.questionInt("Entre com a opção desejada: ", {
      limitMessage: `${colors.fg.redstrong}Opção inválida. Digite de 0 a 3!\n${colors.reset}`,
    });
    switch (opcao) {
      case 1:
        let nome = readlineSync.question("\nNome do Cliente: ");
        if (!nome) {
          console.log(
            `${colors.fg.redstrong}Ocorreu um erro ao tentar adicionar o cliente${colors.reset}`
          );

          keyPress();
          break;
        }

        nome = capitalize(nome);
        adicionarCliente(nome);

        console.log(`\n${colors.fg.yellowstrong}Fila:${colors.reset}\n`);

        listarClientes(fila);
        console.log(
          `\n${colors.fg.greenstrong}Cliente Adicionado!${colors.reset}`
        );

        keyPress();
        break;
      case 2:
        if (!fila.isEmpty())
          console.log(
            `\n${colors.fg.yellowstrong}Lista de Clientes na Fila\n${colors.reset}`
          );
        listarClientes(fila);

        keyPress();
        break;
      case 3:
        retirarCliente(fila);

        if (!fila.isEmpty()) {
          console.log(`\n${colors.fg.yellowstrong}Fila:${colors.reset}\n`);
          listarClientes(fila);
          console.log(
            `\n${colors.fg.greenstrong}O Cliente foi Chamado!${colors.reset}`
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

  function adicionarCliente(nome: string): void {
    fila.enqueue(nome);
  }

  function listarClientes(fila: Queue<string>): void {
    if (fila.isEmpty()) {
      console.log(`\n${colors.fg.red}A Fila está vazia${colors.reset}`);
      return;
    }

    fila.printQueue();
  }

  function retirarCliente(fila: Queue<string>) {
    fila.dequeue();
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
      
    1 - Adicionar Cliente na Fila
    2 - Listar todos os Clientes
    3 - Retirar Cliente da Fila
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
