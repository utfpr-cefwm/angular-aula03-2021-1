/**
 * Artigo da Web (notícia, artigo opinativo, etc.).
 */
export interface Artigo {

  /**
   * Identificador único do artigo.
   */
  _id: number;

  /**
   * URL da imagem que ilustra o artigo.
   */
  imagem: string;

  /**
   * Título (curto) do artigo.
   */
  titulo: string;

  /**
   * Descrição/chamada do artigo (1 parágrafo aproximadamente).
   */
  descricao: string;

  /**
   * URL do artigo (para fins de linkagem).
   */
  url: string;

}
