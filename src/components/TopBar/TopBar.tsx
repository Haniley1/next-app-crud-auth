import Link from 'next/link'
import { Container } from 'components'
import { CompanyLogo } from 'components/CompanyLogo'
import { Links } from './components'
import styles from './styles.module.scss'

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
