// usePageData.ts
import { useEffect, useState } from "react";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { app } from "../firebase/firebase";

export interface PageData {
    content1: string;
    contentGrey: string;
    contentGreen: string;
    contentYellow: string;
    contentShowMore: string;
    footerGreen: string;
    footerGrey: string;
    footerYellow: string;
    imgProduct1: string;
    imgProduct2: string;
    imgWarning: string;
}

const db = getFirestore(app);

const usePageData_Page4 = (collectionName: string) => {
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
                        content1: data.content1,
                        contentShowMore: data.contentShowMore,
                        footerGreen: data.footerGreen,
                        footerGrey: data.footerGrey,
                        footerYellow: data.footerYellow,
                        imgProduct1: data.imgProduct1,
                        imgProduct2: data.imgProduct2,
                        imgWarning: data.imgWarning,
                        contentGrey: data.contentGrey,
                        contentGreen: data.contentGreen,
                        contentYellow: data.contentYellow,
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

export default usePageData_Page4;
