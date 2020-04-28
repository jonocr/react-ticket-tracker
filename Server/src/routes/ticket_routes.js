module.exports = function(app, db) {
    app.post('/tickets', (req, res) => {
        
        var today = new Date();
        var dueDate = new Date();
        dueDate.setDate(today.getDate()+5);

        const ticket = { 
            title: req.body.title, 
            creation: today,
            status: 'open',
            priority: 1,
            description: req.body.description,
            category: req.body.category,
            due: dueDate.toString(),
            creator: "jono.calvo1@gmail.com",
            relatedIssues: [],
            ModifiedBy: "",
            agentAssigned: "",
            lastModified: "" 
        };
        db.collection('tickets').insert(ticket, (err, result) => {
            err ? res.send ({ error : "An error has ocurred" }) : res.send (result.ops[0])   
        })
    })
}


