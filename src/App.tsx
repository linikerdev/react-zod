import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { getUsers } from './services'

function App() {
  const [users, setUsers] = useState([])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callRequest = async () => {
    const result = await getUsers()
    if (result) {
      setUsers(result.data)
    }
    return false
  }

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
        {users && users.map((user) => (
          <div key={user.id} className="user">
            <img className='user-avatar' src={user.avatar} alt={user.username} />
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
