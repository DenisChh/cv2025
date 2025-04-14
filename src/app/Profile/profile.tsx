import Image from 'next/image';
import styles from './profile.module.css'
import globalStyles from '../page.module.css'
import chess from '../../public/king.png'

const Profile = () => {
    return (
        <div className={styles.main}>
            <div className={globalStyles.textWithIcon}>
                <Image
                    src={chess}
                    alt='chessIcon'
                    width={30}
                    height={30}
                />
                <div> Profil </div>
            </div>
            <div>
                Suite à ma formation à l'école 42 à Paris, j'ai été en charge de la conception intégrale
                d'une application mobile en tant que développeur indépendant pendant 8 mois.
                Rigoureux, autonome et à l'écoute, je suis à présent à la recherche de nouvelles opportunités.
            </div>
        </div>
    )
}

export default Profile;