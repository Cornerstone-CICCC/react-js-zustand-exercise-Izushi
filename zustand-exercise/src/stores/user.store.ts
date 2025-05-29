import { create } from "zustand"
import { persist } from "zustand/middleware"
import { v4 as uuidv4 } from 'uuid'

type User = {
  id: string
  firstName: string
  lastName: string
  age: number
  hobbies: string[]
}

type UserStore = {
  users: User[],
  addUser: (user: User) => void,
  deleteUser: (id: string) => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      users: [],
      addUser: (user) => {
        const newUser = { ...user, id: uuidv4() }
        set((state) => ({ users: [...state.users, newUser] }))
      },
      deleteUser: (id) => {
        set((state) => ({
          users: state.users.filter(user => user.id !== id)
        }))
      }
    }),
    {
      name: 'user-storage'
    }
  )
)