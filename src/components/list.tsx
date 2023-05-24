import { User } from "../services"

const ListUsers = ({ users }: { users: User[] }) => {
    return (
        <>
            {users.map((user) => (
                <div key={user.id} className="user">
                    <img className='user-avatar' src={user.avatar} alt={user.name} />
                    <div className="user-info">
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ListUsers