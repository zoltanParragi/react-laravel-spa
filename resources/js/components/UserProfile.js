import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UserProfile() {
    const params = useParams()
    const [user, setUser] = useState({})
    const [response, setResponse] = useState(null)

    useEffect(() => {
        fetch('/api/user/' + params.id)
            .then(res => res.json())
            .then(user => {
                setUser(user);
            })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/api/useredit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(res => setResponse(res))
    }

    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    return (
        <div className='container'>
            <div className='row justify-content-center messages-wrapper mt-2 mb-2 px-4'>
                {response && <div className={'col-md-6 d-flex justify-content-center align-items-center ' + response.status} >
                    {response.status === 'success' && response.message}
                </div>}
            </div>
            <div className='row justify-content-center'>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">User</div>
                        <div className="card-body">
                            {user.id && <form onSubmit={handleSubmit}>
                                <label>Name: </label>
                                <input type="text" className="form-control" id="name" name="name" value={user.name} onChange={handleChange} />

                                <div className='d-flex align-items-center message'>
                                    {response && ((response.status === 'error' && response.message.name) && response.message.name)}
                                </div>

                                <label>Email: </label>
                                <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handleChange} />

                                <div className='d-flex align-items-center message'>
                                    {response && ((response.status === 'error' && response.message.email) && response.message.email)}
                                </div>
                                <button type="submit" className="btn btn-primary">Save</button>
                            </form>}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

