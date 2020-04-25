import React from 'react';
// import Form from 'reactstrap';

const NewTicket = (props) => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"> </input>
                </div>
            </form>        
        </div>
    )
}

export default NewTicket;