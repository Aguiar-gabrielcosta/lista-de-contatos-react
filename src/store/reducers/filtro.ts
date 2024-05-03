import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/filtro'

type FiltroState = {
  termoPesquisa?: string
  categoria?: enums.Categoria | 'todos'
}

const initialState: FiltroState = {
  termoPesquisa: '',
  categoria: 'todos'
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alteraFiltro: (state, action: PayloadAction<FiltroState>) => {
      if (action.payload.termoPesquisa !== undefined) {
        state.termoPesquisa = action.payload.termoPesquisa
      }

      if (action.payload.categoria !== undefined) {
        state.categoria = action.payload.categoria
      }
    }
  }
})

export const { alteraFiltro } = filtroSlice.actions
export default filtroSlice.reducer
