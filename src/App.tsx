import React from 'react'

import Routes from './router'

import { Theme, ThemeProvider } from 'theme-ui'
import theme from './theme'

const ApolloClientContainer = React.lazy(() => import('livia_container/ApolloClientContainer'))

const App = () => (
    <React.Suspense fallback={<h6>Loading Microfrontends</h6>}>
        <ThemeProvider theme={theme as Theme}>
            <ApolloClientContainer>
                <Routes />
            </ApolloClientContainer>
        </ThemeProvider>
    </React.Suspense>
)

export default App
