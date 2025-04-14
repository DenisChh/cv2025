import styles from './projects.module.css'
import global from '../page.module.css'

const Pong = () => {
    return (
        <div className={styles.main}>
            <div className={global.title}> Pong en ligne </div>
            <ul>
                <li>
                    React + Canvas, NestJS API, WebSockets
                </li>
                <li>
                    Authentification OAuth2 / JWT / 2FA
                </li>
                <li>
                    Jeu, chat, lobby, matchmaking, user profile
                </li>
            </ul>
        </div>
    )
}

export default Pong;