import styles from './projects.module.css'
import global from '../page.module.css'
import Pong from './pong';
import Kubernetes from './kubernetes';
import Irc from './irc';
import ForestBattle from './forestbattle';
import Roguelike from './roguelike';
import Minirt from './minirt';

const Projects = () => {
    return (
        <div className={styles.main}>
            <h3> Projets personnels</h3>
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