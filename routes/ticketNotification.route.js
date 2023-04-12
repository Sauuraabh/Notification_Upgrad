const notificationController = require(`../controllers/ticketNotification.controller`);

module.exports = function (app) {
    app.post(`/notificationservice/api/v1/notification`, notificationController.acceptNotificationRequest);
};