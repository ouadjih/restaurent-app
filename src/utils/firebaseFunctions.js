//saving new item

import { firestore } from "../firebase.config"
import {doc,setDoc,getDocs,query,collection,orderBy} from "firebase/firestore"
export const saveItem = async (data)=>{
    await setDoc(
        doc(firestore,'foodItems',`${Date.now()}`),
        data,
        {merge:true}
    )
}

export const getAllFoodItems = async ()=>{
    const items = await getDocs(
        query(
            collection(firestore,"foodItems"),
            orderBy("id","desc")
        )
    )
    return items.docs.map((docs)=>docs.data())
}

