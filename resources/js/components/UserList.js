import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function UserList() {
    const [users, setUsers] = useState([])
    const [response, setResponse] = useState(null)

    useEffect(() => {
        fetch('/api/users')
            .then(res => res.json())
            .then(list => {
                setUsers(list);
            })
    }, [response])

    const deleteUser = (id) => {
        fetch('/api/userdelete/' + id)
            .then(res => res.json())
            .then(res => setResponse(res))
    }

    return (
        <>
            <div className="container">
                <div className='row justify-content-center messages-wrapper mt-2 mb-2 px-4'>
                    {response && <div className={'col-md-4 d-flex justify-content-center align-items-center ' + response.status} >
                        {response.status === 'success' && response.message}
                    </div>}
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">User list</div>

                            <div className="card-body">
                                {users.length > 0 && users.map((e, i) => <li key={i}>
                                    {e.name}
                                    {' '} <Link to={`/dynamic/profile/${e.id}`}><button>Change user data</button></Link>
                                    {' '} <button onClick={() => deleteUser(e.id)}>Delete user</button>
                                </li>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

