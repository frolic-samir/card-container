import  {useEffect, useState} from 'react'

export function useCallApi(url){
    const [products, setProducts] = useState(
        {
            loading:false,
            data:null,
            error:false}
    )

    useEffect(()=>{
        setProducts({loading:true,data:null,error:false})
        const xhr = new XMLHttpRequest()
        const method = 'GET'
        xhr.responseType = 'json'
        xhr.open(method,url)
        xhr.onload = function(){
            if(xhr.status === 200){
                setProducts({loading:false,data:xhr.response,error:false})                
            }else if(xhr.status === 404 || xhr.status === 500){
                setProducts({loading:false,data:null,error:true})
            }
        }      
        xhr.send()
    },[url])

    return products
}