import Pagina from '@/components/Pagina'
import React from 'react'
import { Alert } from 'react-bootstrap'

const alertas = () => {
    return (
        <Pagina>
            <h1>Alertas</h1>

            <Alert>Atenção:  Isto é um alerta!</Alert>

            <Alert variant='danger'>Atenção:  Isto é um alerta!</Alert>

            <Alert variant='success'>Atenção:  Isto é um alerta!</Alert>

            <Alert variant='warning'>Atenção:  Isto é um alerta!</Alert>
        </Pagina>
    )
}

export default alertas
