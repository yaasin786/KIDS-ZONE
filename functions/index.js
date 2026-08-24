/**
 * ============================================================
 * KidZone Phone Alerts — Cloud Function (OPTIONAL but recommended)
 * ------------------------------------------------------------
 * What it does:
 *   When Admin taps "📣 Send Alert" (or publishes homework), the
 *   website calls `sendKidZonePush`. This function reads every
 *   kid's saved push token from Firestore and delivers a real
 *   Firebase Cloud Messaging push, so phones buzz EVEN WHEN
 *   KidZone is closed.
 *
 * One-time deploy (needs the free-tier Blaze plan):
 *   1. npm install -g firebase-tools
 *   2. firebase login
 *   3. From this repo folder:  firebase deploy --only functions
 *      (choose your Firebase project kidzoneapp-3a074 when asked)
 *
 * Full beginner steps: see NOTIFICATIONS-SETUP.md
 * ============================================================
 */
const { onCall, HttpsError } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin");

admin.initializeApp();

// Must match ADMIN_UID in script.js. Only this account may send pushes.
const ADMIN_UID = "l9skt6UUdcdMrmR1jKLRXQyhv4c2";

exports.sendKidZonePush = onCall({ region: "us-central1" }, async (request) => {
  // ---- Security: only the admin account may call this ----
  if (!request.auth || request.auth.uid !== ADMIN_UID) {
    logger.warn("sendKidZonePush blocked: caller is not admin",
      { uid: request.auth ? request.auth.uid : "anonymous" });
    throw new HttpsError("permission-denied", "Only the KidZone admin can send alerts.");
  }

  const title = String((request.data && request.data.title) || "📣 KidZone").slice(0, 120);
  const body = String((request.data && request.data.body) || "").slice(0, 500).slice(0, 240);
  const link = String((request.data && request.data.url) || "https://yaasin786.github.io/KIDS-ZONE/");

  // ---- Collect every kid's registered device token ----
  const snap = await admin.firestore().collection("kidProfiles").get();
  const tokens = new Set();
  snap.forEach((d) => {
    const data = d.data() || {};
    if (typeof data.fcmToken === "string" && data.fcmToken.length > 10) {
      tokens.add(data.fcmToken);
    }
  });

  const uniqueTokens = [...tokens];
  if (uniqueTokens.length === 0) {
    return {
      sent: 0,
      total: 0,
      message: "No kid devices registered yet. Kids must open KidZone and tap 'Phone Alerts' once.",
    };
  }

  // ---- Send the push to every device ----
  const messages = uniqueTokens.map((token) => ({
    token,
    notification: { title, body },
    webpush: {
      notification: { title, body, icon: "/KIDS-ZONE/icon-192.png", badge: "/KIDS-ZONE/icon-192.png" },
      fcmOptions: { link },
    },
    data: { url: link },
  }));

  try {
    const response = await admin.messaging().sendEachForMulticast({ messages });
    logger.info("KidZone push sent", { success: response.successCount, failed: response.failureCount });
    return {
      sent: response.successCount,
      failed: response.failureCount,
      total: uniqueTokens.length,
    };
  } catch (err) {
    logger.error("KidZone push failed", err);
    throw new HttpsError("internal", "Push could not be delivered. " + (err.message || ""));
  }
});
