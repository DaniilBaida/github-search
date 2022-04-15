import { useEffect, useState } from "react"
import Spinner from "../layout/Spinner"
import UserItem from "../users/UserItem"

function UserResults() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const response = await fetch(`https://api.github.com/users`, {})

    const data = await response.json()

    setUsers(data)
    setLoading(false)
  }
  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 text-white">
        {users.map((user) => (
          <h3>
            <UserItem key={user.id} user={user} />
          </h3>
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default UserResults
