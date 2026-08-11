/* ============================================================
   CONFIGURACIÓN DE FIREBASE — BLÜM GROUP
   ============================================================
   1. Ve a https://console.firebase.google.com
   2. Crea un proyecto nuevo (gratis, plan "Spark")
   3. En el proyecto: "Compilación" > "Firestore Database" > "Crear base de datos"
      - Elige modo "producción" y la región más cercana (ej. us-central)
   4. En el proyecto: "Compilación" > "Authentication" > "Comenzar"
      - Habilita el proveedor "Correo electrónico/contraseña"
      - Ve a la pestaña "Users" y agrega manualmente tu usuario admin
        (el correo y contraseña que usarás para entrar a /admin.html)
   5. En "Configuración del proyecto" (ícono de engranaje) > "General"
      > baja hasta "Tus apps" > agrega una app web (ícono </>)
   6. Copia el objeto firebaseConfig que te muestra y pégalo abajo,
      reemplazando el objeto de ejemplo.
   7. En Firestore Database > pestaña "Reglas", pega las reglas que
      te compartí en el chat (lectura pública, escritura solo con login).

   Este archivo es público (así funciona Firebase en el navegador),
   no contiene secretos: la seguridad real la dan las Reglas de Firestore
   y el login de Authentication.
   ============================================================ */

const firebaseConfig = {
  apiKey: "AIzaSyDA7WJXB4otmUTsCYtX0ZmhnhxIsnUGj9c",
  authDomain: "weblumgroup.firebaseapp.com",
  projectId: "weblumgroup",
  storageBucket: "weblumgroup.firebasestorage.app",
  messagingSenderId: "680635535558",
  appId: "1:680635535558:web:c8bc10b5fbbb3ed3cc47c7",
  measurementId: "G-1N2SZGQL37"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
