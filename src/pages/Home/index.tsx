import React from 'react'
// import { Link } from 'react-router-dom'

import { IoIosArrowBack } from 'react-icons/io'
import { RiLock2Line } from 'react-icons/ri'

import { Container, Back, Content } from './styles'

const App = () => (
    <React.Suspense fallback="Loading Button">
        <Container>
            <Back>
                <a href="https://staging.liviasaude.com.br/exames/resultados">
                    <IoIosArrowBack color="#083245" size={30} />
                </a>
            </Back>
            <Content>
                <h1>Conectar laboratório</h1>

                <p className="label">Laboratório</p>
                <input placeholder="Digite o nome do laboratório" type="text" />

                <div>
                    <RiLock2Line color="#ffcc00" size={22} />
                    <p className="info">
                        Esta é uma conexão segura.{' '}
                        <a
                            href="https://staging.liviasaude.com.br/politica_de_privacidade.html"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            Saiba mais.
                        </a>
                    </p>
                </div>
            </Content>
        </Container>
    </React.Suspense>
)

export default App
