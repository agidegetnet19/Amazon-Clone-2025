import { useState, useEffect } from 'react'
import classes from './Results.module.css'
import LayOut from '../../Components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ProductCard from '../../Components/Product/ProductCard'
import { productUrl } from '../../Api/endPoints'
import Loader from '../../Components/Loader/Loader'

function Results() {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const { categoryName } = useParams();
    useEffect(() => {
        setIsLoading(true)
        axios.get(`${productUrl}/products/category/${categoryName}`)
            .then((res) => {
                setResults(res.data);
            }).catch((err) => {
                console.log(err);
            })
            .finally(() => { setIsLoading(false) })
    }, [categoryName]);

    return (
        <LayOut>
            {isLoading ? (<Loader />) : (<section>
                <h1 style={{ padding: "30px" }}>Results</h1>
                <p style={{ padding: "30px" }}>category/{categoryName}</p>
                <hr />
                <div className={classes.products_container}>
                    {results.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product} />
                    ))}
                </div>
            </section>)}

        </LayOut>
    )
}

export default Results