import styles from './projects.module.css'
import chess from '../../public/bishop.png'
import globalStyles from '../page.module.css'
import Pong from './pong';
import Kubernetes from './kubernetes';
import Irc from './irc';
import ForestBattle from './forestbattle';
import Roguelike from './roguelike';
import Minirt from './minirt';
import Image from 'next/image';

const Projects = () => {
    return (
        <div className={styles.main}>
            <div className={globalStyles.textWithIcon}>
                <Image
                    src={chess}
                    alt='chessIcon'
                    width={30}
                    height={30}
                />
                <div> Projets personnels </div>
            </div>
            <Pong />
            <Kubernetes />
            <Irc />
            <Minirt />
            <ForestBattle />
            <Roguelike />
        </div>
    )
}

export default Projects;