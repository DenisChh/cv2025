import styles from './xp.module.css'
import global from '../page.module.css'

const Xp = () => {
    return (
        <div className={styles.main}>
            <h3> Expérience professionnelle </h3>
            <div className={global.title}> Développeur fullstack - 100%Kosher (Alfortville) - Juin 2023 - Janv. 2024</div>
            <ul>
                <li>
                    Conception et développement complet d'une app alimentaire (React Native, NestJS, PostgreSQL)
                </li>
                <li>
                    Intégration Firebase, OAuth2, JWT, Stripe, React Geolocation
                </li>
                <li>
                    Backoffice React, hébergement sur Microsoft Azure
                </li>
                <li>
                    Publication sur Google Playstore
                </li>
            </ul>
        </div>
    )
}

export default Xp;