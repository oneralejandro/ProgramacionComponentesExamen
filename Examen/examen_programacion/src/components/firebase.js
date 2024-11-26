// src/firebase-config.js
import { initializeApp } from 'firebase/app';  // Módulo para inicializar Firebase
import { getFirestore, collection, addDoc } from 'firebase/firestore';  // Módulos para Firestore
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';  // Módulos para Authentication
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';  // Módulos para Storage

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAZdeIPPR-RZNYlGWhcmi4EFnLa2Gjj3xk",
    authDomain: "examen-fcd36.firebaseapp.com",
    projectId: "examen-fcd36",
    storageBucket: "examen-fcd36.firebasestorage.app",
    messagingSenderId: "348151433636",
    appId: "1:348151433636:web:03d0f50bc3fa5dbc901931"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Obtén la referencia de Firestore
const auth = getAuth(app);  // Obtén la referencia de Auth
const storage = getStorage(app);  // Obtén la referencia de Storage

// Función para guardar los datos en Firestore
const saveStudentData = async (data) => {
  try {
    await addDoc(collection(db, 'alumno_iplacex'), data);  // Guarda los datos en la colección 'alumno_iplacex'
    console.log('Datos guardados exitosamente');
  } catch (error) {
    console.error('Error al guardar los datos:', error);
  }
};

// Función para registrar un usuario
const registerUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    console.log('Usuario registrado exitosamente');
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
  }
};

// Función para iniciar sesión
const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    console.log('Usuario ingresado exitosamente');
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
  }
};

// Función para cerrar sesión
const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log('Usuario cerrado sesión');
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
  }
};

// Función para subir un archivo a Firebase Storage
const uploadFile = async (file) => {
  const storageRef = ref(storage, `uploads/${file.name}`);  // Ruta donde se almacenará el archivo

  try {
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log('Archivo subido con éxito. URL:', downloadURL);
    return downloadURL;  // Retorna la URL del archivo subido
  } catch (error) {
    console.error('Error al subir el archivo:', error);
  }
};

export { saveStudentData, registerUser, loginUser, logoutUser, uploadFile };
