import { useEffect, useState } from "react";
import { getGif } from "../helpers/getGif";


export const useFetchGif = (category) => {
  
    const [gifData, setGifData] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const getDataCategory = async () => {
     const resp = await getGif(category);
     if (resp) setGifData(resp);
     setIsLoading(false);
   };

   useEffect(() => {
     getDataCategory();
   }, []);

    return{
        gifData,
        isLoading
    }
}
