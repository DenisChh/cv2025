import global from '../page.module.css'

const Minirt = () => {
    return (
        <>
            <div className={global.title}> Minirt - Rendu 3D en C </div>
            <ul>
                <li>
                    Raytracing avec LibX, déplacement et intéractions dans la scène
                </li>
            </ul>
        </>
    )
}

export default Minirt;