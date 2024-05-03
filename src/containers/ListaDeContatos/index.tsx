import { useSelector } from 'react-redux'
import ContatoCard from '../../components/ContatoCard'
import * as S from './styles'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <S.ListaDeContatos>
      <ul>
        {itens.map((contato) => (
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
