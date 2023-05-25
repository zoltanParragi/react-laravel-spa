import { line } from 'laravel-mix/src/Log';
import { list } from 'postcss';
import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">User list</div>

                        <div className="card-body">
                            {users.map((e, i) => <li key={i}>{e.name}</li> )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
