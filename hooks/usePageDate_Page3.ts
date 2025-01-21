// usePageData.ts
import { useEffect, useState } from "react";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { app } from "../firebase/firebase";

export interface PageData {
    content: string;
}

const db = getFirestore(app);

const usePageData_Page3  = (collectionName: string) => {
    const [pageData, setPageData] = useState<PageData | null>(null);

    useEffect(() => {
        const unsubscribe = onSnapshot(
            collection(db, collectionName),
            (querySnapshot) => {
                if (querySnapshot.empty) {
                    console.log(`No documents found in '${collectionName}' collection.`);
                    return;
                }

                querySnapshot.forEach((doc) => {
                    const data = doc.data();
                    setPageData({
                        content: data.content,
                       
                    });
                });
            },
            (error) => {
                console.log("Error fetching document:", error);
            }
        );

        return () => unsubscribe();
    }, [collectionName]);

    return pageData;
};

export default usePageData_Page3;
