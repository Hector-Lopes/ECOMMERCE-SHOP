import { FunctionComponent, useState } from 'react'

interface AppProps {
  message: string
}

const App = ({ message }: AppProps) => {
  const [name, Setname] = useState<string>('')

  return <h1>{message}</h1>
}

// const App: FunctionComponent<AppProps> = ({ message }) => {
//   return <h1>{message}</h1>
// }

export default App
