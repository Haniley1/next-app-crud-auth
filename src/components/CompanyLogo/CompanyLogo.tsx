import { Icon } from 'components/Icon'
import styles from './styles.module.scss'
import Link from 'next/link'

export const CompanyLogo = () => {
  return (
    <Link className='no-anchor-style' href="/">
      <div className={styles.logoWrapper}>
        <Icon section="general" name="logo-colored" iconStyles={styles.logo} />
        <span className={styles.companyName}>Digital Sector</span>
      </div>
    </Link>
  )
}
