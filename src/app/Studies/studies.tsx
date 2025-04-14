import styles from './studies.module.css'
import globalStyles from '../page.module.css'
import chess from '../../public/pawn.png'
import Image from 'next/image'

const Studies = () => {
    return (
        <div className={styles.main}>
            <div className={globalStyles.textWithIcon}>
                <Image
                    src={chess}
                    alt='chessIcon'
                    width={30}
                    height={30}
                />
                <div> Formation </div>
            </div>
            <div className={styles.row}>
                <div className={styles.bold}>
                    Ecole 42
                </div>
                <div>
                    -
                </div>
                <div>
                    Paris
                </div>
                <div>
                    -
                </div>
                <div>
                    2020 à 2023
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.bold}>
                    Licence Informatique
                </div>
                <div>
                    -
                </div>
                <div>
                    UVSQ
                </div>
                <div>
                    -
                </div>
                <div>
                    2020
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.bold}>
                    Etudes de de médecine & psychologie
                </div>
                <div>
                    -
                </div>
                <div>
                    Paris Descartes
                </div>
                <div>
                    -
                </div>
                <div>
                    2010 à 2014
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.bold}>
                    Bac S spé Maths
                </div>
                <div>
                    -
                </div>
                <div>
                    Mention Européenne Anglais                </div>
                <div>
                    -
                </div>
                <div>
                    2010
                </div>
            </div>
        </div>
    )
}

export default Studies;