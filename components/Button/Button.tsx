import { HtmlProps } from 'next/dist/shared/lib/html-context'
import { type } from 'os'
import React, { HTMLAttributes, HtmlHTMLAttributes } from 'react'
type Props = {link: string, className: string, children: React.ReactNode}

export default function Button(props: Props) {
  return (
    <a href= {props.link} className={props.className}>
            {props.children} 
    </a>
  )
}
