const TicketNotificationModel = require(`../models/ticketNotification.model`);

exports.acceptNotificationRequest = async (req, res) => {
    const notificationReqObj = {
        subject: req.body.subject,
        ticketId: req.body.ticketId,
        content: req.body.content,
        recipientsEmail: req.body.recipientsEmail,
        requester: req.body.requester,
    };
    try{
        const notification = await TicketNotificationModel.create(notificationReqObj);
        res.status(200).send({
            status: `Notification accepted`,
            notificationId: notification._id,
            ticketId: notification.ticketId
        });
    }catch(err) {
        console.log(`Error while creating notification object`, err);
        res.status(500).send({
            message:`Error`
        });
    }
}