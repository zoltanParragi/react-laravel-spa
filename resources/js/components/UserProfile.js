import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UserProfile() {
    const params = useParams()
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch('/api/user/'+params.id)
            .then(res => res.json())
            .then(user => {
                setUser(user);
            })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/api/useredit/'+params.id, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRF-TOKEN': token
            },
            body: JSON.stringify(user)
        }
        )
    }

    const handleChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value})
    }


    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">User</div>
                        {JSON.stringify(user)}
                        <div className="card-body">
                            {user.id && <form onSubmit = {handleSubmit}>
                                <label>Name: </label>
                                <input type="text" className="form-control" id="name" name="name" value = {user.name} onChange={handleChange} />
                                <br />
                                <label>Email: </label>
                                <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={handleChange}/>
                                <br />
                                <button type="submit" className="btn btn-primary">Save</button>
                            </form>}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

