import { getFirestore, collection, getDocs, setDoc,
     doc, getDoc } from 'firebase/firestore';
import { app } from './config'

export const db = getFirestore(app);

export const collectionDocuments = (collectionName) => {
    return new Promise(async (resolve, reject) => {
        const collectionRef = collection(db, collectionName);
        try {
            const response = await getDocs(collectionRef)
            // resolve(response.docs.map((doc) => doc.data()))
            resolve(response.docs.map((doc) => doc.data()));

        } catch (error) {
            reject({ message: error.message })
        }
    })
}
export const readDoc = async () => {
    const docRef = doc(db, "tasks", "anand");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // doc.data() will be undefined in this cas
        console.log("No such document!");
    }
}
export const readAllDoc = async () => {

    const data = await getDocs(collection(db, "delivery"));
    data.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, doc.data());
    });
}
