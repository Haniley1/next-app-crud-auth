import { CompanyLogo } from 'components/CompanyLogo'
import { Container } from 'components/Container'
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
