'use client'
import { IProduct } from '@/type/global'
import { ProductTitle } from '@/lib/constants'
import Image from 'next/image'
import { useSort } from '@/store'
interface IProps {
  data: IProduct[];
}

export const Product = ({ data }: IProps) => {
  const products = [...data];
  const { value } = useSort();

  if(value !== 'latest') {
    value === 'low' ? products.sort((a, b) => a.price - b.price) : products.sort((a, b) => b.price - a.price);
  }

  return (
    <div className="flex-1">
      <h2 className="mb-8 text-4xl">{ ProductTitle }</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((pro) => (
          <div key={pro.id} className="bg-slate-50 p-4 rounded-lg shadow-md hover:bg-slate-200 transition duration-300 ease-in-out cursor-pointer">
            <Image src={pro.image} alt={pro.name} width={300} height={300} priority />
            <div className="flex item-center justify-between mt-4">
              <h3 className="flex-2xl text-slate-700">{pro.name}</h3>
              <p className="text-lg font-bold text-red-400">{pro.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
