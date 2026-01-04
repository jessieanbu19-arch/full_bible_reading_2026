// Bible Reading Plan 2026 - Firebase + Local Storage Version
// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyChLIdbSafx0TgMy9wKr7eekLeDbNsXetk",
  authDomain: "bible-reading-2026-b7ab5.firebaseapp.com",
  projectId: "bible-reading-2026-b7ab5",
  storageBucket: "bible-reading-2026-b7ab5.firebasestorage.app",
  messagingSenderId: "20056195136",
  appId: "1:20056195136:web:3c374a0f7f63e43a7edfa5"
};

// Initialize Firebase (will be done after SDK loads)
let db = null;
let firebaseReady = false;

function initFirebase() {
    if (typeof firebase !== 'undefined' && !firebaseReady) {
        try {
            firebase.initializeApp(firebaseConfig);
            db = firebase.firestore();
            firebaseReady = true;
            console.log('✅ Firebase connected successfully!');
        } catch (e) {
            console.log('Firebase init error:', e);
        }
    }
}

// Try to init Firebase when script loads
if (typeof firebase !== 'undefined') {
    initFirebase();
}

let BIBLE_READING_PLAN_2026 = [
    // ===== JANUARY 2026 =====
{ date: '2026-01-04', day: 'Sunday', portion: 'ஆதியாகமம் / Genesis 1–2 & மத்தேயு / Matthew 1–2' },
{ date: '2026-01-05', day: 'Monday', portion: 'ஆதியாகமம் / Genesis 3–5 & மத்தேயு / Matthew 3' },
{ date: '2026-01-06', day: 'Tuesday', portion: 'ஆதியாகமம் / Genesis 6–8 & மத்தேயு / Matthew 4' },
{ date: '2026-01-07', day: 'Wednesday', portion: 'ஆதியாகமம் / Genesis 9–11 & மத்தேயு / Matthew 5' },
{ date: '2026-01-08', day: 'Thursday', portion: 'ஆதியாகமம் / Genesis 12–15 & மத்தேயு / Matthew 6' },
{ date: '2026-01-09', day: 'Friday', portion: 'ஆதியாகமம் / Genesis 16–17 & மத்தேயு / Matthew 7' },
{ date: '2026-01-10', day: 'Saturday', portion: 'ஆதியாகமம் / Genesis 18–19' },
{ date: '2026-01-11', day: 'Sunday', portion: 'ஆதியாகமம் / Genesis 20–22' },
{ date: '2026-01-12', day: 'Monday', portion: 'ஆதியாகமம் / Genesis 23–24 & மத்தேயு / Matthew 8' },
{ date: '2026-01-13', day: 'Tuesday', portion: 'ஆதியாகமம் / Genesis 25–26 & மத்தேயு / Matthew 9' },
{ date: '2026-01-14', day: 'Wednesday', portion: 'ஆதியாகமம் / Genesis 27 & மத்தேயு / Matthew 10' },
{ date: '2026-01-15', day: 'Thursday', portion: 'ஆதியாகமம் / Genesis 28–29 & மத்தேயு / Matthew 11' },
{ date: '2026-01-16', day: 'Friday', portion: 'ஆதியாகமம் / Genesis 30–31 & மத்தேயு / Matthew 12' },
{ date: '2026-01-17', day: 'Saturday', portion: 'ஆதியாகமம் / Genesis 32–33' },
{ date: '2026-01-18', day: 'Sunday', portion: 'ஆதியாகமம் / Genesis 34–35' },
{ date: '2026-01-19', day: 'Monday', portion: 'ஆதியாகமம் / Genesis 36–37 & மத்தேயு / Matthew 13' },
{ date: '2026-01-20', day: 'Tuesday', portion: 'ஆதியாகமம் / Genesis 38–40 & மத்தேயு / Matthew 14' },
{ date: '2026-01-21', day: 'Wednesday', portion: 'ஆதியாகமம் / Genesis 41 & மத்தேயு / Matthew 15' },
{ date: '2026-01-22', day: 'Thursday', portion: 'ஆதியாகமம் / Genesis 42–43 & மத்தேயு / Matthew 16' },
{ date: '2026-01-23', day: 'Friday', portion: 'ஆதியாகமம் / Genesis 44–45 & மத்தேயு / Matthew 17' },
{ date: '2026-01-24', day: 'Saturday', portion: 'ஆதியாகமம் / Genesis 46–47' },
{ date: '2026-01-25', day: 'Sunday', portion: 'ஆதியாகமம் / Genesis 48–50' },
{ date: '2026-01-26', day: 'Monday', portion: 'யாத்திராகமம் / Exodus 1–2 & மத்தேயு / Matthew 18' },
{ date: '2026-01-27', day: 'Tuesday', portion: 'யாத்திராகமம் / Exodus 3–5 & மத்தேயு / Matthew 19' },
{ date: '2026-01-28', day: 'Wednesday', portion: 'யாத்திராகமம் / Exodus 6–7 & மத்தேயு / Matthew 20' },
{ date: '2026-01-29', day: 'Thursday', portion: 'யாத்திராகமம் / Exodus 8–9 & மத்தேயு / Matthew 21' },
{ date: '2026-01-30', day: 'Friday', portion: 'யாத்திராகமம் / Exodus 10–11 & மத்தேயு / Matthew 22' },

// ===== FEBRUARY 2026 =====
{ date: '2026-02-01', day: 'Sunday', portion: 'யாத்திராகமம் / Exodus 14–15' },
{ date: '2026-02-02', day: 'Monday', portion: 'யாத்திராகமம் / Exodus 16–17 & மத்தேயு / Matthew 23' },
{ date: '2026-02-03', day: 'Tuesday', portion: 'யாத்திராகமம் / Exodus 18–20 & மத்தேயு / Matthew 24' },
{ date: '2026-02-04', day: 'Wednesday', portion: 'யாத்திராகமம் / Exodus 21–22 & மத்தேயு / Matthew 25' },
{ date: '2026-02-05', day: 'Thursday', portion: 'யாத்திராகமம் / Exodus 23–24 & மத்தேயு / Matthew 26' },
{ date: '2026-02-06', day: 'Friday', portion: 'யாத்திராகமம் / Exodus 25–26 & மத்தேயு / Matthew 27' },
{ date: '2026-02-07', day: 'Saturday', portion: 'யாத்திராகமம் / Exodus 27–28' },
{ date: '2026-02-08', day: 'Sunday', portion: 'யாத்திராகமம் / Exodus 29–30' },
{ date: '2026-02-09', day: 'Monday', portion: 'யாத்திராகமம் / Exodus 31–32 & மத்தேயு / Matthew 28' },
{ date: '2026-02-10', day: 'Tuesday', portion: 'யாத்திராகமம் / Exodus 33–34 & மாற்கு / Mark 1' },
{ date: '2026-02-11', day: 'Wednesday', portion: 'யாத்திராகமம் / Exodus 35–36 & மாற்கு / Mark 2' },
{ date: '2026-02-12', day: 'Thursday', portion: 'யாத்திராகமம் / Exodus 37–38 & மாற்கு / Mark 3' },
{ date: '2026-02-13', day: 'Friday', portion: 'யாத்திராகமம் / Exodus 39–40 & மாற்கு / Mark 4' },
{ date: '2026-02-14', day: 'Saturday', portion: 'லேவியராகமம் / Leviticus 1–3' },
{ date: '2026-02-15', day: 'Sunday', portion: 'லேவியராகமம் / Leviticus 4–5' },
{ date: '2026-02-16', day: 'Monday', portion: 'லேவியராகமம் / Leviticus 6–7 & மாற்கு / Mark 5' },
{ date: '2026-02-17', day: 'Tuesday', portion: 'லேவியராகமம் / Leviticus 8–9 & மாற்கு / Mark 6' },
{ date: '2026-02-18', day: 'Wednesday', portion: 'லேவியராகமம் / Leviticus 10–11 & மாற்கு / Mark 7' },
{ date: '2026-02-19', day: 'Thursday', portion: 'லேவியராகமம் / Leviticus 12–13 & மாற்கு / Mark 8' },
{ date: '2026-02-20', day: 'Friday', portion: 'லேவியராகமம் / Leviticus 14 & மாற்கு / Mark 9' },
{ date: '2026-02-21', day: 'Saturday', portion: 'லேவியராகமம் / Leviticus 15' },
{ date: '2026-02-22', day: 'Sunday', portion: 'லேவியராகமம் / Leviticus 16–17' },
{ date: '2026-02-23', day: 'Monday', portion: 'லேவியராகமம் / Leviticus 18–19 & மாற்கு / Mark 10' },
{ date: '2026-02-24', day: 'Tuesday', portion: 'லேவியராகமம் / Leviticus 20–22 & மாற்கு / Mark 11' },
{ date: '2026-02-25', day: 'Wednesday', portion: 'லேவியராகமம் / Leviticus 23 & மாற்கு / Mark 12' },
{ date: '2026-02-26', day: 'Thursday', portion: 'லேவியராகமம் / Leviticus 24–25 & மாற்கு / Mark 13' },
{ date: '2026-02-27', day: 'Friday', portion: 'லேவியராகமம் / Leviticus 26 & மாற்கு / Mark 14' },
{ date: '2026-02-28', day: 'Saturday', portion: 'லேவியராகமம் / Leviticus 27; எண்ணாகமம் / Numbers 1' },

// ===== MARCH 2026 =====
{ date: '2026-03-01', day: 'Sunday', portion: 'எண்ணாகமம் / Numbers 2' },
{ date: '2026-03-02', day: 'Monday', portion: 'எண்ணாகமம் / Numbers 3–4 & மாற்கு / Mark 15' },
{ date: '2026-03-03', day: 'Tuesday', portion: 'எண்ணாகமம் / Numbers 5 & மாற்கு / Mark 16' },
{ date: '2026-03-04', day: 'Wednesday', portion: 'எண்ணாகமம் / Numbers 6–7 & லூக்கா / Luke 1' },
{ date: '2026-03-05', day: 'Thursday', portion: 'எண்ணாகமம் / Numbers 8 & லூக்கா / Luke 2' },
{ date: '2026-03-06', day: 'Friday', portion: 'எண்ணாகமம் / Numbers 9–10 & லூக்கா / Luke 3' },
{ date: '2026-03-07', day: 'Saturday', portion: 'எண்ணாகமம் / Numbers 11–13' },
{ date: '2026-03-08', day: 'Sunday', portion: 'எண்ணாகமம் / Numbers 14' },
{ date: '2026-03-09', day: 'Monday', portion: 'எண்ணாகமம் / Numbers 15–16 & லூக்கா / Luke 4' },
{ date: '2026-03-10', day: 'Tuesday', portion: 'எண்ணாகமம் / Numbers 17–18 & லூக்கா / Luke 5' },
{ date: '2026-03-11', day: 'Wednesday', portion: 'எண்ணாகமம் / Numbers 19–20 & லூக்கா / Luke 6' },
{ date: '2026-03-12', day: 'Thursday', portion: 'எண்ணாகமம் / Numbers 21–22 & லூக்கா / Luke 7' },
{ date: '2026-03-13', day: 'Friday', portion: 'எண்ணாகமம் / Numbers 23–24 & லூக்கா / Luke 8' },
{ date: '2026-03-14', day: 'Saturday', portion: 'எண்ணாகமம் / Numbers 25–26' },
{ date: '2026-03-15', day: 'Sunday', portion: 'எண்ணாகமம் / Numbers 27–28' },
{ date: '2026-03-16', day: 'Monday', portion: 'எண்ணாகமம் / Numbers 29–30 & லூக்கா / Luke 9' },
{ date: '2026-03-17', day: 'Tuesday', portion: 'எண்ணாகமம் / Numbers 31–32 & லூக்கா / Luke 10' },
{ date: '2026-03-18', day: 'Wednesday', portion: 'எண்ணாகமம் / Numbers 33–34 & லூக்கா / Luke 11' },
{ date: '2026-03-19', day: 'Thursday', portion: 'எண்ணாகமம் / Numbers 35–36 & லூக்கா / Luke 12' },
{ date: '2026-03-20', day: 'Friday', portion: 'உபாகமம் / Deuteronomy 1–2 & லூக்கா / Luke 13' },
{ date: '2026-03-21', day: 'Saturday', portion: 'உபாகமம் / Deuteronomy 3' },
{ date: '2026-03-22', day: 'Sunday', portion: 'உபாகமம் / Deuteronomy 4–5' },
{ date: '2026-03-23', day: 'Monday', portion: 'உபாகமம் / Deuteronomy 6–7 & லூக்கா / Luke 14' },
{ date: '2026-03-24', day: 'Tuesday', portion: 'உபாகமம் / Deuteronomy 8–9 & லூக்கா / Luke 15' },
{ date: '2026-03-25', day: 'Wednesday', portion: 'உபாகமம் / Deuteronomy 10–11 & லூக்கா / Luke 16' },
{ date: '2026-03-26', day: 'Thursday', portion: 'உபாகமம் / Deuteronomy 12–13 & லூக்கா / Luke 17' },
{ date: '2026-03-27', day: 'Friday', portion: 'உபாகமம் / Deuteronomy 14–16 & லூக்கா / Luke 18' },
{ date: '2026-03-28', day: 'Saturday', portion: 'உபாகமம் / Deuteronomy 17–18' },
{ date: '2026-03-29', day: 'Sunday', portion: 'உபாகமம் / Deuteronomy 19–21' },
{ date: '2026-03-30', day: 'Monday', portion: 'உபாகமம் / Deuteronomy 22–23 & லூக்கா / Luke 19' },
{ date: '2026-03-31', day: 'Tuesday', portion: 'உபாகமம் / Deuteronomy 24–25 & லூக்கா / Luke 20' },

// ===== APRIL 2026 =====
{ date: '2026-04-01', day: 'Wednesday', portion: 'உபாகமம் / Deuteronomy 26–27 & லூக்கா / Luke 21' },
{ date: '2026-04-02', day: 'Thursday', portion: 'உபாகமம் / Deuteronomy 28 & லூக்கா / Luke 22' },
{ date: '2026-04-03', day: 'Friday', portion: 'உபாகமம் / Deuteronomy 29–30 & லூக்கா / Luke 23' },
{ date: '2026-04-04', day: 'Saturday', portion: 'உபாகமம் / Deuteronomy 31–32' },
{ date: '2026-04-05', day: 'Sunday', portion: 'உபாகமம் / Deuteronomy 33–34; யோசுவா / Joshua 1' },
{ date: '2026-04-06', day: 'Monday', portion: 'யோசுவா / Joshua 2–3 & லூக்கா / Luke 24' },
{ date: '2026-04-07', day: 'Tuesday', portion: 'யோசுவா / Joshua 4–6 & யோவான் / John 1' },
{ date: '2026-04-08', day: 'Wednesday', portion: 'யோசுவா / Joshua 7 & யோவான் / John 2' },
{ date: '2026-04-09', day: 'Thursday', portion: 'யோசுவா / Joshua 8–9 & யோவான் / John 3' },
{ date: '2026-04-10', day: 'Friday', portion: 'யோசுவா / Joshua 10–11 & யோவான் / John 4' },
{ date: '2026-04-11', day: 'Saturday', portion: 'யோசுவா / Joshua 12–13' },
{ date: '2026-04-12', day: 'Sunday', portion: 'யோசுவா / Joshua 14–16' },
{ date: '2026-04-13', day: 'Monday', portion: 'யோசுவா / Joshua 17–18 & யோவான் / John 5' },
{ date: '2026-04-14', day: 'Tuesday', portion: 'யோசுவா / Joshua 19–21 & யோவான் / John 6' },
{ date: '2026-04-15', day: 'Wednesday', portion: 'யோசுவா / Joshua 22 & யோவான் / John 7' },
{ date: '2026-04-16', day: 'Thursday', portion: 'யோசுவா / Joshua 23–24 & யோவான் / John 8' },
{ date: '2026-04-17', day: 'Friday', portion: 'நியாயாதிபதிகள் / Judges 1–2 & யோவான் / John 9' },
{ date: '2026-04-18', day: 'Saturday', portion: 'நியாயாதிபதிகள் / Judges 3–5' },
{ date: '2026-04-19', day: 'Sunday', portion: 'நியாயாதிபதிகள் / Judges 6' },
{ date: '2026-04-20', day: 'Monday', portion: 'நியாயாதிபதிகள் / Judges 7–8 & யோவான் / John 10' },
{ date: '2026-04-21', day: 'Tuesday', portion: 'நியாயாதிபதிகள் / Judges 9 & யோவான் / John 11' },
{ date: '2026-04-22', day: 'Wednesday', portion: 'நியாயாதிபதிகள் / Judges 10–11 & யோவான் / John 12' },
{ date: '2026-04-23', day: 'Thursday', portion: 'நியாயாதிபதிகள் / Judges 12–14 & யோவான் / John 13' },
{ date: '2026-04-24', day: 'Friday', portion: 'நியாயாதிபதிகள் / Judges 15–16 & யோவான் / John 14' },
{ date: '2026-04-25', day: 'Saturday', portion: 'நியாயாதிபதிகள் / Judges 17–18' },
{ date: '2026-04-26', day: 'Sunday', portion: 'நியாயாதிபதிகள் / Judges 19' },
{ date: '2026-04-27', day: 'Monday', portion: 'நியாயாதிபதிகள் / Judges 20–21 & யோவான் / John 15' },
{ date: '2026-04-28', day: 'Tuesday', portion: 'ரூத் / Ruth 1–3 & யோவான் / John 16' },
{ date: '2026-04-29', day: 'Wednesday', portion: 'ரூத் / Ruth 4; 1 சாமுவேல் / 1 Samuel 1 & யோவான் / John 17' },
{ date: '2026-04-30', day: 'Thursday', portion: '1 சாமுவேல் / 1 Samuel 2–3 & யோவான் / John 18' },

// ===== MAY 2026 =====
{ date: '2026-05-01', day: 'Friday', portion: '1 சாமுவேல் / 1 Samuel 4–6 & யோவான் / John 19' },
{ date: '2026-05-02', day: 'Saturday', portion: '1 சாமுவேல் / 1 Samuel 7–9' },
{ date: '2026-05-03', day: 'Sunday', portion: '1 சாமுவேல் / 1 Samuel 10–11' },
{ date: '2026-05-04', day: 'Monday', portion: '1 சாமுவேல் / 1 Samuel 12–13 & யோவான் / John 20' },
{ date: '2026-05-05', day: 'Tuesday', portion: '1 சாமுவேல் / 1 Samuel 14 & யோவான் / John 21' },
{ date: '2026-05-06', day: 'Wednesday', portion: '1 சாமுவேல் / 1 Samuel 15–16 & அப்போஸ்தலருடைய நடபடிகள் / Acts 1' },
{ date: '2026-05-07', day: 'Thursday', portion: '1 சாமுவேல் / 1 Samuel 17 & அப்போஸ்தலருடைய நடபடிகள் / Acts 2' },
{ date: '2026-05-08', day: 'Friday', portion: '1 சாமுவேல் / 1 Samuel 18–19 & அப்போஸ்தலருடைய நடபடிகள் / Acts 3' },
{ date: '2026-05-09', day: 'Saturday', portion: '1 சாமுவேல் / 1 Samuel 20–21' },
{ date: '2026-05-10', day: 'Sunday', portion: '1 சாமுவேல் / 1 Samuel 22–24' },
{ date: '2026-05-11', day: 'Monday', portion: '1 சாமுவேல் / 1 Samuel 25 & அப்போஸ்தலருடைய நடபடிகள் / Acts 4' },
{ date: '2026-05-12', day: 'Tuesday', portion: '1 சாமுவேல் / 1 Samuel 26–28 & அப்போஸ்தலருடைய நடபடிகள் / Acts 5' },
{ date: '2026-05-13', day: 'Wednesday', portion: '1 சாமுவேல் / 1 Samuel 29–30 & அப்போஸ்தலருடைய நடபடிகள் / Acts 6' },
{ date: '2026-05-14', day: 'Thursday', portion: '1 சாமுவேல் / 1 Samuel 31; 2 சாமுவேல் / 2 Samuel 1–2 & அப்போஸ்தலருடைய நடபடிகள் / Acts 7' },
{ date: '2026-05-15', day: 'Friday', portion: '2 சாமுவேல் / 2 Samuel 3 & அப்போஸ்தலருடைய நடபடிகள் / Acts 8' },
{ date: '2026-05-16', day: 'Saturday', portion: '2 சாமுவேல் / 2 Samuel 4–6' },
{ date: '2026-05-17', day: 'Sunday', portion: '2 சாமுவேல் / 2 Samuel 7–9' },
{ date: '2026-05-18', day: 'Monday', portion: '2 சாமுவேல் / 2 Samuel 10–11 & அப்போஸ்தலருடைய நடபடிகள் / Acts 9' },
{ date: '2026-05-19', day: 'Tuesday', portion: '2 சாமுவேல் / 2 Samuel 12–13 & அப்போஸ்தலருடைய நடபடிகள் / Acts 10' },
{ date: '2026-05-20', day: 'Wednesday', portion: '2 சாமுவேல் / 2 Samuel 14 & அப்போஸ்தலருடைய நடபடிகள் / Acts 11' },
{ date: '2026-05-21', day: 'Thursday', portion: '2 சாமுவேல் / 2 Samuel 15–16 & அப்போஸ்தலருடைய நடபடிகள் / Acts 12' },
{ date: '2026-05-22', day: 'Friday', portion: '2 சாமுவேல் / 2 Samuel 17–18 & அப்போஸ்தலருடைய நடபடிகள் / Acts 13' },
{ date: '2026-05-23', day: 'Saturday', portion: '2 சாமுவேல் / 2 Samuel 19' },
{ date: '2026-05-24', day: 'Sunday', portion: '2 சாமுவேல் / 2 Samuel 20–21' },
{ date: '2026-05-25', day: 'Monday', portion: '2 சாமுவேல் / 2 Samuel 22–23 & அப்போஸ்தலருடைய நடபடிகள் / Acts 14' },
{ date: '2026-05-26', day: 'Tuesday', portion: '2 சாமுவேல் / 2 Samuel 24; 1 இராஜாக்கள் / 1 Kings 1 & அப்போஸ்தலருடைய நடபடிகள் / Acts 15' },
{ date: '2026-05-27', day: 'Wednesday', portion: '1 இராஜாக்கள் / 1 Kings 2 & அப்போஸ்தலருடைய நடபடிகள் / Acts 16' },
{ date: '2026-05-28', day: 'Thursday', portion: '1 இராஜாக்கள் / 1 Kings 3–4 & அப்போஸ்தலருடைய நடபடிகள் / Acts 17' },
{ date: '2026-05-29', day: 'Friday', portion: '1 இராஜாக்கள் / 1 Kings 5–6 & அப்போஸ்தலருடைய நடபடிகள் / Acts 18' },
{ date: '2026-05-30', day: 'Saturday', portion: '1 இராஜாக்கள் / 1 Kings 7' },
{ date: '2026-05-31', day: 'Sunday', portion: '1 இராஜாக்கள் / 1 Kings 8' },

// ===== JUNE 2026 =====
{ date: '2026-06-01', day: 'Monday', portion: '1 இராஜாக்கள் / 1 Kings 9–10 & அப்போஸ்தலருடைய நடபடிகள் / Acts 19' },
{ date: '2026-06-02', day: 'Tuesday', portion: '1 இராஜாக்கள் / 1 Kings 11 & அப்போஸ்தலருடைய நடபடிகள் / Acts 20' },
{ date: '2026-06-03', day: 'Wednesday', portion: '1 இராஜாக்கள் / 1 Kings 12–13 & அப்போஸ்தலருடைய நடபடிகள் / Acts 21' },
{ date: '2026-06-04', day: 'Thursday', portion: '1 இராஜாக்கள் / 1 Kings 14 & அப்போஸ்தலருடைய நடபடிகள் / Acts 22' },
{ date: '2026-06-05', day: 'Friday', portion: '1 இராஜாக்கள் / 1 Kings 15–16 & அப்போஸ்தலருடைய நடபடிகள் / Acts 23' },
{ date: '2026-06-06', day: 'Saturday', portion: '1 இராஜாக்கள் / 1 Kings 17–18' },
{ date: '2026-06-07', day: 'Sunday', portion: '1 இராஜாக்கள் / 1 Kings 19' },
{ date: '2026-06-08', day: 'Monday', portion: '1 இராஜாக்கள் / 1 Kings 20–21 & அப்போஸ்தலருடைய நடபடிகள் / Acts 24' },
{ date: '2026-06-09', day: 'Tuesday', portion: '1 இராஜாக்கள் / 1 Kings 22 & அப்போஸ்தலருடைய நடபடிகள் / Acts 25' },
{ date: '2026-06-10', day: 'Wednesday', portion: '2 இராஜாக்கள் / 2 Kings 1–3 & அப்போஸ்தலருடைய நடபடிகள் / Acts 26' },
{ date: '2026-06-11', day: 'Thursday', portion: '2 இராஜாக்கள் / 2 Kings 4 & அப்போஸ்தலருடைய நடபடிகள் / Acts 27' },
{ date: '2026-06-12', day: 'Friday', portion: '2 இராஜாக்கள் / 2 Kings 5–6 & அப்போஸ்தலருடைய நடபடிகள் / Acts 28' },
{ date: '2026-06-13', day: 'Saturday', portion: '2 இராஜாக்கள் / 2 Kings 7–8' },
{ date: '2026-06-14', day: 'Sunday', portion: '2 இராஜாக்கள் / 2 Kings 9' },
{ date: '2026-06-15', day: 'Monday', portion: '2 இராஜாக்கள் / 2 Kings 10–11 & ரோமர் / Romans 1' },
{ date: '2026-06-16', day: 'Tuesday', portion: '2 இராஜாக்கள் / 2 Kings 12–13 & ரோமர் / Romans 2' },
{ date: '2026-06-17', day: 'Wednesday', portion: '2 இராஜாக்கள் / 2 Kings 14–15 & ரோமர் / Romans 3' },
{ date: '2026-06-18', day: 'Thursday', portion: '2 இராஜாக்கள் / 2 Kings 16–17 & ரோமர் / Romans 4' },
{ date: '2026-06-19', day: 'Friday', portion: '2 இராஜாக்கள் / 2 Kings 18 & ரோமர் / Romans 5' },
{ date: '2026-06-20', day: 'Saturday', portion: '2 இராஜாக்கள் / 2 Kings 19–20' },
{ date: '2026-06-21', day: 'Sunday', portion: '2 இராஜாக்கள் / 2 Kings 21–22' },
{ date: '2026-06-22', day: 'Monday', portion: '2 இராஜாக்கள் / 2 Kings 23 & ரோமர் / Romans 6' },
{ date: '2026-06-23', day: 'Tuesday', portion: '2 இராஜாக்கள் / 2 Kings 24–25; 1 நாளாகமம் / 1 Chronicles 1 & ரோமர் / Romans 7' },
{ date: '2026-06-24', day: 'Wednesday', portion: '1 நாளாகமம் / 1 Chronicles 2–3 & ரோமர் / Romans 8' },
{ date: '2026-06-25', day: 'Thursday', portion: '1 நாளாகமம் / 1 Chronicles 4–5 & ரோமர் / Romans 9' },
{ date: '2026-06-26', day: 'Friday', portion: '1 நாளாகமம் / 1 Chronicles 6–7 & ரோமர் / Romans 10' },
{ date: '2026-06-27', day: 'Saturday', portion: '1 நாளாகமம் / 1 Chronicles 8–9' },
{ date: '2026-06-28', day: 'Sunday', portion: '1 நாளாகமம் / 1 Chronicles 10–11' },
{ date: '2026-06-29', day: 'Monday', portion: '1 நாளாகமம் / 1 Chronicles 12–14 & ரோமர் / Romans 11' },
{ date: '2026-06-30', day: 'Tuesday', portion: '1 நாளாகமம் / 1 Chronicles 15–16 & ரோமர் / Romans 12' },

// ===== JULY 2026 =====
{ date: '2026-07-01', day: 'Wednesday', portion: '1 நாளாகமம் / 1 Chronicles 17–19 & ரோமர் / Romans 13' },
{ date: '2026-07-02', day: 'Thursday', portion: '1 நாளாகமம் / 1 Chronicles 20–22 & ரோமர் / Romans 14' },
{ date: '2026-07-03', day: 'Friday', portion: '1 நாளாகமம் / 1 Chronicles 23–25 & ரோமர் / Romans 15' },
{ date: '2026-07-04', day: 'Saturday', portion: '1 நாளாகமம் / 1 Chronicles 26–27' },
{ date: '2026-07-05', day: 'Sunday', portion: '1 நாளாகமம் / 1 Chronicles 28–29' },
{ date: '2026-07-06', day: 'Monday', portion: '2 நாளாகமம் / 2 Chronicles 1–3 & ரோமர் / Romans 16' },
{ date: '2026-07-07', day: 'Tuesday', portion: '2 நாளாகமம் / 2 Chronicles 4–5 & 1 கொரிந்தியர் / 1 Corinthians 1' },
{ date: '2026-07-08', day: 'Wednesday', portion: '2 நாளாகமம் / 2 Chronicles 6–7 & 1 கொரிந்தியர் / 1 Corinthians 2' },
{ date: '2026-07-09', day: 'Thursday', portion: '2 நாளாகமம் / 2 Chronicles 8–10 & 1 கொரிந்தியர் / 1 Corinthians 3' },
{ date: '2026-07-10', day: 'Friday', portion: '2 நாளாகமம் / 2 Chronicles 11–13 & 1 கொரிந்தியர் / 1 Corinthians 4' },
{ date: '2026-07-11', day: 'Saturday', portion: '2 நாளாகமம் / 2 Chronicles 14–16' },
{ date: '2026-07-12', day: 'Sunday', portion: '2 நாளாகமம் / 2 Chronicles 17–19' },
{ date: '2026-07-13', day: 'Monday', portion: '2 நாளாகமம் / 2 Chronicles 20–21 & 1 கொரிந்தியர் / 1 Corinthians 5' },
{ date: '2026-07-14', day: 'Tuesday', portion: '2 நாளாகமம் / 2 Chronicles 22–23 & 1 கொரிந்தியர் / 1 Corinthians 6' },
{ date: '2026-07-15', day: 'Wednesday', portion: '2 நாளாகமம் / 2 Chronicles 24–25 & 1 கொரிந்தியர் / 1 Corinthians 7' },
{ date: '2026-07-16', day: 'Thursday', portion: '2 நாளாகமம் / 2 Chronicles 26–28 & 1 கொரிந்தியர் / 1 Corinthians 8' },
{ date: '2026-07-17', day: 'Friday', portion: '2 நாளாகமம் / 2 Chronicles 29–30 & 1 கொரிந்தியர் / 1 Corinthians 9' },
{ date: '2026-07-18', day: 'Saturday', portion: '2 நாளாகமம் / 2 Chronicles 31' },
{ date: '2026-07-19', day: 'Sunday', portion: '2 நாளாகமம் / 2 Chronicles 32–33' },
{ date: '2026-07-20', day: 'Monday', portion: '2 நாளாகமம் / 2 Chronicles 34–35 & 1 கொரிந்தியர் / 1 Corinthians 10' },
{ date: '2026-07-21', day: 'Tuesday', portion: '2 நாளாகமம் / 2 Chronicles 36; எஸ்றா / Ezra 1 & 1 கொரிந்தியர் / 1 Corinthians 11' },
{ date: '2026-07-22', day: 'Wednesday', portion: 'எஸ்றா / Ezra 2–4 & 1 கொரிந்தியர் / 1 Corinthians 12' },
{ date: '2026-07-23', day: 'Thursday', portion: 'எஸ்றா / Ezra 5–6 & 1 கொரிந்தியர் / 1 Corinthians 13' },
{ date: '2026-07-24', day: 'Friday', portion: 'எஸ்றா / Ezra 7–8 & 1 கொரிந்தியர் / 1 Corinthians 14' },
{ date: '2026-07-25', day: 'Saturday', portion: 'எஸ்றா / Ezra 9–10' },
{ date: '2026-07-26', day: 'Sunday', portion: 'நெகேமியா / Nehemiah 1–3' },
{ date: '2026-07-27', day: 'Monday', portion: 'நெகேமியா / Nehemiah 4–5 & 1 கொரிந்தியர் / 1 Corinthians 15' },
{ date: '2026-07-28', day: 'Tuesday', portion: 'நெகேமியா / Nehemiah 6–7 & 1 கொரிந்தியர் / 1 Corinthians 16' },
{ date: '2026-07-29', day: 'Wednesday', portion: 'நெகேமியா / Nehemiah 8–9 & 2 கொரிந்தியர் / 2 Corinthians 1' },
{ date: '2026-07-30', day: 'Thursday', portion: 'நெகேமியா / Nehemiah 10–11 & 2 கொரிந்தியர் / 2 Corinthians 2' },
{ date: '2026-07-31', day: 'Friday', portion: 'நெகேமியா / Nehemiah 12–13 & 2 கொரிந்தியர் / 2 Corinthians 3' },

// ===== AUGUST 2026 =====
{ date: '2026-08-01', day: 'Saturday', portion: 'எஸ்தர் / Esther 1–2' },
{ date: '2026-08-02', day: 'Sunday', portion: 'எஸ்தர் / Esther 3–5' },
{ date: '2026-08-03', day: 'Monday', portion: 'எஸ்தர் / Esther 6–8 & 2 கொரிந்தியர் / 2 Corinthians 4' },
{ date: '2026-08-04', day: 'Tuesday', portion: 'எஸ்தர் / Esther 9–10; யோபு / Job 1 & 2 கொரிந்தியர் / 2 Corinthians 5' },
{ date: '2026-08-05', day: 'Wednesday', portion: 'யோபு / Job 2–5 & 2 கொரிந்தியர் / 2 Corinthians 6' },
{ date: '2026-08-06', day: 'Thursday', portion: 'யோபு / Job 6–9 & 2 கொரிந்தியர் / 2 Corinthians 7' },
{ date: '2026-08-07', day: 'Friday', portion: 'யோபு / Job 10–13 & 2 கொரிந்தியர் / 2 Corinthians 8' },
{ date: '2026-08-08', day: 'Saturday', portion: 'யோபு / Job 14–18' },
{ date: '2026-08-09', day: 'Sunday', portion: 'யோபு / Job 19–21' },
{ date: '2026-08-10', day: 'Monday', portion: 'யோபு / Job 22–26 & 2 கொரிந்தியர் / 2 Corinthians 9' },
{ date: '2026-08-11', day: 'Tuesday', portion: 'யோபு / Job 27–30 & 2 கொரிந்தியர் / 2 Corinthians 10' },
{ date: '2026-08-12', day: 'Wednesday', portion: 'யோபு / Job 31–33 & 2 கொரிந்தியர் / 2 Corinthians 11' },
{ date: '2026-08-13', day: 'Thursday', portion: 'யோபு / Job 34–37 & 2 கொரிந்தியர் / 2 Corinthians 12' },
{ date: '2026-08-14', day: 'Friday', portion: 'யோபு / Job 38–40 & 2 கொரிந்தியர் / 2 Corinthians 13' },
{ date: '2026-08-15', day: 'Saturday', portion: 'யோபு / Job 41–42; சங்கீதம் / Psalms 1–5' },
{ date: '2026-08-16', day: 'Sunday', portion: 'சங்கீதம் / Psalms 6–12' },
{ date: '2026-08-17', day: 'Monday', portion: 'சங்கீதம் / Psalms 13–18 & கலாத்தியர் / Galatians 1' },
{ date: '2026-08-18', day: 'Tuesday', portion: 'சங்கீதம் / Psalms 19–24 & கலாத்தியர் / Galatians 2' },
{ date: '2026-08-19', day: 'Wednesday', portion: 'சங்கீதம் / Psalms 25–30 & கலாத்தியர் / Galatians 3' },
{ date: '2026-08-20', day: 'Thursday', portion: 'சங்கீதம் / Psalms 31–35 & கலாத்தியர் / Galatians 4' },
{ date: '2026-08-21', day: 'Friday', portion: 'சங்கீதம் / Psalms 36–39 & கலாத்தியர் / Galatians 5' },
{ date: '2026-08-22', day: 'Saturday', portion: 'சங்கீதம் / Psalms 40–44' },
{ date: '2026-08-23', day: 'Sunday', portion: 'சங்கீதம் / Psalms 45–50' },
{ date: '2026-08-24', day: 'Monday', portion: 'சங்கீதம் / Psalms 51–57 & கலாத்தியர் / Galatians 6' },
{ date: '2026-08-25', day: 'Tuesday', portion: 'சங்கீதம் / Psalms 58–65 & எபேசியர் / Ephesians 1' },
{ date: '2026-08-26', day: 'Wednesday', portion: 'சங்கீதம் / Psalms 66–69 & எபேசியர் / Ephesians 2' },
{ date: '2026-08-27', day: 'Thursday', portion: 'சங்கீதம் / Psalms 70–73 & எபேசியர் / Ephesians 3' },
{ date: '2026-08-28', day: 'Friday', portion: 'சங்கீதம் / Psalms 74–78 & எபேசியர் / Ephesians 4' },
{ date: '2026-08-29', day: 'Saturday', portion: 'சங்கீதம் / Psalms 79–82' },
{ date: '2026-08-30', day: 'Sunday', portion: 'சங்கீதம் / Psalms 83–88' },
{ date: '2026-08-31', day: 'Monday', portion: 'சங்கீதம் / Psalms 89–94 & எபேசியர் / Ephesians 5' },

// ===== SEPTEMBER 2026 =====
{ date: '2026-09-01', day: 'Tuesday', portion: 'சங்கீதம் / Psalms 95–102 & எபேசியர் / Ephesians 6' },
{ date: '2026-09-02', day: 'Wednesday', portion: 'சங்கீதம் / Psalms 103–105 & பிலிப்பியர் / Philippians 1' },
{ date: '2026-09-03', day: 'Thursday', portion: 'சங்கீதம் / Psalms 106–108 & பிலிப்பியர் / Philippians 2' },
{ date: '2026-09-04', day: 'Friday', portion: 'சங்கீதம் / Psalms 109–116 & பிலிப்பியர் / Philippians 3' },
{ date: '2026-09-05', day: 'Saturday', portion: 'சங்கீதம் / Psalms 117–118' },
{ date: '2026-09-06', day: 'Sunday', portion: 'சங்கீதம் / Psalms 119–123' },
{ date: '2026-09-07', day: 'Monday', portion: 'சங்கீதம் / Psalms 124–135 & பிலிப்பியர் / Philippians 4' },
{ date: '2026-09-08', day: 'Tuesday', portion: 'சங்கீதம் / Psalms 136–142 & கொலோசெயர் / Colossians 1' },
{ date: '2026-09-09', day: 'Wednesday', portion: 'சங்கீதம் / Psalms 143–150 & கொலோசெயர் / Colossians 2' },
{ date: '2026-09-10', day: 'Thursday', portion: 'நீதிமொழிகள் / Proverbs 1–4 & கொலோசெயர் / Colossians 3' },
{ date: '2026-09-11', day: 'Friday', portion: 'நீதிமொழிகள் / Proverbs 5–7 & கொலோசெயர் / Colossians 4' },
{ date: '2026-09-12', day: 'Saturday', portion: 'நீதிமொழிகள் / Proverbs 8–11' },
{ date: '2026-09-13', day: 'Sunday', portion: 'நீதிமொழிகள் / Proverbs 12–14' },
{ date: '2026-09-14', day: 'Monday', portion: 'நீதிமொழிகள் / Proverbs 15–18 & 1 தெசலோனிக்கேயர் / 1 Thessalonians 1' },
{ date: '2026-09-15', day: 'Tuesday', portion: 'நீதிமொழிகள் / Proverbs 19–21 & 1 தெசலோனிக்கேயர் / 1 Thessalonians 2' },
{ date: '2026-09-16', day: 'Wednesday', portion: 'நீதிமொழிகள் / Proverbs 22–25 & 1 தெசலோனிக்கேயர் / 1 Thessalonians 3' },
{ date: '2026-09-17', day: 'Thursday', portion: 'நீதிமொழிகள் / Proverbs 26–28 & 1 தெசலோனிக்கேயர் / 1 Thessalonians 4' },
{ date: '2026-09-18', day: 'Friday', portion: 'நீதிமொழிகள் / Proverbs 29–31 & 1 தெசலோனிக்கேயர் / 1 Thessalonians 5' },
{ date: '2026-09-19', day: 'Saturday', portion: 'பிரசங்கி / Ecclesiastes 1–3' },
{ date: '2026-09-20', day: 'Sunday', portion: 'பிரசங்கி / Ecclesiastes 4–7' },
{ date: '2026-09-21', day: 'Monday', portion: 'பிரசங்கி / Ecclesiastes 8–11 & 2 தெசலோனிக்கேயர் / 2 Thessalonians 1' },
{ date: '2026-09-22', day: 'Tuesday', portion: 'பிரசங்கி / Ecclesiastes 12; உன்னதப்பாட்டு / Song of Solomon 1–4 & 2 தெசலோனிக்கேயர் / 2 Thessalonians 2' },
{ date: '2026-09-23', day: 'Wednesday', portion: 'உன்னதப்பாட்டு / Song of Solomon 5–8 & 2 தெசலோனிக்கேயர் / 2 Thessalonians 3' },
{ date: '2026-09-24', day: 'Thursday', portion: 'ஏசாயா / Isaiah 1–3 & 1 தீமோத்தேயு / 1 Timothy 1' },
{ date: '2026-09-25', day: 'Friday', portion: 'ஏசாயா / Isaiah 4–7 & 1 தீமோத்தேயு / 1 Timothy 2' },
{ date: '2026-09-26', day: 'Saturday', portion: 'ஏசாயா / Isaiah 8–9' },
{ date: '2026-09-27', day: 'Sunday', portion: 'ஏசாயா / Isaiah 10–13' },
{ date: '2026-09-28', day: 'Monday', portion: 'ஏசாயா / Isaiah 14–16 & 1 தீமோத்தேயு / 1 Timothy 3' },
{ date: '2026-09-29', day: 'Tuesday', portion: 'ஏசாயா / Isaiah 17–20 & 1 தீமோத்தேயு / 1 Timothy 4' },
{ date: '2026-09-30', day: 'Wednesday', portion: 'ஏசாயா / Isaiah 21–23 & 1 தீமோத்தேயு / 1 Timothy 5' },

// ===== OCTOBER 2026 =====
{ date: '2026-10-01', day: 'Thursday', portion: 'ஏசாயா / Isaiah 24–27 & 1 தீமோத்தேயு / 1 Timothy 6' },
{ date: '2026-10-02', day: 'Friday', portion: 'ஏசாயா / Isaiah 28–29 & 2 தீமோத்தேயு / 2 Timothy 1' },
{ date: '2026-10-03', day: 'Saturday', portion: 'ஏசாயா / Isaiah 30–32' },
{ date: '2026-10-04', day: 'Sunday', portion: 'ஏசாயா / Isaiah 33–36' },
{ date: '2026-10-05', day: 'Monday', portion: 'ஏசாயா / Isaiah 37 & 2 தீமோத்தேயு / 2 Timothy 2' },
{ date: '2026-10-06', day: 'Tuesday', portion: 'ஏசாயா / Isaiah 38–40 & 2 தீமோத்தேயு / 2 Timothy 3' },
{ date: '2026-10-07', day: 'Wednesday', portion: 'ஏசாயா / Isaiah 41–43 & 2 தீமோத்தேயு / 2 Timothy 4' },
{ date: '2026-10-08', day: 'Thursday', portion: 'ஏசாயா / Isaiah 44–45 & தீத்து / Titus 1' },
{ date: '2026-10-09', day: 'Friday', portion: 'ஏசாயா / Isaiah 46–48 & தீத்து / Titus 2' },
{ date: '2026-10-10', day: 'Saturday', portion: 'ஏசாயா / Isaiah 49–51' },
{ date: '2026-10-11', day: 'Sunday', portion: 'ஏசாயா / Isaiah 52–54' },
{ date: '2026-10-12', day: 'Monday', portion: 'ஏசாயா / Isaiah 55–58 & தீத்து / Titus 3' },
{ date: '2026-10-13', day: 'Tuesday', portion: 'ஏசாயா / Isaiah 59–61 & பிலேமோன் / Philemon 1' },
{ date: '2026-10-14', day: 'Wednesday', portion: 'ஏசாயா / Isaiah 62–64 & எபிரெயர் / Hebrews 1' },
{ date: '2026-10-15', day: 'Thursday', portion: 'ஏசாயா / Isaiah 65–66; எரேமியா / Jeremiah 1 & எபிரெயர் / Hebrews 2' },
{ date: '2026-10-16', day: 'Friday', portion: 'எரேமியா / Jeremiah 2–3 & எபிரெயர் / Hebrews 3' },
{ date: '2026-10-17', day: 'Saturday', portion: 'எரேமியா / Jeremiah 4–5' },
{ date: '2026-10-18', day: 'Sunday', portion: 'எரேமியா / Jeremiah 6–7' },
{ date: '2026-10-19', day: 'Monday', portion: 'எரேமியா / Jeremiah 8–9 & எபிரெயர் / Hebrews 4' },
{ date: '2026-10-20', day: 'Tuesday', portion: 'எரேமியா / Jeremiah 10–11 & எபிரெயர் / Hebrews 5' },
{ date: '2026-10-21', day: 'Wednesday', portion: 'எரேமியா / Jeremiah 12–13 & எபிரெயர் / Hebrews 6' },
{ date: '2026-10-22', day: 'Thursday', portion: 'எரேமியா / Jeremiah 14–16 & எபிரெயர் / Hebrews 7' },
{ date: '2026-10-23', day: 'Friday', portion: 'எரேமியா / Jeremiah 17–18 & எபிரெயர் / Hebrews 8' },
{ date: '2026-10-24', day: 'Saturday', portion: 'எரேமியா / Jeremiah 19–21' },
{ date: '2026-10-25', day: 'Sunday', portion: 'எரேமியா / Jeremiah 22–23' },
{ date: '2026-10-26', day: 'Monday', portion: 'எரேமியா / Jeremiah 24–25 & எபிரெயர் / Hebrews 9' },
{ date: '2026-10-27', day: 'Tuesday', portion: 'எரேமியா / Jeremiah 26–27 & எபிரெயர் / Hebrews 10' },
{ date: '2026-10-28', day: 'Wednesday', portion: 'எரேமியா / Jeremiah 28–29 & எபிரெயர் / Hebrews 11' },
{ date: '2026-10-29', day: 'Thursday', portion: 'எரேமியா / Jeremiah 30–31 & எபிரெயர் / Hebrews 12' },
{ date: '2026-10-30', day: 'Friday', portion: 'எரேமியா / Jeremiah 32 & எபிரெயர் / Hebrews 13' },
{ date: '2026-10-31', day: 'Saturday', portion: 'எரேமியா / Jeremiah 33–34' },

// ===== NOVEMBER 2026 =====
{ date: '2026-11-01', day: 'Sunday', portion: 'எரேமியா / Jeremiah 35–36' },
{ date: '2026-11-02', day: 'Monday', portion: 'எரேமியா / Jeremiah 37–38 & யாக்கோபு / James 1' },
{ date: '2026-11-03', day: 'Tuesday', portion: 'எரேமியா / Jeremiah 39–41 & யாக்கோபு / James 2' },
{ date: '2026-11-04', day: 'Wednesday', portion: 'எரேமியா / Jeremiah 42–43 & யாக்கோபு / James 3' },
{ date: '2026-11-05', day: 'Thursday', portion: 'எரேமியா / Jeremiah 44–46 & யாக்கோபு / James 4' },
{ date: '2026-11-06', day: 'Friday', portion: 'எரேமியா / Jeremiah 47–48 & யாக்கோபு / James 5' },
{ date: '2026-11-07', day: 'Saturday', portion: 'எரேமியா / Jeremiah 49' },
{ date: '2026-11-08', day: 'Sunday', portion: 'எரேமியா / Jeremiah 50' },
{ date: '2026-11-09', day: 'Monday', portion: 'எரேமியா / Jeremiah 51 & 1 பேதுரு / 1 Peter 1' },
{ date: '2026-11-10', day: 'Tuesday', portion: 'எரேமியா / Jeremiah 52; புலம்பல் / Lamentations 1 & 1 பேதுரு / 1 Peter 2' },
{ date: '2026-11-11', day: 'Wednesday', portion: 'புலம்பல் / Lamentations 2–3 & 1 பேதுரு / 1 Peter 3' },
{ date: '2026-11-12', day: 'Thursday', portion: 'புலம்பல் / Lamentations 4–5; எசேக்கியேல் / Ezekiel 1 & 1 பேதுரு / 1 Peter 4' },
{ date: '2026-11-13', day: 'Friday', portion: 'எசேக்கியேல் / Ezekiel 2–4 & 1 பேதுரு / 1 Peter 5' },
{ date: '2026-11-14', day: 'Saturday', portion: 'எசேக்கியேல் / Ezekiel 5–7' },
{ date: '2026-11-15', day: 'Sunday', portion: 'எசேக்கியேல் / Ezekiel 8–10' },
{ date: '2026-11-16', day: 'Monday', portion: 'எசேக்கியேல் / Ezekiel 11–12 & 2 பேதுரு / 2 Peter 1' },
{ date: '2026-11-17', day: 'Tuesday', portion: 'எசேக்கியேல் / Ezekiel 13–15 & 2 பேதுரு / 2 Peter 2' },
{ date: '2026-11-18', day: 'Wednesday', portion: 'எசேக்கியேல் / Ezekiel 16 & 2 பேதுரு / 2 Peter 3' },
{ date: '2026-11-19', day: 'Thursday', portion: 'எசேக்கியேல் / Ezekiel 17–18 & 1 யோவான் / 1 John 1' },
{ date: '2026-11-20', day: 'Friday', portion: 'எசேக்கியேல் / Ezekiel 19–20 & 1 யோவான் / 1 John 2' },
{ date: '2026-11-21', day: 'Saturday', portion: 'எசேக்கியேல் / Ezekiel 21' },
{ date: '2026-11-22', day: 'Sunday', portion: 'எசேக்கியேல் / Ezekiel 22–23' },
{ date: '2026-11-23', day: 'Monday', portion: 'எசேக்கியேல் / Ezekiel 24–25 & 1 யோவான் / 1 John 3' },
{ date: '2026-11-24', day: 'Tuesday', portion: 'எசேக்கியேல் / Ezekiel 26–27 & 1 யோவான் / 1 John 4' },
{ date: '2026-11-25', day: 'Wednesday', portion: 'எசேக்கியேல் / Ezekiel 28–29 & 1 யோவான் / 1 John 5' },
{ date: '2026-11-26', day: 'Thursday', portion: 'எசேக்கியேல் / Ezekiel 30–31 & 2 யோவான் / 2 John 1' },
{ date: '2026-11-27', day: 'Friday', portion: 'எசேக்கியேல் / Ezekiel 32–33 & 3 யோவான் / 3 John 1' },
{ date: '2026-11-28', day: 'Saturday', portion: 'எசேக்கியேல் / Ezekiel 34–35' },
{ date: '2026-11-29', day: 'Sunday', portion: 'எசேக்கியேல் / Ezekiel 36–37' },
{ date: '2026-11-30', day: 'Monday', portion: 'எசேக்கியேல் / Ezekiel 38–39 & யூதா / Jude 1' },

// ===== DECEMBER 2026 =====
{ date: '2026-12-01', day: 'Tuesday', portion: 'எசேக்கியேல் / Ezekiel 40 & வெளிப்படுத்தின விசேஷம் / Revelation 1' },
{ date: '2026-12-02', day: 'Wednesday', portion: 'எசேக்கியேல் / Ezekiel 41–42 & வெளிப்படுத்தின விசேஷம் / Revelation 2' },
{ date: '2026-12-03', day: 'Thursday', portion: 'எசேக்கியேல் / Ezekiel 43–44 & வெளிப்படுத்தின விசேஷம் / Revelation 3' },
{ date: '2026-12-04', day: 'Friday', portion: 'எசேக்கியேல் / Ezekiel 45–46 & வெளிப்படுத்தின விசேஷம் / Revelation 4' },
{ date: '2026-12-05', day: 'Saturday', portion: 'எசேக்கியேல் / Ezekiel 47–48' },
{ date: '2026-12-06', day: 'Sunday', portion: 'தானியேல் / Daniel 1' },
{ date: '2026-12-07', day: 'Monday', portion: 'தானியேல் / Daniel 2–3 & வெளிப்படுத்தின விசேஷம் / Revelation 5' },
{ date: '2026-12-08', day: 'Tuesday', portion: 'தானியேல் / Daniel 4 & வெளிப்படுத்தின விசேஷம் / Revelation 6' },
{ date: '2026-12-09', day: 'Wednesday', portion: 'தானியேல் / Daniel 5–6 & வெளிப்படுத்தின விசேஷம் / Revelation 7' },
{ date: '2026-12-10', day: 'Thursday', portion: 'தானியேல் / Daniel 7–8 & வெளிப்படுத்தின விசேஷம் / Revelation 8' },
{ date: '2026-12-11', day: 'Friday', portion: 'தானியேல் / Daniel 9–10 & வெளிப்படுத்தின விசேஷம் / Revelation 9' },
{ date: '2026-12-12', day: 'Saturday', portion: 'தானியேல் / Daniel 11' },
{ date: '2026-12-13', day: 'Sunday', portion: 'தானியேல் / Daniel 12; ஓசியா / Hosea 1–3' },
{ date: '2026-12-14', day: 'Monday', portion: 'ஓசியா / Hosea 4–8 & வெளிப்படுத்தின விசேஷம் / Revelation 10' },
{ date: '2026-12-15', day: 'Tuesday', portion: 'ஓசியா / Hosea 9–12 & வெளிப்படுத்தின விசேஷம் / Revelation 11' },
{ date: '2026-12-16', day: 'Wednesday', portion: 'ஓசியா / Hosea 13–14; யோவேல் / Joel 1–2 & வெளிப்படுத்தின விசேஷம் / Revelation 12' },
{ date: '2026-12-17', day: 'Thursday', portion: 'யோவேல் / Joel 3; ஆமோஸ் / Amos 1–2 & வெளிப்படுத்தின விசேஷம் / Revelation 13' },
{ date: '2026-12-18', day: 'Friday', portion: 'ஆமோஸ் / Amos 3–5 & வெளிப்படுத்தின விசேஷம் / Revelation 14' },
{ date: '2026-12-19', day: 'Saturday', portion: 'ஆமோஸ் / Amos 6–9' },
{ date: '2026-12-20', day: 'Sunday', portion: 'ஒபதியா / Obadiah; யோனா / Jonah 1–3' },
{ date: '2026-12-21', day: 'Monday', portion: 'யோனா / Jonah 4; மீகா / Micah 1–3 & வெளிப்படுத்தின விசேஷம் / Revelation 15' },
{ date: '2026-12-22', day: 'Tuesday', portion: 'மீகா / Micah 4–7 & வெளிப்படுத்தின விசேஷம் / Revelation 16' },
{ date: '2026-12-23', day: 'Wednesday', portion: 'நாகூம் / Nahum 1–3; ஆபகூக் / Habakkuk 1 & வெளிப்படுத்தின விசேஷம் / Revelation 17' },
{ date: '2026-12-24', day: 'Thursday', portion: 'ஆபகூக் / Habakkuk 2–3; செப்பனியா / Zephaniah 1 & வெளிப்படுத்தின விசேஷம் / Revelation 18' },
{ date: '2026-12-25', day: 'Friday', portion: 'செப்பனியா / Zephaniah 2–3; ஆகாய் / Haggai 1 & வெளிப்படுத்தின விசேஷம் / Revelation 19' },
{ date: '2026-12-26', day: 'Saturday', portion: 'ஆகாய் / Haggai 2; சகரியா / Zechariah 1–3' },
{ date: '2026-12-27', day: 'Sunday', portion: 'சகரியா / Zechariah 4–7' },
{ date: '2026-12-28', day: 'Monday', portion: 'சகரியா / Zechariah 8–11 & வெளிப்படுத்தின விசேஷம் / Revelation 20' },
{ date: '2026-12-29', day: 'Tuesday', portion: 'சகரியா / Zechariah 12–14 & வெளிப்படுத்தின விசேஷம் / Revelation 21' },
{ date: '2026-12-30', day: 'Wednesday', portion: 'மல்கியா / Malachi 1–4 & வெளிப்படுத்தின விசேஷம் / Revelation 22' }

];

// Create alias for BIBLE_READING_PLAN
const BIBLE_READING_PLAN = BIBLE_READING_PLAN_2026;

// Storage keys (for localStorage fallback)
const STORAGE_KEYS = {
    PARTICIPANTS: 'bible_participants',
    COMPLETIONS: 'bible_completions',
    CURRENT_USER: 'bible_current_user',
    ADMINS: 'bible_admins'
};

// Default admin credentials
const DEFAULT_ADMINS = {
    admin: 'bible2025',
    jebastin: 'admin123'
};

// Initialize localStorage fallback
function initializeStorage() {
    if (!localStorage.getItem(STORAGE_KEYS.PARTICIPANTS)) {
        localStorage.setItem(STORAGE_KEYS.PARTICIPANTS, JSON.stringify([]));
    }
    if (!localStorage.getItem(STORAGE_KEYS.COMPLETIONS)) {
        localStorage.setItem(STORAGE_KEYS.COMPLETIONS, JSON.stringify([]));
    }
    if (!localStorage.getItem(STORAGE_KEYS.ADMINS)) {
        localStorage.setItem(STORAGE_KEYS.ADMINS, JSON.stringify(DEFAULT_ADMINS));
    }
}

// Initialize reading plan
async function initializeReadingPlan() {
    initFirebase();
    initializeStorage();
    return BIBLE_READING_PLAN;
}

// ========== FIREBASE FUNCTIONS ==========

// Get participants from Firebase
async function getParticipants() {
    initializeStorage();
    
    // Try Firebase first
    if (firebaseReady && db) {
        try {
            const snapshot = await db.collection('participants').get();
            const participants = [];
            snapshot.forEach(doc => {
                participants.push(doc.data().name);
            });
            // Sync to localStorage
            localStorage.setItem(STORAGE_KEYS.PARTICIPANTS, JSON.stringify(participants));
            return participants;
        } catch (e) {
            console.log('Firebase read error, using localStorage:', e);
        }
    }
    
    // Fallback to localStorage
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.PARTICIPANTS) || '[]');
}

// Save participant to Firebase
async function saveParticipant(name) {
    const participants = await getParticipants();
    if (participants.includes(name)) {
        throw new Error('This participant already exists');
    }
    
    // Save to Firebase
    if (firebaseReady && db) {
        try {
            await db.collection('participants').doc(name).set({
                name: name,
                createdAt: new Date().toISOString()
            });
            console.log('✅ Participant saved to Firebase');
        } catch (e) {
            console.log('Firebase write error:', e);
        }
    }
    
    // Also save to localStorage
    participants.push(name);
    localStorage.setItem(STORAGE_KEYS.PARTICIPANTS, JSON.stringify(participants));
    return { name };
}

// Remove participant from Firebase
async function removeParticipant(name) {
    // Remove from Firebase
    if (firebaseReady && db) {
        try {
            await db.collection('participants').doc(name).delete();
            console.log('✅ Participant removed from Firebase');
        } catch (e) {
            console.log('Firebase delete error:', e);
        }
    }
    
    // Also remove from localStorage
    const participants = await getParticipants();
    const index = participants.indexOf(name);
    if (index > -1) {
        participants.splice(index, 1);
        localStorage.setItem(STORAGE_KEYS.PARTICIPANTS, JSON.stringify(participants));
    }
    return true;
}

// Get completions from Firebase
async function getCompletions() {
    initializeStorage();
    
    // Try Firebase first
    if (firebaseReady && db) {
        try {
            const snapshot = await db.collection('completions').get();
            const completions = [];
            snapshot.forEach(doc => {
                completions.push(doc.data());
            });
            // Sync to localStorage
            localStorage.setItem(STORAGE_KEYS.COMPLETIONS, JSON.stringify(completions));
            return completions;
        } catch (e) {
            console.log('Firebase read error, using localStorage:', e);
        }
    }
    
    // Fallback to localStorage
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.COMPLETIONS) || '[]');
}

// Save completion to Firebase
async function saveCompletion(userName, date, portion, day, isCatchup = false) {
    const completions = await getCompletions();
    const existing = completions.find(c => c.userName === userName && c.date === date);
    if (existing) {
        throw new Error('Already marked complete');
    }
    
    const entry = {
        userName,
        date,
        portion,
        completedOn: new Date().toISOString(),
        catchup: isCatchup,
        day
    };
    
    // Save to Firebase
    if (firebaseReady && db) {
        try {
            const docId = `${userName}_${date}`;
            await db.collection('completions').doc(docId).set(entry);
            console.log('✅ Completion saved to Firebase');
        } catch (e) {
            console.log('Firebase write error:', e);
        }
    }
    
    // Also save to localStorage
    completions.push(entry);
    localStorage.setItem(STORAGE_KEYS.COMPLETIONS, JSON.stringify(completions));
    return entry;
}

// Remove completion from Firebase
async function removeCompletion(userName, date) {
    // Remove from Firebase
    if (firebaseReady && db) {
        try {
            const docId = `${userName}_${date}`;
            await db.collection('completions').doc(docId).delete();
            console.log('✅ Completion removed from Firebase');
        } catch (e) {
            console.log('Firebase delete error:', e);
        }
    }
    
    // Also remove from localStorage
    const completions = await getCompletions();
    const filtered = completions.filter(c => !(c.userName === userName && c.date === date));
    localStorage.setItem(STORAGE_KEYS.COMPLETIONS, JSON.stringify(filtered));
    return true;
}

// Clear ALL completions
async function clearAllCompletions() {
    // Clear from Firebase
    if (firebaseReady && db) {
        try {
            const snapshot = await db.collection('completions').get();
            const batch = db.batch();
            snapshot.forEach(doc => {
                batch.delete(doc.ref);
            });
            await batch.commit();
            console.log('✅ All completions cleared from Firebase');
        } catch (e) {
            console.log('Firebase clear error:', e);
        }
    }
    
    // Also clear localStorage
    localStorage.setItem(STORAGE_KEYS.COMPLETIONS, JSON.stringify([]));
    return true;
}

// Get current user
function getCurrentUser() {
    return localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
}

// Save current user
function saveCurrentUser(userName) {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, userName);
}

// Get reading for specific date
function getReadingForDate(dateString) {
    return BIBLE_READING_PLAN.find(reading => reading.date === dateString);
}

// Get all readings up to date
function getReadingsUpToDate(dateString) {
    const targetDate = new Date(dateString);
    return BIBLE_READING_PLAN.filter(reading => new Date(reading.date) <= targetDate);
}

// Check if date is weekend
function isWeekend(date) {
    const day = date.getDay();
    return day === 0 || day === 6;
}

// Check if date is weekday
function isWeekday(date) {
    return !isWeekend(date);
}

// Format date to YYYY-MM-DD
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Get today's date string
function getTodayString() {
    return formatDate(new Date());
}

// Get month name
function getMonthName(monthIndex) {
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    return months[monthIndex];
}

// Get day name
function getDayName(dayIndex) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
}

// Format portion display
function formatPortionDisplay(portion, portionTamil = null) {
    if (portionTamil && portionTamil !== portion) {
        return `<div style="display: flex; flex-direction: column; gap: 8px;">
                    <div style="font-weight: 600;">🇬🇧 ${portion}</div>
                    <div style="font-weight: 600; color: var(--text-secondary);">🇮🇳 ${portionTamil}</div>
                </div>`;
    }
    return portion;
}

// Clear local data
function clearLocalData() {
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
}

// Verify admin credentials
async function verifyAdmin(username, password) {
    const admins = JSON.parse(localStorage.getItem(STORAGE_KEYS.ADMINS) || '{}');
    const allAdmins = { ...DEFAULT_ADMINS, ...admins };
    if (allAdmins[username] && allAdmins[username] === password) {
        return { success: true, admin: { id: 1, username } };
    }
    return { success: false, error: 'Invalid username or password' };
}

// Add admin
async function addAdmin(username, password) {
    const admins = JSON.parse(localStorage.getItem(STORAGE_KEYS.ADMINS) || '{}');
    admins[username] = password;
    localStorage.setItem(STORAGE_KEYS.ADMINS, JSON.stringify(admins));
    return { success: true };
}

const ADMIN_PASSWORD = 'bible2025';

// Expose globals for other scripts
window.getParticipants = getParticipants;
window.saveParticipant = saveParticipant;
window.removeParticipant = removeParticipant;
window.getCompletions = getCompletions;
window.saveCompletion = saveCompletion;
window.removeCompletion = removeCompletion;
window.clearAllCompletions = clearAllCompletions;
window.getCurrentUser = getCurrentUser;
window.saveCurrentUser = saveCurrentUser;
window.getReadingForDate = getReadingForDate;
window.getReadingsUpToDate = getReadingsUpToDate;
window.isWeekend = isWeekend;
window.isWeekday = isWeekday;
window.formatDate = formatDate;
window.getTodayString = getTodayString;
window.getMonthName = getMonthName;
window.getDayName = getDayName;
window.formatPortionDisplay = formatPortionDisplay;
window.loadSampleData = () => BIBLE_READING_PLAN;
window.initializeReadingPlan = initializeReadingPlan;
window.verifyAdmin = verifyAdmin;
window.addAdmin = addAdmin;
window.ADMIN_PASSWORD = ADMIN_PASSWORD;
window.BIBLE_READING_PLAN = BIBLE_READING_PLAN;
window.clearLocalData = clearLocalData;
window.__supabaseHelpersLoaded = true;
