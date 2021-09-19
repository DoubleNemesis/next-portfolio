import styles from '../styles/Footer.module.css'
export default function Footer(){
    return(
        <footer className={styles.footer}>
        <a
          href="https://www.thomaspchant.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created with NextJS by ThomasPChant  &copy;2021
          </a>
         
      </footer>
    )
}