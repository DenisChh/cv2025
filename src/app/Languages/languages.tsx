import styles from './languages.module.css'
import globalStyles from '../page.module.css'
import chess from '../../public/pawn.png'
import Image from 'next/image'

const Languages = () => {
    return (
        <div className={styles.main}>
            <div className={globalStyles.textWithIcon}>
                <Image
                    src={chess}
                    alt='chessIcon'
                    width={30}
                    height={30}
                />
                <div> Langues </div>
            </div>
            <div>
                Français, Anglais (B2)
            </div>
        </div>
    )
}

export default Languages;