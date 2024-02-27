import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext } from 'react'



function Navbar() {
  const navigate = useNavigate()

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    alert('Usuário deslogado com sucesso')
    navigate('/login')
  }

  let navbarComponent

  if (usuario.token !== "") {
    navbarComponent = (
      <div className='w-full bg-indigo-900 text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase hover:font-extrabold'>Blog Pessoal</Link>

          <div className='flex gap-4'>
            <Link to='/postagens' className='hover:font-bold'>Postagens</Link>
            <Link to='/temas' className='hover:font-bold'>Temas</Link>
            <Link to='/cadastroTema' className='hover:font-bold'>Cadastrar tema</Link>
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