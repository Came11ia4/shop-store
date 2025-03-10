import { productAction } from '@/actions/product'
import { Product } from '@/components/Product'
import { Sort } from '@/components/SortList'

export default async function Page() {
  const resp = await productAction()
  return (
    <div className="container flex py-6">
      <Sort />
      <Product data={resp.data ? resp.data : []} />
    </div>
  )
}
