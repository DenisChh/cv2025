import styles from './skills.module.css'
import globalStyles from '../page.module.css'
import chess from '../../public/knight.png'
import Image from 'next/image'

const Skills = () => {
    return (
        <div className={styles.main}>
            <div className={globalStyles.textWithIcon}>
                <Image
                    src={chess}
                    alt='chessIcon'
                    width={30}
                    height={30}
                />
                <div> Compétences </div>
            </div>
            <div className={styles.skillContainer}>
                <div className={styles.skillTitle}> Languages </div>
                <ul>
                    <li>
                        Javascript, Typescript, HTML/CSS, C, C++, Java, PHP
                    </li>
                </ul>
                <div className={styles.skillTitle}> Frameworks </div>
                <ul>
                    <li>
                        React, React Native, NestJS, TypeORM, Qt, GTK
                    </li>
                </ul>
                <div className={styles.skillTitle}> BDD / Devops </div>
                <ul>
                    <li>
                        PostgreSQL, MySQL, Docker, Kubernetes, Azure, Render, NGINX, Firebase
                    </li>
                </ul>
                <div className={styles.skillTitle}> Outils </div>
                <ul>
                    <li>
                        Github, Trello, VSCode, Vim
                    </li>
                </ul>
                <div className={styles.skillTitle}> Autres </div>
                <ul>
                    <li>
                        OAuth2, JWT, 2FA, Stripe, React Geolocation
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Skills;