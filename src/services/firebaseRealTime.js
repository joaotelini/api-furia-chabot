import admin from "./firebaseServiceAccount.js";

const db = admin.database();

export async function getPlayer(nick) {
  const snapshot = await db
    .ref("players")
    .orderByChild("nick")
    .equalTo(nick)
    .once("value");
  return snapshot.val();
}

export async function getRoster() {
  const snapshot = await db.ref("roster").once("value");
  return snapshot.exists() ? snapshot.val() : [];
}

export async function getNextMatch() {
  const snapshot = await db.ref("nextmatches").once("value");
  return snapshot.exists() ? snapshot.val() : [];
}

export async function getResults() {
  const snapshot = await db.ref("results").once("value");
  return snapshot.exists() ? snapshot.val() : [];
}
