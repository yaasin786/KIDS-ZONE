# 📞 KidZone Calls — Setup & Info Guide

Kids can now make **real voice and video calls** to each other, one-to-one or in a
group — like WhatsApp, but inside KidZone's safe world.

---

## 🚀 How kids use it

### 1-to-1 call
1. Kid opens **🛡️ Safe Zone** → in **💬 Buddy Chat**, chooses a friend
2. A green **📞 button** appears next to the friend's name → tap it
3. The friend's phone **rings** (ring screen with Answer 🔊 / Answer 🎥 / Decline 📵)
4. Call screen shows both kids: timer, 🎙️ mute, 🎥 camera on/off, 📵 hang up

### Group call
1. In **🛡️ Safe Zone → 👨‍👩‍👧‍👦 Group Chat**, tap **📞 Start Group Call**
2. Everyone else sees the button change to **🎉 Join Group Call (n in call)**
3. Up to **6 kids** can be in one call together

## 🛡️ Admin controls (in Safe Zone → Admin Control Room)
- **📞 Pause Calls** — instantly blocks all new kid calls (kids see a friendly message)
- **Call history** — open **⚙️ Manage Profiles**: recent calls appear at the top
  (who, when, how long, answered/missed/declined). **Calls are never recorded** —
  only the metadata is logged, matching KidZone's "admin sees everything, no
  hidden activity" policy.

---

## ✅ Requirements (already done for you)
- **HTTPS** — GitHub Pages provides this ✅
- **Microphone permission** — kids are asked once when they first call
- No extra services: the voice/video goes **directly between devices** (WebRTC),
  and Firestore only passes the tiny connection handshakes

## 📱 Device notes
- **Android (Chrome)**: works fully, in the browser
- **iPhone/iPad (Safari)**: works — best from the Home Screen icon (Add to Home
  Screen). First call asks for mic/camera permission, choose **Allow**
- Kids must have KidZone **open** to hear the ring (they also get a phone
  notification if Phone Alerts are enabled). Group rooms stay joinable, so a kid
  who opens KidZone later can still tap **Join Group Call**

## ⚙️ If you lock down your Firestore rules later

Kids need read/write on these (add alongside your existing rules; open/test-mode
rules already allow everything):

```
match /callRooms/{roomId} {
  allow read, write: if true;   // tighten as you like
  match /signals/{sigId} { allow read, write: if true; }
}
match /callLogs/{id} { allow read, write: if true; }
match /callSettings/{id} { allow read: if true; allow write: if false; }
```

## 🔧 Technical notes
- Group calls use a **mesh** (everyone connects to everyone) — great up to ~6
  kids; more than that gets heavy for phones
- Connections use Google STUN + the free **Open Relay** TURN service. If calls
  ever fail on a specific strict network, you can get your own free TURN at
  [metered.ca](https://www.metered.ca/tools/openrelay/) and swap the credentials
  in `CALL_RTC_CONFIG` inside `script.js`
- Calls are peer-to-peer; KidZone stores **no audio/video** on any server
