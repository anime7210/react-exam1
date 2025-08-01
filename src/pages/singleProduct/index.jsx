import { useNavigate, useParams } from 'react-router'
import { useGet } from '../../hooks/useGet'
import './singleProduct.css'

const SingleProduct = () => {
    const { id } = useParams()
    const [data, loading, error] = useGet(`https://api.escuelajs.co/api/v1/products/${id}`)
    const navigate = useNavigate()

    if (loading) return <h1>Loading...</h1>
    if (error) return <h1>Error: {error.massage}</h1>
    console.log(data, id);

    return (
        <div className='single-product-card'>
            <button onClick={() => navigate('/')}>
                Back
            </button>
            <div className='single-product'>
                <div className='product-info'>
                    <h1>{data?.title}</h1>
                    <p>Price: ${data?.price}</p>
                    <p>Description: {data?.description}</p>
                    <p>Category: {data?.category?.name}</p>
                <img src={data?.images} alt={data?.title} />
                </div>
            </div>
        </div>
    )
}

export default SingleProduct