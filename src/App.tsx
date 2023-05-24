import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { User, getUsers } from './services'
import ListUsers from './components/list'
import Form from './components/form'

function App() {
  const [isList, setIsList] = useState<boolean>(true)
  const [users, setUsers] = useState<User[]>([])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callRequest = useCallback(async () => {
    const result: User[] = await getUsers()
    if (result) {
      setUsers(result)
    }
    return false
  }, [])

  useEffect(() => {
    callRequest()
  }, [callRequest])

  return (
    <>
      <div>
        <a href="https://raw.githubusercontent.com/colinhacks/zod/HEAD/logo.svg" target="_blank">
          <img src="https://raw.githubusercontent.com/colinhacks/zod/HEAD/logo.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>ZOD + React</h1>

      <div className="createUser">
        {isList ? <button onClick={() => setIsList(false)}>Novo Usuário</button> : <button onClick={() => setIsList(true)}> Lista de Usuário</button>}


      </div >

      <hr />
      <div className="title"></div>
      <div className="users">
        {isList ? <ListUsers users={users} /> : <Form />}
      </div>
    </>
  )
}

export default App
