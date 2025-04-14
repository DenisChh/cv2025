import styles from './skills.module.css'

const Skills = () => {
    return (
        <div className={styles.main}>
            <h3> Compétences </h3>
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