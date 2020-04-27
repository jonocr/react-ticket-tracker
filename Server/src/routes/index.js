const ticketRoutes = require('./ticket_routes');

module.exports = function (app, db) {
    ticketRoutes(app,db);
}