import { FunctionComponent, useState } from 'react'
import Header from './components/header/header.component'

interface AppProps {
  message: string
}

const App = ({ message }: AppProps) => {
  const [name, Setname] = useState<string>('')

  return <Header></Header>
}

// const App: FunctionComponent<AppProps> = ({ message }) => {
//   return <h1>{message}</h1>
// }

export default App
