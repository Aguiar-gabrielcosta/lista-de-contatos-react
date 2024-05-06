import { useSelector } from 'react-redux'
import ContatoCard from '../../components/ContatoCard'
import * as S from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { termoPesquisa, categoria } = useSelector(
    (state: RootReducer) => state.filtros
  )

  const filtraContatos = () => {
    let contatosFiltrados = itens

    if (termoPesquisa !== undefined) {
      contatosFiltrados = contatosFiltrados.filter(
        (contato) =>
          contato.nome.toLowerCase().search(termoPesquisa.toLowerCase()) >= 0
      )
    }

    if (categoria !== 'todos' && categoria !== undefined) {
      contatosFiltrados = contatosFiltrados.filter((contato) =>
        contato.categoria.includes(categoria)
      )
    }

    return contatosFiltrados
  }

  const contatos = filtraContatos()

  return (
    <S.ListaDeContatos>
      <ul>
        {contatos.map((contato) => (
          <li key={contato.nome}>
            <ContatoCard
              nome={contato.nome}
              email={contato.email}
              telefone={contato.telefone}
            />
          </li>
        ))}
      </ul>
    </S.ListaDeContatos>
  )
}

export default ListaDeContatos
