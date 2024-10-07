import { Container, CompanyLogo } from 'components'
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
