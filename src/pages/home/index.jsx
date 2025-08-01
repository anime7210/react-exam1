import { useGet } from "../../hooks/useGet"
import { useNavigate } from "react-router"
import './home.css'

export const Home = () => {
    const navigate = useNavigate()
    const [ data, loading, error ] = useGet("https://api.escuelajs.co/api/v1/products")
    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error: {error.massage}</h1>
    
    return (
        <div className="cards">
            {
            data?.map((prod) => {
                return (
                    <div key={prod.id} className="product-card" onClick={()=>navigate(`/product/${prod.id}`)}>
                            <p className="p1">{prod.title}</p>
                            <p>{prod.price}$</p>
                            <p>{prod.category.name}</p>
                            <img src={prod.images} className="img"/>
                        </div>
                )
                })
            }
        </div>
    )


}
