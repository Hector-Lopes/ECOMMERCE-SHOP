import { BsCart3 } from 'react-icons/bs'
import './header.css'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='header-items-container'>
        <h2 className='header-title'>CLUB CLOTHING</h2>
        <div className='header-items'>
          <div className='header-item'>Explorar</div>
          <div className='header-item'>Login</div>
          <div className='header-item'>Criar Conta</div>
          <div className='header-item'>
            <BsCart3 size={25}></BsCart3>
            <p style={{ marginLeft: 10 }}>5</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
