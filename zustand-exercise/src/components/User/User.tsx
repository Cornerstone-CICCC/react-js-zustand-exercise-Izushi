import { useState } from "react"
import { useUserStore } from "../../stores/user.store"

const User = () => {
  const { users, addUser, deleteUser } = useUserStore()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState(0)

  const handleAddUser = () => {
    
  }


  return (
    <div>
      <h2>Users</h2>
      <h3>Add User</h3>
      <form onSubmit={handleAddUser}>
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
        <input type="text" value={age} onChange={e => setAge(Number(e.target.value))} />
        <button type="submit">Add User</button>
      </form>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.firstName} {user.lastName} ({user.age} years old)
            <button onClick={() => deleteUser(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default User