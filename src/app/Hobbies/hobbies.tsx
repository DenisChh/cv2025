import styles from './hobbies.module.css'
import globalStyles from '../page.module.css'
import chess from '../../public/pawn.png'
import Image from 'next/image'

const Hobbies = () => {
    return (
        <div className={styles.main}>
            <div className={globalStyles.textWithIcon}>
                <Image
                    src={chess}
                    alt='chessIcon'
                    width={30}
                    height={30}
                />
                <div> Intérêts </div>
            </div>
            <div>
                Jeux, Animation, Ski, Randonnée, VolleyBall
            </div>
        </div>
    )
}

export default Hobbies;