/* global importScripts, firebase */
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyAmIHvAe-EOYY-TUPkcb_Byi74j7qqG9dY",
  projectId: "pushnotifications-8d42a",
  messagingSenderId: "677674369528",
  appId: "1:677674369528:web:b6587b25498789fce1160d",
});

firebase.messaging();
