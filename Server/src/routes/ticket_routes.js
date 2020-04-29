const router = require('express').Router();
const Ticket = require('../models/ticket.model');

router.route('/').get((req, res) => {
    Ticket.find()
        .then(tickets => res.json(tickets))
        .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
    let today = new Date();
    let dueDate = new Date();
    dueDate.setDate(today.getDate()+5);

    const data = req.body;
    const createdBy = data.createdBy;
    const title = data.title;
    const description = data.description;
    const status = data.status;
    const priority = Number(data.priority);
    const category = data.category;
    const lastModified = today;

    const newTicket = new Ticket({
        title,
        description,
        status,
        lastModified,
        priority,
        category,
        createdBy,
        dueDate
    });

    newTicket.save()
        .then(() => res.json('Ticket created!'))
        .catch( err => res.status(400).json(`Error: ${err}`));

});


module.exports = router;




// {
// 	"title": "title test",
// 	"description": "Power cord not woriking",
// 	"status": "active",
// 	"createdBy": "jono.calvo@gmail.com",
// 	"category": "IT",
// 	"priority": 1	
// }