import styled from 'styled-components'
import _var from '../../styles/var'
import { Btn } from '../../styles'

export const DivContato = styled.div`
  border-bottom: 1px solid ${_var.light};
  font-size: 16px;
  margin: 10px 0;
  border-radius: 4px;
  padding: 20px;
`

export const DadosDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Dados = styled.span`
  font-size: 16px;
  margin-right: 10px;
`

export const BtnEditar = styled(Btn)`
  color: ${_var.medium};
  text-align: right;
  margin-right: 5px;
`
export const BtnRemover = styled(Btn)`
  color: red;
`
