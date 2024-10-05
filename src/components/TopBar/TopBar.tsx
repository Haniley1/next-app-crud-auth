import { Container } from 'components'
import Link from 'next/link'
import styles from './styles.module.scss'
import { CompanyLogo } from 'components/CompanyLogo'
import { Links } from './components'

export const TopBar = () => {
  return (
    <header className={styles.topBar}>
      <Container>
        <div className={styles.innerContainer}>
          <CompanyLogo />
          <Links />
        </div>
      </Container>
    </header>
  )
}
