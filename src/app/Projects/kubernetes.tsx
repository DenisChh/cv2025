import global from '../page.module.css'

const Kubernetes = () => {
    return (
        <>
            <div className={global.title}> Cluster Kubernetes </div>
            <ul>
                <li>
                    Wordpress, Grafana, Telegraf
                </li>
                <li>
                    Load balancing avec Metallb
                </li>
            </ul>
        </>
    )
}

export default Kubernetes;