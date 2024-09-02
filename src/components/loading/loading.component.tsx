import { LoadingContainer } from './loading.styles'
import { SyncLoader } from 'react-spinners'

interface LoadingProps {
  message?: string
}

const Loading = ({ message }: LoadingProps) => {
  return (
    <LoadingContainer>
      {message}
      <SyncLoader size={30}></SyncLoader>
    </LoadingContainer>
  )
}

export default Loading
