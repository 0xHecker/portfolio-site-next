import Giscus from '@giscus/react'
import { useTheme } from 'next-themes'

export function Comments() {
  const themes = useTheme()
  const repoId = process.env.NEXT_PUBLIC_repoId as string
  const categoryId = process.env.NEXT_PUBLIC_categoryId as string

  return (
    <Giscus
      id="comments"
      repo="0xHecker/portfolio-site-next"
      repoId={repoId}
      category="General"
      categoryId={categoryId}
      mapping="url"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={themes.resolvedTheme}
      lang="en"
      loading="lazy"
    />
  )
}
