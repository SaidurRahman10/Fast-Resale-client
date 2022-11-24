import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Fast Reseal`
    },[title])
};


export default useTitle;