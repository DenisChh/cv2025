import global from '../page.module.css'

const Irc = () => {
    return (
        <>
            <div className={global.title}> Serveur IRC en C </div>
            <ul>
                <li>
                    Gestion utilisateurs, canaux, envoi de messages
                </li>
            </ul>
        </>
    )
}

export default Irc;