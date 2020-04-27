import React from 'react';
// import Form from 'reactstrap';

const NewTicket = (props) => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label for="subjectInput">Subject</label>
                    <input type="text" className="form-control" id="subjectInput" placeholder="Title of the Issue"/> 
                </div>

                <div className="form-group">
                    <label for="emailInput">Email address</label>
                    <input type="email" className="form-control" id="emailInput" placeholder="name@example.com"/> 
                </div>
                
                <div className="form-group">
                    <label for="exampleFormControlSelect1">Category</label>
                    <select className="form-control" id="exampleFormControlSelect1">
                        <option>IT</option>
                        <option>Billing</option>
                        <option>Development</option>
                        <option>Sales</option>
                        <option>Other</option>
                    </select>
                </div>
                
                <div className="form-group">
                    <label for="descriptionTextArea">Description of the Issue</label>
                    <textarea className="form-control" id="descriptionTextArea" rows="3"></textarea>
                </div>
            </form>        
        </div>
    )
}

export default NewTicket;