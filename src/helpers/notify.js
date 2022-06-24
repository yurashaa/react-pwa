const notify = ({ title, body, icon }) => {
    if (Notification.permission === 'granted') {
        new Notification(title, { body, icon });
    } else {
        Notification.requestPermission().then(result => {
            if (result === 'granted') {
                new Notification(title, { body, icon });
            } else {
                console.log('Notifications are not available');
            }
        })
    }
}

export { notify };