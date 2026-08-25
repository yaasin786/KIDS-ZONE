/* ============================================================
 * KidZone Phone Alerts — background service worker
 * ------------------------------------------------------------
 * This file makes real push notifications possible:
 *  - Firebase Cloud Messaging (FCM) delivers messages here when
 *    KidZone is CLOSED, and we show them on the kid's phone.
 *  - Tapping the notification opens / focuses KidZone.
 *  - It also lets kids install KidZone as an app (Add to Home
 *    Screen), which iPhone requires before it allows alerts.
 *
 * Setup steps live in NOTIFICATIONS-SETUP.md.
 * ============================================================ */

// KidZone is hosted at /KIDS-ZONE/ on GitHub Pages.
// If you move the site (custom domain / different folder), change this:
var KIDZONE_SITE_PATH = '/KIDS-ZONE/';

importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDprgTd5C-H8vq18OHSCyCdgG08KLsEgDs",
    authDomain: "kidzoneapp-3a074.firebaseapp.com",
    projectId: "kidzoneapp-3a074",
    storageBucket: "kidzoneapp-3a074.firebasestorage.app",
    messagingSenderId: "235123295283",
    appId: "1:235123295283:web:86e89736f70cb6f9d94f46",
    measurementId: "G-Y8NGVL88QV"
});

function kidzoneNotificationOptions(title, body) {
    return {
        body: body || '',
        icon: KIDZONE_SITE_PATH + 'icon-192.png',
        badge: KIDZONE_SITE_PATH + 'icon-192.png',
        tag: 'kidzone_push',
        renotify: true,
        data: { url: location.origin + KIDZONE_SITE_PATH }
    };
}

var messaging = null;
try {
    messaging = firebase.messaging();

    // Push message received while KidZone is closed or in the background.
    messaging.onBackgroundMessage(function (payload) {
        var title = (payload.notification && payload.notification.title) || '📣 KidZone';
        var body = (payload.notification && payload.notification.body) ||
            'Something new is waiting for you!';
        self.registration.showNotification(title, kidzoneNotificationOptions(title, body));
    });
} catch (err) {
    // Older browsers: service worker still registered for PWA install.
    console.warn('[KidZone SW] messaging unavailable:', err);
}

// A normal (non-push) notification shown by the page while the app is open
// is also handled here when the tab gets backgrounded.
self.addEventListener('notificationclick', function (event) {
    event.notification.close();
    var url = (event.notification.data && event.notification.data.url) ||
        (location.origin + KIDZONE_SITE_PATH);
    event.waitUntil(
        self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (clientList) {
            for (var i = 0; i < clientList.length; i++) {
                var client = clientList[i];
                if (client.url.indexOf(KIDZONE_SITE_PATH) !== -1 && 'focus' in client) {
                    return client.focus();
                }
            }
            if (self.clients.openWindow) {
                return self.clients.openWindow(url);
            }
        })
    );
});
