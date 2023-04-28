import {getFirestore, addDoc, getDoc, collection, doc} from 'firebase/firestore'
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8psGE33nQz5DAQiM0zc65lv8gSIb9Sns",
  authDomain: "coderhouse-ecommerce-8ce36.firebaseapp.com",
  projectId: "coderhouse-ecommerce-8ce36",
  storageBucket: "coderhouse-ecommerce-8ce36.appspot.com",
  messagingSenderId: "285689479696",
  appId: "1:285689479696:web:77906f1d16ed5dcb928095"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const bd = getFirestore()
export const db = getFirestore(app);

const createOrdenCompra = async (cliente, preTotal, fecha, cart) => {

  const ordenCompra = await addDoc(collection(db, "Orders"), {
    name: cliente.name,
    email: cliente.email,
    address: cliente.address,
    phone: cliente.phone,
    fecha: fecha,
    precioTotal: preTotal,
    Productos: cart
  })

  return ordenCompra
}


const getOrdenCompra =  async (id) => {
  const ordenCompra = await getDoc(doc(db, "Orders", id))
  const item = {...ordenCompra.data(), id: ordenCompra.id}
  return item
}


export { createOrdenCompra,getOrdenCompra }
