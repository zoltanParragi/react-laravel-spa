import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function UserList() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('/api/users')
        .then(res => res.json())
        .then(list => {
            setUsers(list);
        })
    }, [])

  return (
    <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">User list</div>

                        <div className="card-body">
                            {users.length > 0 && users.map((e, i) => <li key={i}>
                                {e.name}
                                {' '} <Link to={`/dynamic/profile/${e.id}`}>Change user data</Link>
                                {' '} <Link to={`/dynamic/profile/${e.id}`}>Delete user</Link>
                            </li> )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

