import styles from './xp.module.css'
import globalStyles from '../page.module.css'
import Image from 'next/image'
import chess from '../../public/queen.png'

const Xp = () => {
    return (
        <div className={styles.main}>
            <div className={globalStyles.textWithIcon}>
                <Image
                    src={chess}
                    alt='chessIcon'
                    width={30}
                    height={30}
                />
                <div> Expérience professionnelle </div>
            </div>
            <div className={globalStyles.title}> Développeur fullstack - 100%Kosher (Alfortville) - Juin 2023 - Janv. 2024</div>
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