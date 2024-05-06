import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { cadastrar } from '../../store/reducers/contato'
import Botao from '../Botao'
import * as S from './styles'
import * as enums from '../../utils/enums/botao'
import * as enums2 from '../../utils/enums/filtro'
import formataTelefone from '../../utils/functions/mascaraTelefone'

const Formulario = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [categorias, setCategorias] = useState<enums2.Categoria[]>([])

  const identificaCategoria = (
    e: React.ChangeEvent<HTMLInputElement>
  ): enums2.Categoria => {
    switch (e.target.value) {
      case enums2.Categoria.FAVORITO:
        return enums2.Categoria.FAVORITO
      case enums2.Categoria.TRABALHO:
        return enums2.Categoria.TRABALHO
      default:
        return enums2.Categoria.FAMILIA
    }
  }

  const adicionarCategorias = (e: React.ChangeEvent<HTMLInputElement>) => {
    let categoriasTemp = categorias

    const categoria = identificaCategoria(e)

    if (e.target.checked) {
      categoriasTemp.push(categoria)
    } else {
      categoriasTemp = categoriasTemp.filter((c) => c !== categoria)
    }

    setCategorias(categoriasTemp)
  }

  const cadastrarNovoContato = (event: FormEvent) => {
    event.preventDefault()
    console.log('Formulário submetido')

    dispatch(
      cadastrar({
        nome: nome,
        email: email,
        telefone: telefone,
        categoria: categorias
      })
    )

    navigate('/')
  }

  return (
    <S.Form onSubmit={cadastrarNovoContato}>
      <S.Titulo>Novo contato {formataTelefone('11964204765')}</S.Titulo>
      <S.Campo>
        <label htmlFor="nome">Nome completo: </label>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome Completo"
          required
        />
      </S.Campo>
      <S.Campo>
        <label htmlFor="email">E-mail: </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@exemplo.com"
          required
        />
      </S.Campo>
      <S.Campo>
        <label htmlFor="tel">Telefone(Celular): </label>
        <input
          type="tel"
          id="tel"
          value={telefone}
          onChange={(e) => setTelefone(formataTelefone(e.target.value))}
          placeholder="(DD) 00000-0000"
          maxLength={11}
          required
        />
      </S.Campo>
      <div>
        <S.FiltrosTitulo>Adicionar aos filtros:</S.FiltrosTitulo>
        <S.Filtro>
          <input
            type="checkbox"
            id="favorito"
            value={enums2.Categoria.FAVORITO}
            onChange={adicionarCategorias}
          />
          <label htmlFor="favorito">Favorito</label>
        </S.Filtro>
        <S.Filtro>
          <input
            type="checkbox"
            id="trabalho"
            value={enums2.Categoria.TRABALHO}
            onChange={adicionarCategorias}
          />
          <label htmlFor="trabalho">Trabalho</label>
        </S.Filtro>
        <S.Filtro>
          <input
            type="checkbox"
            id="familia"
            value={enums2.Categoria.FAMILIA}
            onChange={adicionarCategorias}
          />
          <label htmlFor="familia">Família</label>
        </S.Filtro>
      </div>
      <Botao tipo={enums.TipoBotao.POSITIVO}>Cadastrar</Botao>
      <Botao
        tipo={enums.TipoBotao.NEGATIVO}
        onClick={(e) => {
          e.preventDefault()
          navigate('/')
        }}
      >
        Cancelar
      </Botao>
    </S.Form>
  )
}

export default Formulario
