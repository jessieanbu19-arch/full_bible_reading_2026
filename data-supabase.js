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
  { date: '2026-01-04', day: 'Sunday', portion: 'Genesis 1–2 | Matthew 1–2' },
  { date: '2026-01-05', day: 'Monday', portion: 'Genesis 3–5 | Matthew 3' },
  { date: '2026-01-06', day: 'Tuesday', portion: 'Genesis 6–8 | Matthew 4' },
  { date: '2026-01-07', day: 'Wednesday', portion: 'Genesis 9–11 | Matthew 5' },
  { date: '2026-01-08', day: 'Thursday', portion: 'Genesis 12–15 | Matthew 6' },
  { date: '2026-01-09', day: 'Friday', portion: 'Genesis 16–17 | Matthew 7' },
  { date: '2026-01-10', day: 'Saturday', portion: 'Genesis 18–19' },
  { date: '2026-01-11', day: 'Sunday', portion: 'Genesis 20–22' },
  { date: '2026-01-12', day: 'Monday', portion: 'Genesis 23–24 | Matthew 8' },
  { date: '2026-01-13', day: 'Tuesday', portion: 'Genesis 25–26 | Matthew 9' },
  { date: '2026-01-14', day: 'Wednesday', portion: 'Genesis 27 | Matthew 10' },
  { date: '2026-01-15', day: 'Thursday', portion: 'Genesis 28–29 | Matthew 11' },
  { date: '2026-01-16', day: 'Friday', portion: 'Genesis 30–31 | Matthew 12' },
  { date: '2026-01-17', day: 'Saturday', portion: 'Genesis 32–33' },
  { date: '2026-01-18', day: 'Sunday', portion: 'Genesis 34–35' },
  { date: '2026-01-19', day: 'Monday', portion: 'Genesis 36–37 | Matthew 13' },
  { date: '2026-01-20', day: 'Tuesday', portion: 'Genesis 38–40 | Matthew 14' },
  { date: '2026-01-21', day: 'Wednesday', portion: 'Genesis 41 | Matthew 15' },
  { date: '2026-01-22', day: 'Thursday', portion: 'Genesis 42–43 | Matthew 16' },
  { date: '2026-01-23', day: 'Friday', portion: 'Genesis 44–45 | Matthew 17' },
  { date: '2026-01-24', day: 'Saturday', portion: 'Genesis 46–47' },
  { date: '2026-01-25', day: 'Sunday', portion: 'Genesis 48–50' },
  { date: '2026-01-26', day: 'Monday', portion: 'Exodus 1–2 | Matthew 18' },
  { date: '2026-01-27', day: 'Tuesday', portion: 'Exodus 3–5 | Matthew 19' },
  { date: '2026-01-28', day: 'Wednesday', portion: 'Exodus 6–7 | Matthew 20' },
  { date: '2026-01-29', day: 'Thursday', portion: 'Exodus 8–9 | Matthew 21' },
  { date: '2026-01-30', day: 'Friday', portion: 'Exodus 10–11 | Matthew 22' },
  // ===== FEBRUARY 2026 =====
  { date: '2026-02-01', day: 'Sunday', portion: 'Exodus 14–15' },
  { date: '2026-02-02', day: 'Monday', portion: 'Exodus 16–17 | Matthew 23' },
  { date: '2026-02-03', day: 'Tuesday', portion: 'Exodus 18–20 | Matthew 24' },
  { date: '2026-02-04', day: 'Wednesday', portion: 'Exodus 21–22 | Matthew 25' },
  { date: '2026-02-05', day: 'Thursday', portion: 'Exodus 23–24 | Matthew 26' },
  { date: '2026-02-06', day: 'Friday', portion: 'Exodus 25–26 | Matthew 27' },
  { date: '2026-02-07', day: 'Saturday', portion: 'Exodus 27–28' },
  { date: '2026-02-08', day: 'Sunday', portion: 'Exodus 29–30' },
  { date: '2026-02-09', day: 'Monday', portion: 'Exodus 31–32 | Matthew 28' },
  { date: '2026-02-10', day: 'Tuesday', portion: 'Exodus 33–34 | Mark 1' },
  { date: '2026-02-11', day: 'Wednesday', portion: 'Exodus 35–36 | Mark 2' },
  { date: '2026-02-12', day: 'Thursday', portion: 'Exodus 37–38 | Mark 3' },
  { date: '2026-02-13', day: 'Friday', portion: 'Exodus 39–40 | Mark 4' },
  { date: '2026-02-14', day: 'Saturday', portion: 'Leviticus 1–3' },
  { date: '2026-02-15', day: 'Sunday', portion: 'Leviticus 4–5' },
  { date: '2026-02-16', day: 'Monday', portion: 'Leviticus 6–7 | Mark 5' },
  { date: '2026-02-17', day: 'Tuesday', portion: 'Leviticus 8–9 | Mark 6' },
  { date: '2026-02-18', day: 'Wednesday', portion: 'Leviticus 10–11 | Mark 7' },
  { date: '2026-02-19', day: 'Thursday', portion: 'Leviticus 12–13 | Mark 8' },
  { date: '2026-02-20', day: 'Friday', portion: 'Leviticus 14 | Mark 9' },
  { date: '2026-02-21', day: 'Saturday', portion: 'Leviticus 15' },
  { date: '2026-02-22', day: 'Sunday', portion: 'Leviticus 16–17' },
  { date: '2026-02-23', day: 'Monday', portion: 'Leviticus 18–19 | Mark 10' },
  { date: '2026-02-24', day: 'Tuesday', portion: 'Leviticus 20–22 | Mark 11' },
  { date: '2026-02-25', day: 'Wednesday', portion: 'Leviticus 23 | Mark 12' },
  { date: '2026-02-26', day: 'Thursday', portion: 'Leviticus 24–25 | Mark 13' },
  { date: '2026-02-27', day: 'Friday', portion: 'Leviticus 26 | Mark 14' },
  { date: '2026-02-28', day: 'Saturday', portion: 'Leviticus 27; Numbers 1' },
  { date: '2026-03-01', day: 'Sunday', portion: 'Numbers 2' },
  { date: '2026-03-02', day: 'Monday', portion: 'Numbers 3–4 | Mark 15' },
  { date: '2026-03-03', day: 'Tuesday', portion: 'Numbers 5 | Mark 16' },
  { date: '2026-03-04', day: 'Wednesday', portion: 'Numbers 6–7 | Luke 1' },
  { date: '2026-03-05', day: 'Thursday', portion: 'Numbers 8 | Luke 2' },
  { date: '2026-03-06', day: 'Friday', portion: 'Numbers 9–10 | Luke 3' },
  { date: '2026-03-07', day: 'Saturday', portion: 'Numbers 11–13' },
  { date: '2026-03-08', day: 'Sunday', portion: 'Numbers 14' },
  { date: '2026-03-09', day: 'Monday', portion: 'Numbers 15–16 | Luke 4' },
  { date: '2026-03-10', day: 'Tuesday', portion: 'Numbers 17–18 | Luke 5' },
  { date: '2026-03-11', day: 'Wednesday', portion: 'Numbers 19–20 | Luke 6' },
  { date: '2026-03-12', day: 'Thursday', portion: 'Numbers 21–22 | Luke 7' },
  { date: '2026-03-13', day: 'Friday', portion: 'Numbers 23–24 | Luke 8' },
  { date: '2026-03-14', day: 'Saturday', portion: 'Numbers 25–26' },
  { date: '2026-03-15', day: 'Sunday', portion: 'Numbers 27–28' },
  { date: '2026-03-16', day: 'Monday', portion: 'Numbers 29–30 | Luke 9' },
  { date: '2026-03-17', day: 'Tuesday', portion: 'Numbers 31–32 | Luke 10' },
  { date: '2026-03-18', day: 'Wednesday', portion: 'Numbers 33–34 | Luke 11' },
  { date: '2026-03-19', day: 'Thursday', portion: 'Numbers 35–36 | Luke 12' },
  { date: '2026-03-20', day: 'Friday', portion: 'Deuteronomy 1–2 | Luke 13' },
  { date: '2026-03-21', day: 'Saturday', portion: 'Deuteronomy 3' },
  { date: '2026-03-22', day: 'Sunday', portion: 'Deuteronomy 4–5' },
  { date: '2026-03-23', day: 'Monday', portion: 'Deuteronomy 6–7 | Luke 14' },
  { date: '2026-03-24', day: 'Tuesday', portion: 'Deuteronomy 8–9 | Luke 15' },
  { date: '2026-03-25', day: 'Wednesday', portion: 'Deuteronomy 10–11 | Luke 16' },
  { date: '2026-03-26', day: 'Thursday', portion: 'Deuteronomy 12–13 | Luke 17' },
  { date: '2026-03-27', day: 'Friday', portion: 'Deuteronomy 14–16 | Luke 18' },
  { date: '2026-03-28', day: 'Saturday', portion: 'Deuteronomy 17–18' },
  { date: '2026-03-29', day: 'Sunday', portion: 'Deuteronomy 19–21' },
  { date: '2026-03-30', day: 'Monday', portion: 'Deuteronomy 22–23 | Luke 19' },
  { date: '2026-03-31', day: 'Tuesday', portion: 'Deuteronomy 24–25 | Luke 20' },
  // ===== APRIL 2026 =====
  { date: '2026-04-01', day: 'Wednesday', portion: 'Deuteronomy 26–27 | Luke 21' },
  { date: '2026-04-02', day: 'Thursday', portion: 'Deuteronomy 28 | Luke 22' },
  { date: '2026-04-03', day: 'Friday', portion: 'Deuteronomy 29–30 | Luke 23' },
  { date: '2026-04-04', day: 'Saturday', portion: 'Deuteronomy 31–32' },
  { date: '2026-04-05', day: 'Sunday', portion: 'Deuteronomy 33–34; Joshua 1' },
  { date: '2026-04-06', day: 'Monday', portion: 'Joshua 2–3 | Luke 24' },
  { date: '2026-04-07', day: 'Tuesday', portion: 'Joshua 4–6 | John 1' },
  { date: '2026-04-08', day: 'Wednesday', portion: 'Joshua 7 | John 2' },
  { date: '2026-04-09', day: 'Thursday', portion: 'Joshua 8–9 | John 3' },
  { date: '2026-04-10', day: 'Friday', portion: 'Joshua 10–11 | John 4' },
  { date: '2026-04-11', day: 'Saturday', portion: 'Joshua 12–13' },
  { date: '2026-04-12', day: 'Sunday', portion: 'Joshua 14–16' },
  { date: '2026-04-13', day: 'Monday', portion: 'Joshua 17–18 | John 5' },
  { date: '2026-04-14', day: 'Tuesday', portion: 'Joshua 19–21 | John 6' },
  { date: '2026-04-15', day: 'Wednesday', portion: 'Joshua 22 | John 7' },
  { date: '2026-04-16', day: 'Thursday', portion: 'Joshua 23–24 | John 8' },
  { date: '2026-04-17', day: 'Friday', portion: 'Judges 1–2 | John 9' },
  { date: '2026-04-18', day: 'Saturday', portion: 'Judges 3–5' },
  { date: '2026-04-19', day: 'Sunday', portion: 'Judges 6' },
  { date: '2026-04-20', day: 'Monday', portion: 'Judges 7–8 | John 10' },
  { date: '2026-04-21', day: 'Tuesday', portion: 'Judges 9 | John 11' },
  { date: '2026-04-22', day: 'Wednesday', portion: 'Judges 10–11 | John 12' },
  { date: '2026-04-23', day: 'Thursday', portion: 'Judges 12–14 | John 13' },
  { date: '2026-04-24', day: 'Friday', portion: 'Judges 15–16 | John 14' },
  { date: '2026-04-25', day: 'Saturday', portion: 'Judges 17–18' },
  { date: '2026-04-26', day: 'Sunday', portion: 'Judges 19' },
  { date: '2026-04-27', day: 'Monday', portion: 'Judges 20–21 | John 15' },
  { date: '2026-04-28', day: 'Tuesday', portion: 'Ruth 1–3 | John 16' },
  { date: '2026-04-29', day: 'Wednesday', portion: 'Ruth 4; 1 Samuel 1 | John 17' },
  { date: '2026-04-30', day: 'Thursday', portion: '1 Samuel 2–3 | John 18' },
  { date: '2026-05-01', day: 'Friday', portion: '1 Samuel 4–6 | John 19' },
  { date: '2026-05-02', day: 'Saturday', portion: '1 Samuel 7–9' },
  { date: '2026-05-03', day: 'Sunday', portion: '1 Samuel 10–11' },
  { date: '2026-05-04', day: 'Monday', portion: '1 Samuel 12–13 | John 20' },
  { date: '2026-05-05', day: 'Tuesday', portion: '1 Samuel 14 | John 21' },
  { date: '2026-05-06', day: 'Wednesday', portion: '1 Samuel 15–16 | Acts 1' },
  { date: '2026-05-07', day: 'Thursday', portion: '1 Samuel 17 | Acts 2' },
  { date: '2026-05-08', day: 'Friday', portion: '1 Samuel 18–19 | Acts 3' },
  { date: '2026-05-09', day: 'Saturday', portion: '1 Samuel 20–21' },
  { date: '2026-05-10', day: 'Sunday', portion: '1 Samuel 22–24' },
  { date: '2026-05-11', day: 'Monday', portion: '1 Samuel 25 | Acts 4' },
  { date: '2026-05-12', day: 'Tuesday', portion: '1 Samuel 26–28 | Acts 5' },
  { date: '2026-05-13', day: 'Wednesday', portion: '1 Samuel 29–30 | Acts 6' },
  { date: '2026-05-14', day: 'Thursday', portion: '1 Samuel 31; 2 Samuel 1–2 | Acts 7' },
  { date: '2026-05-15', day: 'Friday', portion: '2 Samuel 3 | Acts 8' },
  { date: '2026-05-16', day: 'Saturday', portion: '2 Samuel 4–6' },
  { date: '2026-05-17', day: 'Sunday', portion: '2 Samuel 7–9' },
  { date: '2026-05-18', day: 'Monday', portion: '2 Samuel 10–11 | Acts 9' },
  { date: '2026-05-19', day: 'Tuesday', portion: '2 Samuel 12–13 | Acts 10' },
  { date: '2026-05-20', day: 'Wednesday', portion: '2 Samuel 14 | Acts 11' },
  { date: '2026-05-21', day: 'Thursday', portion: '2 Samuel 15–16 | Acts 12' },
  { date: '2026-05-22', day: 'Friday', portion: '2 Samuel 17–18 | Acts 13' },
  { date: '2026-05-23', day: 'Saturday', portion: '2 Samuel 19' },
  { date: '2026-05-24', day: 'Sunday', portion: '2 Samuel 20–21' },
  { date: '2026-05-25', day: 'Monday', portion: '2 Samuel 22–23 | Acts 14' },
  { date: '2026-05-26', day: 'Tuesday', portion: '2 Samuel 24; 1 Kings 1 | Acts 15' },
  { date: '2026-05-27', day: 'Wednesday', portion: '1 Kings 2 | Acts 16' },
  { date: '2026-05-28', day: 'Thursday', portion: '1 Kings 3–4 | Acts 17' },
  { date: '2026-05-29', day: 'Friday', portion: '1 Kings 5–6 | Acts 18' },
  { date: '2026-05-30', day: 'Saturday', portion: '1 Kings 7' },
  { date: '2026-05-31', day: 'Sunday', portion: '1 Kings 8' },
  // ===== JUNE 2026 =====
  { date: '2026-06-01', day: 'Monday', portion: '1 Kings 9–10 | Acts 19' },
  { date: '2026-06-02', day: 'Tuesday', portion: '1 Kings 11 | Acts 20' },
  { date: '2026-06-03', day: 'Wednesday', portion: '1 Kings 12–13 | Acts 21' },
  { date: '2026-06-04', day: 'Thursday', portion: '1 Kings 14 | Acts 22' },
  { date: '2026-06-05', day: 'Friday', portion: '1 Kings 15–16 | Acts 23' },
  { date: '2026-06-06', day: 'Saturday', portion: '1 Kings 17–18' },
  { date: '2026-06-07', day: 'Sunday', portion: '1 Kings 19' },
  { date: '2026-06-08', day: 'Monday', portion: '1 Kings 20–21 | Acts 24' },
  { date: '2026-06-09', day: 'Tuesday', portion: '1 Kings 22 | Acts 25' },
  { date: '2026-06-10', day: 'Wednesday', portion: '2 Kings 1–3 | Acts 26' },
  { date: '2026-06-11', day: 'Thursday', portion: '2 Kings 4 | Acts 27' },
  { date: '2026-06-12', day: 'Friday', portion: '2 Kings 5–6 | Acts 28' },
  { date: '2026-06-13', day: 'Saturday', portion: '2 Kings 7–8' },
  { date: '2026-06-14', day: 'Sunday', portion: '2 Kings 9' },
  { date: '2026-06-15', day: 'Monday', portion: '2 Kings 10–11 | Romans 1' },
  { date: '2026-06-16', day: 'Tuesday', portion: '2 Kings 12–13 | Romans 2' },
  { date: '2026-06-17', day: 'Wednesday', portion: '2 Kings 14–15 | Romans 3' },
  { date: '2026-06-18', day: 'Thursday', portion: '2 Kings 16–17 | Romans 4' },
  { date: '2026-06-19', day: 'Friday', portion: '2 Kings 18 | Romans 5' },
  { date: '2026-06-20', day: 'Saturday', portion: '2 Kings 19–20' },
  { date: '2026-06-21', day: 'Sunday', portion: '2 Kings 21–22' },
  { date: '2026-06-22', day: 'Monday', portion: '2 Kings 23 | Romans 6' },
  { date: '2026-06-23', day: 'Tuesday', portion: '2 Kings 24–25; 1 Chronicles 1 | Romans 7' },
  { date: '2026-06-24', day: 'Wednesday', portion: '1 Chronicles 2–3 | Romans 8' },
  { date: '2026-06-25', day: 'Thursday', portion: '1 Chronicles 4–5 | Romans 9' },
  { date: '2026-06-26', day: 'Friday', portion: '1 Chronicles 6–7 | Romans 10' },
  { date: '2026-06-27', day: 'Saturday', portion: '1 Chronicles 8–9' },
  { date: '2026-06-28', day: 'Sunday', portion: '1 Chronicles 10–11' },
  { date: '2026-06-29', day: 'Monday', portion: '1 Chronicles 12–14 | Romans 11' },
  { date: '2026-06-30', day: 'Tuesday', portion: '1 Chronicles 15–16 | Romans 12' },
  // ===== JULY 2026 =====
  { date: '2026-07-01', day: 'Wednesday', portion: '1 Chronicles 17–19 | Romans 13' },
  { date: '2026-07-02', day: 'Thursday', portion: '1 Chronicles 20–22 | Romans 14' },
  { date: '2026-07-03', day: 'Friday', portion: '1 Chronicles 23–25 | Romans 15' },
  { date: '2026-07-04', day: 'Saturday', portion: '1 Chronicles 26–27' },
  { date: '2026-07-05', day: 'Sunday', portion: '1 Chronicles 28–29' },
  { date: '2026-07-06', day: 'Monday', portion: '2 Chronicles 1–3 | Romans 16' },
  { date: '2026-07-07', day: 'Tuesday', portion: '2 Chronicles 4–5 | 1 Corinthians 1' },
  { date: '2026-07-08', day: 'Wednesday', portion: '2 Chronicles 6–7 | 1 Corinthians 2' },
  { date: '2026-07-09', day: 'Thursday', portion: '2 Chronicles 8–10 | 1 Corinthians 3' },
  { date: '2026-07-10', day: 'Friday', portion: '2 Chronicles 11–13 | 1 Corinthians 4' },
  { date: '2026-07-11', day: 'Saturday', portion: '2 Chronicles 14–16' },
  { date: '2026-07-12', day: 'Sunday', portion: '2 Chronicles 17–19' },
  { date: '2026-07-13', day: 'Monday', portion: '2 Chronicles 20–21 | 1 Corinthians 5' },
  { date: '2026-07-14', day: 'Tuesday', portion: '2 Chronicles 22–23 | 1 Corinthians 6' },
  { date: '2026-07-15', day: 'Wednesday', portion: '2 Chronicles 24–25 | 1 Corinthians 7' },
  { date: '2026-07-16', day: 'Thursday', portion: '2 Chronicles 26–28 | 1 Corinthians 8' },
  { date: '2026-07-17', day: 'Friday', portion: '2 Chronicles 29–30 | 1 Corinthians 9' },
  { date: '2026-07-18', day: 'Saturday', portion: '2 Chronicles 31' },
  { date: '2026-07-19', day: 'Sunday', portion: '2 Chronicles 32–33' },
  { date: '2026-07-20', day: 'Monday', portion: '2 Chronicles 34–35 | 1 Corinthians 10' },
  { date: '2026-07-21', day: 'Tuesday', portion: '2 Chronicles 36; Ezra 1 | 1 Corinthians 11' },
  { date: '2026-07-22', day: 'Wednesday', portion: 'Ezra 2–4 | 1 Corinthians 12' },
  { date: '2026-07-23', day: 'Thursday', portion: 'Ezra 5–6 | 1 Corinthians 13' },
  { date: '2026-07-24', day: 'Friday', portion: 'Ezra 7–8 | 1 Corinthians 14' },
  { date: '2026-07-25', day: 'Saturday', portion: 'Ezra 9–10' },
  { date: '2026-07-26', day: 'Sunday', portion: 'Nehemiah 1–3' },
  { date: '2026-07-27', day: 'Monday', portion: 'Nehemiah 4–5 | 1 Corinthians 15' },
  { date: '2026-07-28', day: 'Tuesday', portion: 'Nehemiah 6–7 | 1 Corinthians 16' },
  { date: '2026-07-29', day: 'Wednesday', portion: 'Nehemiah 8–9 | 2 Corinthians 1' },
  { date: '2026-07-30', day: 'Thursday', portion: 'Nehemiah 10–11 | 2 Corinthians 2' },
  { date: '2026-07-31', day: 'Friday', portion: 'Nehemiah 12–13 | 2 Corinthians 3' },
  // ===== AUGUST 2026 =====
  { date: '2026-08-01', day: 'Saturday', portion: 'Esther 1–2' },
  { date: '2026-08-02', day: 'Sunday', portion: 'Esther 3–5' },
  { date: '2026-08-03', day: 'Monday', portion: 'Esther 6–8 | 2 Corinthians 4' },
  { date: '2026-08-04', day: 'Tuesday', portion: 'Esther 9–10; Job 1 | 2 Corinthians 5' },
  { date: '2026-08-05', day: 'Wednesday', portion: 'Job 2–5 | 2 Corinthians 6' },
  { date: '2026-08-06', day: 'Thursday', portion: 'Job 6–9 | 2 Corinthians 7' },
  { date: '2026-08-07', day: 'Friday', portion: 'Job 10–13 | 2 Corinthians 8' },
  { date: '2026-08-08', day: 'Saturday', portion: 'Job 14–18' },
  { date: '2026-08-09', day: 'Sunday', portion: 'Job 19–21' },
  { date: '2026-08-10', day: 'Monday', portion: 'Job 22–26 | 2 Corinthians 9' },
  { date: '2026-08-11', day: 'Tuesday', portion: 'Job 27–30 | 2 Corinthians 10' },
  { date: '2026-08-12', day: 'Wednesday', portion: 'Job 31–33 | 2 Corinthians 11' },
  { date: '2026-08-13', day: 'Thursday', portion: 'Job 34–37 | 2 Corinthians 12' },
  { date: '2026-08-14', day: 'Friday', portion: 'Job 38–40 | 2 Corinthians 13' },
  { date: '2026-08-15', day: 'Saturday', portion: 'Job 41–42; Psalms 1–5' },
  { date: '2026-08-16', day: 'Sunday', portion: 'Psalms 6–12' },
  { date: '2026-08-17', day: 'Monday', portion: 'Psalms 13–18 | Galatians 1' },
  { date: '2026-08-18', day: 'Tuesday', portion: 'Psalms 19–24 | Galatians 2' },
  { date: '2026-08-19', day: 'Wednesday', portion: 'Psalms 25–30 | Galatians 3' },
  { date: '2026-08-20', day: 'Thursday', portion: 'Psalms 31–35 | Galatians 4' },
  { date: '2026-08-21', day: 'Friday', portion: 'Psalms 36–39 | Galatians 5' },
  { date: '2026-08-22', day: 'Saturday', portion: 'Psalms 40–44' },
  { date: '2026-08-23', day: 'Sunday', portion: 'Psalms 45–50' },
  { date: '2026-08-24', day: 'Monday', portion: 'Psalms 51–57 | Galatians 6' },
  { date: '2026-08-25', day: 'Tuesday', portion: 'Psalms 58–65 | Ephesians 1' },
  { date: '2026-08-26', day: 'Wednesday', portion: 'Psalms 66–69 | Ephesians 2' },
  { date: '2026-08-27', day: 'Thursday', portion: 'Psalms 70–73 | Ephesians 3' },
  { date: '2026-08-28', day: 'Friday', portion: 'Psalms 74–78 | Ephesians 4' },
  { date: '2026-08-29', day: 'Saturday', portion: 'Psalms 79–82' },
  { date: '2026-08-30', day: 'Sunday', portion: 'Psalms 83–88' },
  { date: '2026-08-31', day: 'Monday', portion: 'Psalms 89–94 | Ephesians 5' },
  // ===== SEPTEMBER 2026 =====
  { date: '2026-09-01', day: 'Tuesday', portion: 'Psalms 95–102 | Ephesians 6' },
  { date: '2026-09-02', day: 'Wednesday', portion: 'Psalms 103–105 | Philippians 1' },
  { date: '2026-09-03', day: 'Thursday', portion: 'Psalms 106–108 | Philippians 2' },
  { date: '2026-09-04', day: 'Friday', portion: 'Psalms 109–116 | Philippians 3' },
  { date: '2026-09-05', day: 'Saturday', portion: 'Psalms 117–118' },
  { date: '2026-09-06', day: 'Sunday', portion: 'Psalms 119–123' },
  { date: '2026-09-07', day: 'Monday', portion: 'Psalms 124–135 | Philippians 4' },
  { date: '2026-09-08', day: 'Tuesday', portion: 'Psalms 136–142 | Colossians 1' },
  { date: '2026-09-09', day: 'Wednesday', portion: 'Psalms 143–150 | Colossians 2' },
  { date: '2026-09-10', day: 'Thursday', portion: 'Proverbs 1–4 | Colossians 3' },
  { date: '2026-09-11', day: 'Friday', portion: 'Proverbs 5–7 | Colossians 4' },
  { date: '2026-09-12', day: 'Saturday', portion: 'Proverbs 8–11' },
  { date: '2026-09-13', day: 'Sunday', portion: 'Proverbs 12–14' },
  { date: '2026-09-14', day: 'Monday', portion: 'Proverbs 15–18 | 1 Thessalonians 1' },
  { date: '2026-09-15', day: 'Tuesday', portion: 'Proverbs 19–21 | 1 Thessalonians 2' },
  { date: '2026-09-16', day: 'Wednesday', portion: 'Proverbs 22–25 | 1 Thessalonians 3' },
  { date: '2026-09-17', day: 'Thursday', portion: 'Proverbs 26–28 | 1 Thessalonians 4' },
  { date: '2026-09-18', day: 'Friday', portion: 'Proverbs 29–31 | 1 Thessalonians 5' },
  { date: '2026-09-19', day: 'Saturday', portion: 'Ecclesiastes 1–3' },
  { date: '2026-09-20', day: 'Sunday', portion: 'Ecclesiastes 4–7' },
  { date: '2026-09-21', day: 'Monday', portion: 'Ecclesiastes 8–11 | 2 Thessalonians 1' },
  { date: '2026-09-22', day: 'Tuesday', portion: 'Ecclesiastes 12; Song of Songs 1–4 | 2 Thessalonians 2' },
  { date: '2026-09-23', day: 'Wednesday', portion: 'Song of Songs 5–8 | 2 Thessalonians 3' },
  { date: '2026-09-24', day: 'Thursday', portion: 'Isaiah 1–3 | 1 Timothy 1' },
  { date: '2026-09-25', day: 'Friday', portion: 'Isaiah 4–7 | 1 Timothy 2' },
  { date: '2026-09-26', day: 'Saturday', portion: 'Isaiah 8–9' },
  { date: '2026-09-27', day: 'Sunday', portion: 'Isaiah 10–13' },
  { date: '2026-09-28', day: 'Monday', portion: 'Isaiah 14–16 | 1 Timothy 3' },
  { date: '2026-09-29', day: 'Tuesday', portion: 'Isaiah 17–20 | 1 Timothy 4' },
  { date: '2026-09-30', day: 'Wednesday', portion: 'Isaiah 21–23 | 1 Timothy 5' },
  // ===== OCTOBER 2026 =====
  { date: '2026-10-01', day: 'Thursday', portion: 'Isaiah 24–27 | 1 Timothy 6' },
  { date: '2026-10-02', day: 'Friday', portion: 'Isaiah 28–29 | 2 Timothy 1' },
  { date: '2026-10-03', day: 'Saturday', portion: 'Isaiah 30–32' },
  { date: '2026-10-04', day: 'Sunday', portion: 'Isaiah 33–36' },
  { date: '2026-10-05', day: 'Monday', portion: 'Isaiah 37 | 2 Timothy 2' },
  { date: '2026-10-06', day: 'Tuesday', portion: 'Isaiah 38–40 | 2 Timothy 3' },
  { date: '2026-10-07', day: 'Wednesday', portion: 'Isaiah 41–43 | 2 Timothy 4' },
  { date: '2026-10-08', day: 'Thursday', portion: 'Isaiah 44–45 | Titus 1' },
  { date: '2026-10-09', day: 'Friday', portion: 'Isaiah 46–48 | Titus 2' },
  { date: '2026-10-10', day: 'Saturday', portion: 'Isaiah 49–51' },
  { date: '2026-10-11', day: 'Sunday', portion: 'Isaiah 52–54' },
  { date: '2026-10-12', day: 'Monday', portion: 'Isaiah 55–58 | Titus 3' },
  { date: '2026-10-13', day: 'Tuesday', portion: 'Isaiah 59–61 | Philemon 1' },
  { date: '2026-10-14', day: 'Wednesday', portion: 'Isaiah 62–64 | Hebrews 1' },
  { date: '2026-10-15', day: 'Thursday', portion: 'Isaiah 65–66; Jeremiah 1 | Hebrews 2' },
  { date: '2026-10-16', day: 'Friday', portion: 'Jeremiah 2–3 | Hebrews 3' },
  { date: '2026-10-17', day: 'Saturday', portion: 'Jeremiah 4–5' },
  { date: '2026-10-18', day: 'Sunday', portion: 'Jeremiah 6–7' },
  { date: '2026-10-19', day: 'Monday', portion: 'Jeremiah 8–9 | Hebrews 4' },
  { date: '2026-10-20', day: 'Tuesday', portion: 'Jeremiah 10–11 | Hebrews 5' },
  { date: '2026-10-21', day: 'Wednesday', portion: 'Jeremiah 12–13 | Hebrews 6' },
  { date: '2026-10-22', day: 'Thursday', portion: 'Jeremiah 14–16 | Hebrews 7' },
  { date: '2026-10-23', day: 'Friday', portion: 'Jeremiah 17–18 | Hebrews 8' },
  { date: '2026-10-24', day: 'Saturday', portion: 'Jeremiah 19–21' },
  { date: '2026-10-25', day: 'Sunday', portion: 'Jeremiah 22–23' },
  { date: '2026-10-26', day: 'Monday', portion: 'Jeremiah 24–25 | Hebrews 9' },
  { date: '2026-10-27', day: 'Tuesday', portion: 'Jeremiah 26–27 | Hebrews 10' },
  { date: '2026-10-28', day: 'Wednesday', portion: 'Jeremiah 28–29 | Hebrews 11' },
  { date: '2026-10-29', day: 'Thursday', portion: 'Jeremiah 30–31 | Hebrews 12' },
  { date: '2026-10-30', day: 'Friday', portion: 'Jeremiah 32 | Hebrews 13' },
  { date: '2026-10-31', day: 'Saturday', portion: 'Jeremiah 33–34' },
  // ===== NOVEMBER 2026 =====
  { date: '2026-11-01', day: 'Sunday', portion: 'Jeremiah 35–36' },
  { date: '2026-11-02', day: 'Monday', portion: 'Jeremiah 37–38 | James 1' },
  { date: '2026-11-03', day: 'Tuesday', portion: 'Jeremiah 39–41 | James 2' },
  { date: '2026-11-04', day: 'Wednesday', portion: 'Jeremiah 42–43 | James 3' },
  { date: '2026-11-05', day: 'Thursday', portion: 'Jeremiah 44–46 | James 4' },
  { date: '2026-11-06', day: 'Friday', portion: 'Jeremiah 47–48 | James 5' },
  { date: '2026-11-07', day: 'Saturday', portion: 'Jeremiah 49' },
  { date: '2026-11-08', day: 'Sunday', portion: 'Jeremiah 50' },
  { date: '2026-11-09', day: 'Monday', portion: 'Jeremiah 51 | 1 Peter 1' },
  { date: '2026-11-10', day: 'Tuesday', portion: 'Jeremiah 52; Lamentations 1 | 1 Peter 2' },
  { date: '2026-11-11', day: 'Wednesday', portion: 'Lamentations 2–3 | 1 Peter 3' },
  { date: '2026-11-12', day: 'Thursday', portion: 'Lamentations 4–5; Ezekiel 1 | 1 Peter 4' },
  { date: '2026-11-13', day: 'Friday', portion: 'Ezekiel 2–4 | 1 Peter 5' },
  { date: '2026-11-14', day: 'Saturday', portion: 'Ezekiel 5–7' },
  { date: '2026-11-15', day: 'Sunday', portion: 'Ezekiel 8–10' },
  { date: '2026-11-16', day: 'Monday', portion: 'Ezekiel 11–12 | 2 Peter 1' },
  { date: '2026-11-17', day: 'Tuesday', portion: 'Ezekiel 13–15 | 2 Peter 2' },
  { date: '2026-11-18', day: 'Wednesday', portion: 'Ezekiel 16 | 2 Peter 3' },
  { date: '2026-11-19', day: 'Thursday', portion: 'Ezekiel 17–18 | 1 John 1' },
  { date: '2026-11-20', day: 'Friday', portion: 'Ezekiel 19–20 | 1 John 2' },
  { date: '2026-11-21', day: 'Saturday', portion: 'Ezekiel 21' },
  { date: '2026-11-22', day: 'Sunday', portion: 'Ezekiel 22–23' },
  { date: '2026-11-23', day: 'Monday', portion: 'Ezekiel 24–25 | 1 John 3' },
  { date: '2026-11-24', day: 'Tuesday', portion: 'Ezekiel 26–27 | 1 John 4' },
  { date: '2026-11-25', day: 'Wednesday', portion: 'Ezekiel 28–29 | 1 John 5' },
  { date: '2026-11-26', day: 'Thursday', portion: 'Ezekiel 30–31 | 2 John 1' },
  { date: '2026-11-27', day: 'Friday', portion: 'Ezekiel 32–33 | 3 John 1' },
  { date: '2026-11-28', day: 'Saturday', portion: 'Ezekiel 34–35' },
  { date: '2026-11-29', day: 'Sunday', portion: 'Ezekiel 36–37' },
  { date: '2026-11-30', day: 'Monday', portion: 'Ezekiel 38–39 | Jude 1' },
  // ===== DECEMBER 2026 =====
  { date: '2026-12-01', day: 'Tuesday', portion: 'Ezekiel 40 | Revelation 1' },
  { date: '2026-12-02', day: 'Wednesday', portion: 'Ezekiel 41–42 | Revelation 2' },
  { date: '2026-12-03', day: 'Thursday', portion: 'Ezekiel 43–44 | Revelation 3' },
  { date: '2026-12-04', day: 'Friday', portion: 'Ezekiel 45–46 | Revelation 4' },
  { date: '2026-12-05', day: 'Saturday', portion: 'Ezekiel 47–48' },
  { date: '2026-12-06', day: 'Sunday', portion: 'Daniel 1' },
  { date: '2026-12-07', day: 'Monday', portion: 'Daniel 2–3 | Revelation 5' },
  { date: '2026-12-08', day: 'Tuesday', portion: 'Daniel 4 | Revelation 6' },
  { date: '2026-12-09', day: 'Wednesday', portion: 'Daniel 5–6 | Revelation 7' },
  { date: '2026-12-10', day: 'Thursday', portion: 'Daniel 7–8 | Revelation 8' },
  { date: '2026-12-11', day: 'Friday', portion: 'Daniel 9–10 | Revelation 9' },
  { date: '2026-12-12', day: 'Saturday', portion: 'Daniel 11' },
  { date: '2026-12-13', day: 'Sunday', portion: 'Daniel 12; Hosea 1–3' },
  { date: '2026-12-14', day: 'Monday', portion: 'Hosea 4–8 | Revelation 10' },
  { date: '2026-12-15', day: 'Tuesday', portion: 'Hosea 9–12 | Revelation 11' },
  { date: '2026-12-16', day: 'Wednesday', portion: 'Hosea 13–14; Joel 1–2 | Revelation 12' },
  { date: '2026-12-17', day: 'Thursday', portion: 'Joel 3; Amos 1–2 | Revelation 13' },
  { date: '2026-12-18', day: 'Friday', portion: 'Amos 3–5 | Revelation 14' },
  { date: '2026-12-19', day: 'Saturday', portion: 'Amos 6–9' },
  { date: '2026-12-20', day: 'Sunday', portion: 'Obadiah; Jonah 1–3' },
  { date: '2026-12-21', day: 'Monday', portion: 'Jonah 4; Micah 1–3 | Revelation 15' },
  { date: '2026-12-22', day: 'Tuesday', portion: 'Micah 4–7 | Revelation 16' },
  { date: '2026-12-23', day: 'Wednesday', portion: 'Nahum 1–3; Habakkuk 1 | Revelation 17' },
  { date: '2026-12-24', day: 'Thursday', portion: 'Habakkuk 2–3; Zephaniah 1 | Revelation 18' },
  { date: '2026-12-25', day: 'Friday', portion: 'Zephaniah 2–3; Haggai 1 | Revelation 19' },
  { date: '2026-12-26', day: 'Saturday', portion: 'Haggai 2; Zechariah 1–3' },
  { date: '2026-12-27', day: 'Sunday', portion: 'Zechariah 4–7' },
  { date: '2026-12-28', day: 'Monday', portion: 'Zechariah 8–11 | Revelation 20' },
  { date: '2026-12-29', day: 'Tuesday', portion: 'Zechariah 12–14 | Revelation 21' },
  { date: '2026-12-30', day: 'Wednesday', portion: 'Malachi 1–4 | Revelation 22' }
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
function formatPortionDisplay(portion) {
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
