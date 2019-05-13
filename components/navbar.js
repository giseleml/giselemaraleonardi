import Link from 'next/link'
import '../src/css/navbar.scss'

const NavBar = () => (
    <nav className="navbar">
    <ul>
        <li>
            <Link href="/sobre"><a className="nav-link">Sobre mim</a></Link>
            <img src="https://img.icons8.com/color/48/000000/spy-female.png" alt="Ilustração de uma mulher de óculos escuros"></img>
        </li>
        <li>
            <Link href="/habilidades"><a className="nav-link">Habilidades</a></Link>
            <img src="https://img.icons8.com/color/48/000000/brainstorm-skill.png" alt="Ilustração uma pessoa de perfil tendo uma ideia"></img>
        </li>
        <li>
            <Link href="/educacao"><a className="nav-link">Educação</a></Link>
            <img src="https://img.icons8.com/color/48/000000/student-female.png" alt="Ilustração de uma mulher usando um capelo"></img>
        </li>
        <li>
            <Link href="/projetos"><a className="nav-link">Projetos</a></Link>
            <img src="https://img.icons8.com/color/48/000000/code-file.png" alt="Ilustração de uma página de código"></img>
        </li>
        <li>
            <Link href="/experiencia"><a className="nav-link">Experiência</a></Link>
            <img src="https://img.icons8.com/color/48/000000/collaborator-female.png" alt="Ilustração de uma mulher com crachá"></img>
        </li>
        <li>
            <Link href="/contato"><a className="nav-link">Contato</a></Link>
            <img src="https://img.icons8.com/color/48/000000/filled-message.png" alt="Ilustração de um envelope azul"></img>
        </li>
    </ul>
    </nav>
)

export default NavBar