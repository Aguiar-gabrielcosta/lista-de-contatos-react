import * as enums from '../utils/enums/filtro'

export type ContatoType = {
  nome: string
  email: string
  telefone: string
  categoria: enums.Categoria[]
}

class Contato {
  nome: string
  email: string
  telefone: string
  categoria: enums.Categoria[]

  constructor(
    nome: string,
    email: string,
    telefone: string,
    categoria: enums.Categoria[]
  ) {
    this.nome = nome
    this.email = email
    this.telefone = telefone
    this.categoria = categoria
  }

  getContato(): ContatoType {
    return {
      nome: this.nome,
      email: this.email,
      telefone: this.telefone,
      categoria: this.categoria
    }
  }
}

export default Contato
