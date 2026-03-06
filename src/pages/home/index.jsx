import { useState } from 'react' //
import './style.css'
import Trash from '../../assets/trash.png'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <form>
        <h1>CADASTRO DE USUÁRIOS</h1>
        <input name='name' type="text" />
        <input name='idade' type="number" />
        <input name='email' type="email" />
        <button type='button'>Cadastrar</button>
      </form>

      <div>
        <div>
          <p>Nome: </p>
          <p>Idade: </p>
          <p>Email: </p>
        </div>
        <div>
          <button>
            <img src={Trash}/>
          </button>
        </div>
      </div>
    </div>


  )
}

export default Home
