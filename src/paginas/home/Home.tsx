import { Link } from 'react-router-dom';
import homeLogo from '../../assets/img/homeFogoGelo.png'
import ListaPostagens from '../../postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../postagens/modalPostagem/ModalPostagem';
import './Home.css';


function Home() {
  return (
      <>
      <div className="bg-slate-950 flex justify-center">
        <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center text-white pb-4 pl-4 pr-4'>
          <div className="flex flex-col gap-4 items-center justify-center p-1">
            <h2 className='text-5xl font-bold text-center'>Um Blog de Gelo e Fogo</h2>
            <h2 className='text-3xl'>❄️🔥</h2>
            <p className='text-xl text-center'>Entre nas muralhas da sua imaginação e explore um reino de pensamentos, reflexões e paixões que ecoam pelos corredores das nossas mentes.</p>
            <p className='text-xl font-semibold'>Dracarys! 🔥🐲</p>
            <div className="flex justify-around gap-4">
            <ModalPostagem />
              <Link to={'/postagens'} className='border rounded px-4 py-2 text-center hover:bg-white hover:text-slate-950'>Ver postagens</Link>
            </div>
            </div>
  
            <div className="flex flex-col gap-4 items-center justify-center p-1">
              <img src={homeLogo} alt="Foto ilustrativa de Gelo e Fogo" className="hidden md:block"/>
            </div>
          </div>
        </div>
        <div>
        <ListaPostagens />
        </div>
      </>
    );
}

export default Home;