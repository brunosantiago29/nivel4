import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'O poder do hábito',
      resumo: 'Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi promovida. Em um laboratório, neurologistas descobriram que os padrões dentro do cérebro dela mudaram de maneira fundamental. Publicitários da Procter & Gamble observaram vídeos de pessoas fazendo a cama. Tentavam desesperadamente descobrir como vender um novo produto chamado Febreze, que estava prestes a se tornar um dos maiores fracassos na história da empresa. De repente, um deles detecta um padrão quase imperceptível - e, com uma sutil mudança na campanha publicitária, Febreze começa a vender um bilhão de dólares por anos. Um diretor executivo pouco conhecido assume uma das maiores empresas norte-americanas. Seu primeiro passo é atacar um único padrão entre os funcionários - a maneira como lidam com a segurança no ambiente de trabalho -, e logo a empresa começa a ter o melhor desempenho no índice Dow Jones.',
      autores: ['Charles Duhigg', ' Rafael Mantovan']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'A arte da guerra',
      resumo: 'A guerra é um assunto de importância vital para o Estado; o reino da vida ou da morte; o caminho para a sobrevivência ou a ruína. É indispensável estudá-la profundamente.',
      autores: ['Sun Tzu',]
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Não há dia fácil',
      resumo: 'Não há dia fácil é um retrato da vida nas equipes do Seal e o único relato interno sobre a Operação Lança de Netuno, realizada em 1o. de maio de 2011, que resultou na morte do terrorista Osama bin Laden. Desde a pane no helicóptero Black Hawk - que quase fez com que a missão fosse abortada - até o comunicado pelo rádio via satélite confirmando que o alvo estava morto, a operação dos vinte e quatro homens na propriedade secreta de Bin Laden é recontada em mínimos detalhes. Das ruas de Badgá ao resgate do capitão Richard Phillips no oceano Índico; das montanhas ao leste de Cabul ao terceiro andar do esconderijo de Osama bin Laden em Abbottabad, no Paquistão.',
      autores: ['Mark Owen','Kevin Maurer ',]
    }
  ];

  constructor() { }

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = this.livros.length > 0
      ? this.livros[this.livros.length -1].codigo + 1
      : 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      this.livros.splice(index, 1);
    }
  }
}
