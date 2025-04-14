import styles from './profile.module.css'

const Profile = () => {
    return (
        <div className={styles.main}>
            <h3> Profil </h3>
            <div>
                Suite à ma formation à l'école 42 à Paris, j'ai été en charge de la conception intégrale
                d'une application mobile en tant que développeur indépendant pendant 8 mois.
                Rigoureux, autonome et à l'écoute, je suis à présent à la recherche de nouvelles opportunités.
            </div>
        </div>
    )
}

export default Profile;