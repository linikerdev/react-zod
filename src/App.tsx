import { useCallback, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { User, getUsers } from './services'

function App() {
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
      <hr />
      <div className="title"></div>
      <div className="users">
        {users && users.map((user: User) => (
          <div key={user.id} className="user">
            <img className='user-avatar' src={user.avatar} alt={user.name} />
            <div className="user-info">
              <div>{user.name}</div>
              <div>{user.email}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
