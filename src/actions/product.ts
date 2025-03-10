'use server'

import db from '@/lib/db'
import { IProduct, IProductRes } from '@/type/global'
export const productAction = async (): Promise<IProductRes> => {
  try {
    const result = (await db('SELECT * FROM products')) as IProduct[]
    return {
      status: 200,
      message: 'success',
      data: result,
    }
  } catch (error) {
    return {
      status: 500,
      message: 'get database error',
      data: null,
    }
  }
}
