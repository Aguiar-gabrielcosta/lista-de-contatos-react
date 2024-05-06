import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato, { ContatoType } from '../../models/Contato'
import * as enums from '../../utils/enums/filtro'

type ContatosState = {
  itens: ContatoType[]
}

const initialState: ContatosState = {
  itens: [
    new Contato(
      'gabriel aguiar da costa',
      'aguiar.gc@hotmail.com',
      '11964204765',
      [enums.Categoria.FAVORITO, enums.Categoria.FAMILIA]
    ).getContato(),
    new Contato('Fernando da Silva Costa', 'email@exemplo.com', '21924234242', [
      enums.Categoria.FAVORITO,
      enums.Categoria.TRABALHO
    ]).getContato(),
    new Contato(
      'Maria Clara Ferdinando Augustus',
      'email@exemplo.com',
      '85923452134',
      [enums.Categoria.FAVORITO, enums.Categoria.TRABALHO]
    ).getContato(),
    new Contato('João da Silva Costa', 'email@exemplo.com', '11964456324', [
      enums.Categoria.TRABALHO
    ]).getContato()
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    mostrarNoConsole: () => console.log(initialState.itens),
    remover: (state, action: PayloadAction<string>) => {
      state.itens = [
        ...state.itens.filter(
          (contato) =>
            contato.nome.toLowerCase() !== action.payload.toLowerCase()
        )
      ]
    },
    cadastrar: (state, action: PayloadAction<ContatoType>) => {
      const repitido = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (repitido) {
        alert(
          `O nome ${action.payload.nome} já consta na lista. Tente edita-lo ou remove-lo para a adição de novas informações.`
        )
      } else {
        state.itens.push(action.payload)
      }
    },
    editar: (state, action: PayloadAction<Omit<ContatoType, 'categoria'>>) => {
      const indexContatoEditado = state.itens.findIndex(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (indexContatoEditado >= 0) {
        state.itens[indexContatoEditado].email = action.payload.email
        state.itens[indexContatoEditado].telefone = action.payload.telefone
      }
    }
  }
})

export const { mostrarNoConsole, remover, cadastrar, editar } =
  contatosSlice.actions
export default contatosSlice.reducer
