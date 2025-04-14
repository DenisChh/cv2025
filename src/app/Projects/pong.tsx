import styles from './projects.module.css'
import global from '../page.module.css'

const Pong = () => {
    return (
        <div className={styles.main}>
            <div className={global.title}> Pong en ligne </div>
            <ul>
                <li>
                    Auth OAuth2 / JWT / 2FA, chat, matchmaking
                </li>
                <li>
                    React + Canvas, NestJS API, WebSockets
                </li>
            </ul>
        </div>
    )
}

export default Pong;