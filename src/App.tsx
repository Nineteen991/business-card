import me from './images/me.jpg'
import qrcode from './images/qrcode.png'
import './App.sass'

export default function App() {
  return (
    <div className="business-card">
      <img src={ me } className='my-portrait' alt='My portrait' />
      <h1 className="title">Jason Alaniz</h1>
      <h1 className="title">Web3 Developer</h1>
      <a href='https://japortfolio.xyz/' className='website-link'>
        <img src={ qrcode } className='qrcode' alt='My website' />
      </a>
    </div>
  )
} 