import { Product } from "../types/app"

type Props = {
    productsData: Product[]
}

const Products = (props: Props) => {
  return (
    <div>
        {props.productsData.map((product) => (
            <div key={product.id}>
                <h2>{product.name}</h2>
                <p>{product.desc}</p>
                <strong>{product.price}</strong>
            </div>
        ))}
    </div>
  )
}

export default Products