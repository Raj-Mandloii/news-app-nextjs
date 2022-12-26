import { Fragment } from "react"
import Link from "next/link"

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News page</h1>
      <ul>
        <li >
          <Link href="/news/1">
          This goes to new page
          </Link>
        </li>
      </ul>
    </Fragment>
  )
}

export default NewsPage