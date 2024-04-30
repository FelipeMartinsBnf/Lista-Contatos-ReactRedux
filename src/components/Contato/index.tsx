import { Dados, DivContato, BtnEditar, DadosDiv, BtnRemover } from './styles'
import ContatoClass from '../../Models/contato'

type Props = ContatoClass
const Contato = ({ nome, numero, email, id }: Props) => {
  return (
    <DivContato>
      <h3>{nome}</h3>
      <DadosDiv>
        <Dados>{email}</Dados>
        <Dados>{numero}</Dados>
        <span>
          <BtnEditar>Editar </BtnEditar>
          <BtnRemover>Remover </BtnRemover>
        </span>
      </DadosDiv>
    </DivContato>
  )
}

export default Contato
