import styles from "./contact.module.css"
import globalStyles from '../page.module.css'
import chess from '../../public/pawn.png'
import Image from "next/image"

const Contact = () => {
    return (
        <div className={styles.main}>
            <div className={globalStyles.textWithIcon}>
                <Image
                    src={chess}
                    alt='chessIcon'
                    width={30}
                    height={30}
                />
                <div> Contact </div>
            </div>
            <div> 6 bis rue de la Fraternité </div>
            <div> 91200 Athis-Mons </div>
            <div> denis.chheang1@gmail.com </div>
            <div> 07 49 57 51 64 </div>
        </div>
    )
}

export default Contact;