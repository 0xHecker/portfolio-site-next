import { Post } from 'contentlayer/generated'
import Link from 'next/link'
import slugify from 'slugify'
import styles from './tags.module.scss'

type BlogProps = {
  posts: Post[]
}
export const MainTags = ({ posts }: BlogProps) => {
  const uniqueTags: string[] = []

  const getUnique = () => {
    posts.map(post => {
      return post.tags.map((t: string) => {
        if (!uniqueTags.includes(t)) {
          uniqueTags.push(t)
        }
      })
    })
  }

  getUnique()

  return (
    <ul className={styles.tags}>
      {uniqueTags?.map((tag: string, idx: number) => {
        let clsName = 'tag'
        return (
          <li className={`${styles.postTags}  ${styles[clsName]}`} key={tag}>
            <Link href={`/blog/tag/${slugify(tag, { lower: true })}`}>{`${tag}`}</Link>
          </li>
        )
      })}
    </ul>
  )
}
