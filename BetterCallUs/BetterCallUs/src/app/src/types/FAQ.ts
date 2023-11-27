export default class topico {
    public id: string;
    public titulo: string;
    public descricao: string;
  
    constructor(titulo: string, descricao: string, id: string) {
      this.id = id;
      this.titulo = titulo;
      this.descricao = descricao;
    }
  }
  