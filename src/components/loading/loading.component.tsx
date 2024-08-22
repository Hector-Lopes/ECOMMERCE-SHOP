import { LoadingContainer } from './loading.styles'
import { SyncLoader } from 'react-spinners'
const Loading = () => {
  return (
    <LoadingContainer>
      <SyncLoader size={30}></SyncLoader>
    </LoadingContainer>
  )
}

export default Loading
