import Link from 'next/link'
import NextNprogress from 'nextjs-progressbar'

import { Container } from '../styled/components/Container'
import { S_Link, Header, List } from '../styled/components/MainLayout'

export interface Props {
  children: React.ReactNode
}

export default function MainLayout({ children }: Props): JSX.Element {
  return (
    <>
      <Header>
        <NextNprogress color="#dadfe2" startPosition={0.3} stopDelayMs={200} height={2} />
        <Container>
          <nav>
            <List>
              <Link href="/">
                <S_Link>Latest Posts</S_Link>
              </Link>
              <Link href="/posts/new">
                {/* <a>add post</a> */}
                <S_Link>Add Post</S_Link>
              </Link>
            </List>
          </nav>
        </Container>
      </Header>
      <Container>
        <main>{children}</main>
      </Container>
    </>
  )
}
