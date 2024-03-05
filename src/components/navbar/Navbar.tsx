import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'
import { toastAlerta } from '../../utils/toastAlerta'
import navLogo from '../../assets/img/homeFogoGelo.png'


function Navbar() {
  const navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    toastAlerta('Usuário deslogado com sucesso', 'sucesso')
    navigate('/login')
  }

  let navbarComponent

  if (usuario.token !== "") {
    navbarComponent = (
      <div className='w-full bg-slate-950 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/home' className='w-1/12'>
          <img src={navLogo} alt="Foto ilustrativa de Gelo e Fogo" />
          </Link>

          <div className='flex items-center gap-7 text-1xl'>
            <Link to='/postagens' className='hover:font-bold'>Postagens</Link>
            <Link to='/temas' className='hover:font-bold'>Temas</Link>
            <Link to='/cadastroTema' className='text-center hover:font-bold'>Cadastrar tema</Link>
            <Link to='/perfil' className='hover:font-bold'>Perfil</Link>
            <Link to='' onClick={logout} className='hover:font-bold'>Sair</Link>

          </div>
        </div>
      </div>
    )
  }
  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar;