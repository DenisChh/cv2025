import Image from 'next/image'
import styles from './name.module.css'
import profilePic from '../../public/me.jpg'

const Name = () => {
    return (
        <div className={styles.main}>
            <Image
                src={profilePic}
                width={170}
                height={200}
                alt='me'
            />
            <h2> Denis Chheang </h2>
            <div> Développeur fullstack React / NestJS </div>
        </div>
    )
}

export default Name;