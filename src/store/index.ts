import { configureStore } from '@reduxjs/toolkit'
import contatosReducer from './reducers/contato'
import filtrosReducer from './reducers/filtro'

export type RootReducer = ReturnType<typeof store.getState>

const store = configureStore({
  reducer: {
    contatos: contatosReducer,
    filtros: filtrosReducer
  }
})

export default store
