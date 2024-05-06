import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Botao from '../Botao'
import * as S from './styles'
import * as enums from '../../utils/enums/botao'
import { editar, remover } from '../../store/reducers/contato'
import formataTelefone, {
  numerosTelefone
} from '../../utils/functions/mascaraTelefone'

type Props = {
  nome: string
  email: string
  telefone: string
}

const ContatoCard = ({
  nome,
  email: emailOriginal,
  telefone: telefoneOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  useEffect(() => {
    if (emailOriginal.length >= 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  useEffect(() => {
    if (telefoneOriginal.length >= 0) {
      setTelefone(formataTelefone(telefoneOriginal))
    }
  }, [telefoneOriginal])

  return (
    <S.ContatoCard>
      <S.ContatoNome>
        {editando && <em>Editando: </em>}
        {nome}
      </S.ContatoNome>
      <S.ContatoDados>
        <S.ContatoLabel $editando={editando} htmlFor="email">
          E-mail:
        </S.ContatoLabel>
        <S.ContatoEmail
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          disabled={!editando}
          $editando={editando}
        />
      </S.ContatoDados>
      <S.ContatoDados>
        <S.ContatoLabel $editando={editando} htmlFor="tel">
          Telefone:
        </S.ContatoLabel>
        <S.ContatoTelefone
          value={telefone}
          onChange={(e) => setTelefone(formataTelefone(e.target.value))}
          id="tel"
          disabled={!editando}
          $editando={editando}
          maxLength={11}
        />
      </S.ContatoDados>
      {editando ? (
        <>
          <Botao
            tipo={enums.TipoBotao.POSITIVO}
            onClick={() => {
              dispatch(editar({ nome, email, telefone }))
              setTelefone(formataTelefone(telefone))
              setEditando(false)
            }}
          >
            Salvar
          </Botao>
          <Botao
            tipo={enums.TipoBotao.NEGATIVO}
            onClick={() => {
              setEditando(false)
              setEmail(emailOriginal)
              setTelefone(formataTelefone(telefoneOriginal))
            }}
          >
            Cancelar
          </Botao>
        </>
      ) : (
        <>
          <Botao
            tipo={enums.TipoBotao.NEUTRO}
            onClick={() => {
              setEditando(true)
              setTelefone(numerosTelefone(telefone))
            }}
          >
            Editar
          </Botao>
          <Botao
            tipo={enums.TipoBotao.NEGATIVO}
            onClick={() => dispatch(remover(nome))}
          >
            Remover
          </Botao>
        </>
      )}
    </S.ContatoCard>
  )
}

export default ContatoCard
