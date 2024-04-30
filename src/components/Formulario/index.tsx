import { BtnSalvar, FomularioStyle, Input } from './styles'

const Formulario = () => {
  return (
    <div>
      <span>Adicionar Novo Contato: </span>
      <FomularioStyle>
        <Input placeholder="Nome do contato" type="text" />
        <Input placeholder="Email" type="text" />
        <Input placeholder="Número" type="number" />
        <BtnSalvar type="submit">Salvar</BtnSalvar>
      </FomularioStyle>
    </div>
  )
}

export default Formulario
