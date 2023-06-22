import ProductComponent from '../components/ProductComp'
import ProductDatas from '../data/ProductData'
function Main() {
    const ProductRender = ProductDatas.map(data => {

        return(
    
          <ProductComponent
          key={data.id}
          {...data}
          />
    
        )
      })
  return (
    <main>
        {ProductRender}
    </main>
  )
}

export default Main