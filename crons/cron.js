const cron = require(`node-cron`);
const TicketNotificationModel = require(`../models/ticketNotification.model`);
const emailTransporter = require(`../notifier/emailservice`);

cron.schedule(`*/5 * * * * *`, async () => {
    const notifications = await TicketNotificationModel.find({
        sentStatus: `UN_SENT`
    });
    console.log(notifications);

    notifications.forEach(notification => {

        var mailOptions = {
            from: `thormighty52@gmail.com`,
            to: notification.recipientsEmail,
            subject: notification.subject,
            text: notification.content
        };

        emailTransporter.sendMail(mailOptions, async (err, info) => {
            if(err) {
                console.log(`Error while sending email`, err);
            } else {
                const savedNotification = await TicketNotificationModel.findOne(
                    {_id: notification._id}
                );
                savedNotification.sentStatus = `SENT`;
                await savedNotification.save();
            }
        });
    });
});

