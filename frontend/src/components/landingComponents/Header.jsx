
import Logo from '../../assets/logo.jpg'
const Header = () => {
  return (
    <div className='flex justify-between items-center px-3'>
    <img src={Logo} className='h-16 w-30 objet-cover ' alt="binbuddy logo" />
      <p>test1</p>
    </div>
  )
}

export default Header
