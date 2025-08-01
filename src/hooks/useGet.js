import { useEffect, useState } from "react"

export const useGet = (api) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            try {
                const res = await fetch(api)
                if (!res.ok) {
                    throw new Error("Error occured")
                }
                const resdata = await res.json()
                setLoading(false)
                setData(resdata)
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
        getData()
    }, [])

    return [ data, loading, error ]
}