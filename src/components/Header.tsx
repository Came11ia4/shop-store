import Link from 'next/link'
import { Separator } from './ui/separator'
import { Title, MenuList } from '@/lib/constants'

export const Header = async () => {
  return (
    <div className="h-16 px-10 border-b bg-white">
      <div className="container flex items-center justify-between h-full">
        <h1 className="text-2xl">
          <Link href="/">{Title}</Link>
        </h1>
        <div className="flex justify-end space-x-4 text-sm h-1/3">
          {MenuList.map((menu, i) => (
            <>
              {i !== 0 && <Separator orientation="vertical" />}
              <Link key={i} href={menu.href}>{menu.title}</Link>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}
