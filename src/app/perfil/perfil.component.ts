import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


interface Categoria {
  id: number;
  nome: string;
  icone: string;
  quantidade: number;
}

interface Produto {
  id: number;
  nome: string;
  categoria: string;
  categoriaId: number;
  preco: number;
  precoOriginal?: number;
  imagem: string;
  descricao: string;
  estoque: number;
  vendas: number;
  status?: 'destaque' | 'novo' | 'promocao';
}

interface DashboardData {
  vendas: number;
  vendasVariacao: number;
  receita: number;
  receitaVariacao: number;
  visitas: number;
  visitasVariacao: number;
  avaliacao: number;
  avaliacaoVariacao: number;
}

interface Avaliacao {
  id: number;
  cliente: string;
  avatar: string;
  estrelas: number;
  data: string;
  produtoId: number;
  produtoNome: string;
  comentario: string;
  fotos?: string[];
  resposta?: string;
}

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements OnInit {
  activeTab: string = 'produtos';
  categorias: Categoria[] = [];
  produtos: Produto[] = [];
  produtosFiltrados: Produto[] = [];
  categoriaAtiva: number | null = null;
  currentPage: number = 1;
  totalPages: number = 1;
  itemsPerPage: number = 8;
  
  // Dashboard
  periodoAtivo: string = 'mes';
  dashboardData: DashboardData = {
    vendas: 0,
    vendasVariacao: 0,
    receita: 0,
    receitaVariacao: 0,
    visitas: 0,
    visitasVariacao: 0,
    avaliacao: 0,
    avaliacaoVariacao: 0
  };
  
  // Avaliações
  avaliacoes: Avaliacao[] = [];
  avaliacoesPage: number = 1;
  avaliacoesTotalPages: number = 1;
  
  // Expor Math para usar no template
  Math = Math;
  
  constructor() { }
  
  ngOnInit(): void {
    this.carregarCategorias();
    this.carregarProdutos();
    this.carregarDashboard();
    this.carregarAvaliacoes();
  }
  
  changeTab(tab: string): void {
    this.activeTab = tab;
  }
  
  carregarCategorias(): void {
    // Simulação de dados de categorias
    this.categorias = [
      {
        id: 1,
        nome: 'Acessórios',
        icone: '/perfil/acessorios.jpeg',
        quantidade: 84
      },
      {
        id: 2,
        nome: 'Rações',
        icone: '/Perfil/racoes.jpeg',
        quantidade: 64
      },
      {
        id: 3,
        nome: 'Camas e Tocas',
        icone: '/Perfil/camas.jpeg',
        quantidade: 22
      },
      {
        id: 4,
        nome: 'Higiene',
        icone: '/Perfil/higiene.jpeg',
        quantidade: 16
      }
      
    ];
  }
  
  carregarProdutos(): void {
    // Simulação de dados de produtos
    this.produtos = [
      {
        id: 1,
        nome: 'Coleira Premium para Cães',
        categoria: 'Acessórios',
        categoriaId: 1,
        preco: 49.90,
        precoOriginal: 69.90,
        imagem: '/Perfil/coleira.jpeg',
        descricao: 'Coleira premium para cães de todos os tamanhos, feita com material resistente e confortável.',
        estoque: 25,
        vendas: 42,
        status: 'destaque'
      },
      {
        id: 2,
        nome: 'Ração Premium para Gatos Adultos',
        categoria: 'Rações',
        categoriaId: 2,
        preco: 89.90,
        imagem: '/Perfil/racao.jpeg',
        descricao: 'Ração premium para gatos adultos, rica em nutrientes essenciais para a saúde do seu pet.',
        estoque: 18,
        vendas: 36
      },
      {
        id: 3,
        nome: 'Cama Redonda para Cães',
        categoria: 'Camas e Tocas',
        categoriaId: 3,
        preco: 129.90,
        precoOriginal: 159.90,
        imagem: '/Perfil/cama.jpeg',
        descricao: 'Cama redonda super macia e confortável para cães de todos os tamanhos.',
        estoque: 12,
        vendas: 28,
        status: 'promocao'
      },
      {
        id: 4,
        nome: 'Coleira Estampada para Gatos',
        categoria: 'Acessórios',
        categoriaId: 1,
        preco: 34.90,
        imagem: '/Perfil/coleiraGato.jpeg',
        descricao: 'Coleira charmosa com estampa divertida, pensada para conforto e estilo dos felinos.',
        estoque: 30,
        vendas: 22
      },
      {
        id: 5,
        nome: 'Brinquedo Interativo para Gatos',
        categoria: 'Brinquedos',
        categoriaId: 1,
        preco: 59.90,
        imagem: '/Perfil/brinquedo.jpeg',
        descricao: 'Brinquedo interativo para estimular a atividade física e mental do seu gato.',
        estoque: 15,
        vendas: 19,
        status: 'novo'
      },
      {
        id: 6,
        nome: 'Ração Premium para Cães Filhotes',
        categoria: 'Rações',
        categoriaId: 2,
        preco: 99.90,
        imagem: '/Perfil/racao_1.jpeg',
        descricao: 'Ração premium para cães filhotes, rica em proteínas e nutrientes para o desenvolvimento saudável.',
        estoque: 22,
        vendas: 31
      },
      {
        id: 7,
        nome: 'Snack Saudável para Cães',
        categoria: 'Rações',
        categoriaId: 2,
        preco: 12.99,
        precoOriginal: 12.99,
        imagem: '/Perfil/petisco.jpeg',
        descricao: 'Petisco natural e nutritivo, ideal como recompensa no adestramento ou mimo diário.',
        estoque: 8,
        vendas: 15,
        status: 'promocao'
      },
      {
        id: 8,
        nome: 'Garrafa Portátil de Água para Pets',
        categoria: 'Acessórios',
        categoriaId: 1,
        preco: 29.99,
        imagem: '/Perfil/garrafa.jpeg',
        descricao: 'Ideal para passeios, essa garrafa mantém seu pet hidratado com praticidade.',
        estoque: 0,
        vendas: 27
      },
      {
        id: 9,
        nome: 'Cama Portátil para Viagens',
        categoria: 'Camas e Tocas',
        categoriaId: 3,
        preco: 199.90,
        imagem: '/Perfil/camaPequena.jpeg',
        descricao: 'Leve e dobrável, essa caminha é ideal para viagens e deslocamentos com seu pet.',
        estoque: 5,
        vendas: 12,
        status: 'destaque'
      },
      {
        id: 10,
        nome: 'Brinquedo em formato de osso, resistente e atrativo para cães.',
        categoria: 'Brinquedos',
        categoriaId: 1,
        preco: 10.99,
        imagem: '/Perfil/osso.jpeg',
        descricao: 'Brinquedo em formato de osso, resistente e atrativo para cães.',
        estoque: 35,
        vendas: 48
      }
    ];
    
    // Inicializa produtos filtrados com todos os produtos
    this.produtosFiltrados = [...this.produtos];
    this.calcularTotalPages();
  }
  
  carregarDashboard(): void {
    // Simulação de dados do dashboard
    const dashboardPorPeriodo = {
      hoje: {
        vendas: 8,
        vendasVariacao: 14.3,
        receita: 450.70,
        receitaVariacao: 12.5,
        visitas: 120,
        visitasVariacao: 8.2,
        avaliacao: 4.7,
        avaliacaoVariacao: 0
      },
      semana: {
        vendas: 42,
        vendasVariacao: 7.8,
        receita: 2350.90,
        receitaVariacao: 9.2,
        visitas: 780,
        visitasVariacao: 5.6,
        avaliacao: 4.8,
        avaliacaoVariacao: 2.1
      },
      mes: {
        vendas: 186,
        vendasVariacao: 15.2,
        receita: 9870.50,
        receitaVariacao: 18.7,
        visitas: 3450,
        visitasVariacao: 12.3,
        avaliacao: 4.8,
        avaliacaoVariacao: 4.3
      },
      ano: {
        vendas: 2240,
        vendasVariacao: 32.5,
        receita: 118650.80,
        receitaVariacao: 28.9,
        visitas: 42000,
        visitasVariacao: 45.2,
        avaliacao: 4.7,
        avaliacaoVariacao: 6.8
      }
    };
    
    this.dashboardData = dashboardPorPeriodo[this.periodoAtivo as keyof typeof dashboardPorPeriodo];
  }
  
  carregarAvaliacoes(): void {
    // Simulação de dados de avaliações
    this.avaliacoes = [
      {
        id: 1,
        cliente: 'Maria Silva',
        avatar: 'assets/images/avatar-maria.jpg',
        estrelas: 5,
        data: '15/05/2025',
        produtoId: 1,
        produtoNome: 'Coleira Premium para Cães',
        comentario: 'Produto excelente! Meu cachorro adorou a coleira, muito confortável e resistente. Recomendo a todos.',
        fotos: ['assets/images/avaliacao-foto1.jpg', 'assets/images/avaliacao-foto2.jpg'],
        resposta: 'Olá Maria! Muito obrigado pela sua avaliação. Ficamos felizes que você e seu pet gostaram do produto!'
      },
      {
        id: 2,
        cliente: 'João Oliveira',
        avatar: 'assets/images/avatar-joao.jpg',
        estrelas: 4,
        data: '10/05/2025',
        produtoId: 3,
        produtoNome: 'Cama Redonda para Cães',
        comentario: 'Cama muito boa, meu cachorro adorou. Só achei um pouco menor do que esperava, mas a qualidade é ótima.',
        fotos: ['assets/images/avaliacao-foto3.jpg']
      },
      {
        id: 3,
        cliente: 'Ana Santos',
        avatar: 'assets/images/avatar-ana.jpg',
        estrelas: 5,
        data: '05/05/2025',
        produtoId: 5,
        produtoNome: 'Brinquedo Interativo para Gatos',
        comentario: 'Meu gato não para de brincar com esse brinquedo! Foi a melhor compra que fiz para ele. Material de ótima qualidade.',
        resposta: 'Olá Ana! Agradecemos sua avaliação. É muito gratificante saber que seu gatinho está se divertindo com nosso produto!'
      }
    ];
    
    this.avaliacoesTotalPages = 1;
  }
  
  filtrarPorCategoria(categoriaId: number | null): void {
    this.categoriaAtiva = categoriaId;
    
    if (categoriaId === null) {
      this.produtosFiltrados = [...this.produtos];
    } else {
      this.produtosFiltrados = this.produtos.filter(produto => produto.categoriaId === categoriaId);
    }
    
    this.currentPage = 1;
    this.calcularTotalPages();
  }
  
  calcularTotalPages(): void {
    this.totalPages = Math.ceil(this.produtosFiltrados.length / this.itemsPerPage);
  }
  
  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
  
  mudarPeriodo(periodo: string): void {
    this.periodoAtivo = periodo;
    this.carregarDashboard();
  }
  
  changeAvaliacoesPage(page: number): void {
    if (page >= 1 && page <= this.avaliacoesTotalPages) {
      this.avaliacoesPage = page;
    }
  }
  
  // Métodos para gerenciamento de produtos
  adicionarProduto(): void {
    console.log('Adicionar novo produto');
  }
  
  editarProduto(produtoId: number): void {
    console.log('Editar produto:', produtoId);
  }
  
  excluirProduto(produtoId: number): void {
    console.log('Excluir produto:', produtoId);
  }
  
  // Métodos para avaliações
  responderAvaliacao(avaliacaoId: number, resposta: string): void {
    console.log('Responder avaliação:', avaliacaoId, resposta);
  }
}
