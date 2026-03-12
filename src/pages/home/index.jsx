import { useState } from 'react' //
import './style.css'
import Trash from '../../assets/trash.png'

function Home() {
  const users = [{
    id: '123qwe',
    name: 'Washington',
    age: 33,
    email: 'Washingtongui@gmail.com',
  }, {
    id: '123rty',
    name: 'Lucas',
    age: 32,
    email: 'Lucas@gmail.com',
  }, {
    id: '134rty',
    name: 'João',
    age: 45,
    email: 'Joao@gmail.com',
  }
  ]

  return (
    <div className='container'>
      <form>
        <h1>CADASTRO DE USUÁRIOS</h1>
        <input placeholder='Nome' name='name' type="text" />
        <input placeholder='Idade' name='idade' type="number" />
        <input placeholder='E-mail' name='email' type="email" />
        <button type='button'>Cadastrar</button>
      </form>

      {users.map(user => (

        <div key={user.id} className='card'>
          <div>
            <p>Nome:  <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <div>
            <button>
              <img src={Trash} />
            </button>
          </div>
        </div>

      ))}

    </div>  


  )
}

export default Home
