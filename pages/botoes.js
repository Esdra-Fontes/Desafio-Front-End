import Pagina from '@/components/Pagina'
import React from 'react'
import { Button } from 'react-bootstrap'

const botoes = () => {
    return (
        <Pagina>
            <h1>Botões</h1>

            <Button>Salvar</Button> {' '}

            <Button variant='danger'>Salvar</Button> {' '}

            <Button variant='success'>Salvar</Button> {' '}

            <Button variant='warning'>Salvar</Button> {' '}
        </Pagina>
    )
}

export default botoes
