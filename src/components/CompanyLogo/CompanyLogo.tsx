import Link from 'next/link'
import { Icon } from 'components/Icon'
import styles from './styles.module.scss'

export const CompanyLogo = () => {
  return (
    <Link href="/">
      <div className={styles.logoWrapper}>
        <Icon section="general" name="logo-colored" iconStyles={styles.logo} />
        <span className={styles.companyName}>Digital Sector</span>
      </div>
    </Link>
  )
}
