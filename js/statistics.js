// Подключаем нужные функции Firebase напрямую из браузера
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js";

// Ваша конфигурация, которую вы присылали
const firebaseConfig = {
  apiKey: "AIzaSyDxbVNAoiRg_2Y_RxhhkVUyCmlQAHP0hgI",
  authDomain: "hrmanagement-8aee3.firebaseapp.com",
  projectId: "hrmanagement-8aee3",
  storageBucket: "hrmanagement-8aee3.firebasestorage.app",
  messagingSenderId: "729499219020",
  appId: "1:729499219020:web:0209961fd09438f4b1f0e9",
  measurementId: "G-JVJ3R2LYMR"
};

// Запускаем Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Простая функция для записи статистики
async function logVisit() {
    try {
        await addDoc(collection(db, "statistics"), {
            event_type: "page_view",
            url: window.location.href,
            timestamp: serverTimestamp(), // Время на сервере
            user_agent: navigator.userAgent
        });
        console.log("Статистика посещения успешно записана!");
    } catch (e) {
        console.error("Ошибка записи статистики:", e);
    }
}

// Запускаем функцию при загрузке страницы
logVisit();
