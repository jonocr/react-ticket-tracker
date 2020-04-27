module.exports = function(app, db) {
    app.post('/tickets', (req, res) => {
        //Create the ticket
        res.send('Hello from the server');
    })
}