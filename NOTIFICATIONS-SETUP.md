# 🔔 KidZone Phone Notifications — Setup Guide

Kids can now get **real notifications on their phones**. There are two levels —
Level 1 works immediately, Level 2 makes phones buzz **even when KidZone is closed**.

---

## ✅ Level 1 — Works right now (nothing to set up!)

After you deploy this update:

1. Kid opens KidZone on their phone and logs in.
2. Kid taps the **🔔 bell → "🔔 Phone Alerts"** button → taps **Allow**.
3. From then on, whenever a **new buddy message, group chat message, Safe Zone post,
   comment, homework, or your announcement** arrives while KidZone is open, a real
   phone notification pops up. 🔥

You (Admin) also get a new button in the top bar: **📣 Send Alert** — write a short
message and every kid sees it in their bell + gets the phone notification.

### 🔒 Automatic profile lock
After a kid logs in once, KidZone **locks that device to the kid's profile**:

- Closing or exiting KidZone does **not** forget which explorer owns the phone.
- The next visit shows a friendly PIN lock screen for the same kid.
- The FCM notification token stays registered for that profile, so alerts can keep
  arriving after the app/browser is closed.
- On a shared device, tap **Switch Explorer** on the lock screen, then the next
  kid logs in and taps **🔔 Phone Alerts** once to register themselves again.

### 📱 Important iPhone note
Safari on iPhone/iPad only allows web notifications for websites **added to the Home
Screen** (needs iOS 16.4 or newer):

> Open KidZone in Safari → tap the **Share** button ⬆️ → **Add to Home Screen** →
> open KidZone from its new icon → log in → 🔔 bell → **Phone Alerts** → Allow.

On **Android (Chrome)** it works straight in the browser — no install needed.

---

## 🚀 Level 2 — Alerts even when KidZone is CLOSED (optional, ~10 minutes)

This uses **Firebase Cloud Messaging (FCM)**. Until you do this part, the
"📣 Send Alert" button still posts to every kid's bell — it just can't buzz
phones whose KidZone app is fully closed.

### Step 1 — Generate your Web Push key (VAPID)
1. Go to **https://console.firebase.google.com** → open project **kidzoneapp-3a074**.
2. Click the **⚙️ gear** (Project settings) → **Cloud Messaging** tab.
3. Scroll to **Web Push certificates** → click **Generate key pair**.
4. Copy the **public key** (a long string starting with letters/numbers).
5. Open **`script.js`**, find this line near the PHONE ALERTS section:
   ```js
   const KIDZONE_PUSH_VAPID_KEY = "PASTE_YOUR_VAPID_PUBLIC_KEY_HERE";
   ```
   and paste your key between the quotes. Save + deploy the site.

### Step 2 — Choose how to SEND the closed-app pushes

**Option A — Send from the website button (recommended):**
1. Install the Firebase CLI on your computer:
   ```
   npm install -g firebase-tools
   firebase login
   ```
   (log in with the SAME Google account as your Firebase project)
2. From the **repo root** of this project, run:
   ```
   firebase deploy --only functions
   ```
   The repo ships with `firebase.json` + `.firebaserc`, so the command already
   knows to deploy the `functions` folder to project **kidzoneapp-3a074** —
   you don't need to pick anything.
   > ℹ️ Cloud Functions need Firebase's **Blaze plan** — it has a generous free
   > allowance and KidZone's tiny traffic will stay well inside it, so it costs
   > nothing in practice. A card is needed to activate it.
3. Done! Now **📣 Send Alert** and **homework publishing** automatically buzz
   every registered kid device, even with KidZone closed.

**Option B — Send manually from the Firebase Console (no code, no Blaze):**
1. Firebase Console → **Engagement → Messaging** → **Create your first campaign**.
2. Choose **Firebase Notification messages**, pick your **web app** as the target.
3. Write a title/text → **Review** → **Publish**. All kids who tapped
   "Phone Alerts" receive it on their phones.

### Step 3 — Test it 🎉
1. On the kid's phone: open KidZone → 🔔 → **Phone Alerts** → Allow → you should
   see "Push alerts active…" once Level 2 is configured.
2. Close KidZone completely (swipe it away).
3. On the admin device: **📣 Send Alert** → send "Testing! 🚀".
4. The kid's phone should buzz within a few seconds.

---

## 🧾 For the curious — how it works

| Piece | File | Job |
|---|---|---|
| Service worker | `firebase-messaging-sw.js` | Receives push while app is closed + shows it; makes KidZone installable on iPhone |
| Alerts engine | `script.js` (PHONE ALERTS section) | Asks permission, registers the device, fires notifications for new messages/posts/announcements |
| Token storage | Firestore → each `kidProfiles/{kid}` doc gets an `fcmToken` field | Lets pushes find each kid's device |
| Admin button | "📣 Send Alert" in the top bar (admin only) | Posts an announcement + triggers the push |
| Cloud Function | `functions/index.js` | Safely sends the push to ALL kid devices (only your admin account can call it) |

## 🔒 Firestore security reminder

Kids need to **read** `announcements` and **write `fcmToken` to their own
profile**. If you use locked-down rules, add something like:

```
match /announcements/{id} {
  allow read: if true;
  allow write: if request.auth != null && request.auth.uid == "l9skt6UUdcdMrmR1jKLRXQyhv4c2";
}
match /kidProfiles/{kidId} {
  // (your existing rules)
  allow update: if request.resource.data.diff(resource().data)
      .affectedKeys().hasOnly(['fcmToken', 'fcmTokenAt', 'fcmUserAgent',
                               'lastLogin', 'loginCount', 'errorOutbox',
                               /* your existing fields */]);
}
```

If your rules are still in test mode (open), everything already works.

## 🛠 Troubleshooting

- **No popup when tapping "Phone Alerts"?** Check the browser site settings —
  notifications may be blocked for the site. Unblock and retry.
- **iPhone shows the "Add to Home Screen" message** → that's expected; iOS needs
  the Home Screen install (Level: iOS 16.4+).
- **Push works only while app open** → Level 2 isn't finished: paste the VAPID
  key and (Option A) deploy the function, or use Option B from the Console.
- **Button says "0 devices"** → each kid must open KidZone once and tap
  "Phone Alerts" so their device registers.
- **Kid logged out and wants alerts?** That is OK. The profile lock keeps the
  device-token link; the kid only needs to tap **Phone Alerts** again if the
  browser permission or device changed.
- **Using a shared family phone?** Use **Switch Explorer** on the lock screen
  before the second kid logs in, so that profile can register the device for
  itself.
- **Hosting at a different address?** Update `KIDZONE_SITE_PATH` in both
  `script.js` and `firebase-messaging-sw.js`.
