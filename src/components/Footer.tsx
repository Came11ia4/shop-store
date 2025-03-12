import Link from 'next/link'
import { Separator } from './ui/separator'
import { Title, NavList } from '@/lib/constants'
import { Fragment } from 'react'
export const Footer = async () => {
  return (
    <div className="border-t mt-6">
      <div className="wrapper py-32 flex justify-between">
        <h2 className="text-2xl">
          <Link href="/">{Title}</Link>
        </h2>
        <div className="flex gap-10">
          {NavList.map((n, i) => {
            return (
              <Fragment key={i}>
                {i !== 0 && <Separator orientation="vertical" />}
                <div>
                  <span>{n.title}</span>
                  <ul className="m-4 space-y-3">
                    {n.list.map((c, m) => (
                      <li key={m}>{c}</li>
                    ))}
                  </ul>
                </div>
              </Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}
