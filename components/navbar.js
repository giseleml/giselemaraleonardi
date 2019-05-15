import Link from 'next/link'
import '../src/css/navbar.scss'

const NavBar = () => (
    <nav className="navbar">
    <ul>
    <li>
        <Link href="/"><a className="nav-link">Home
            <img src="https://img.icons8.com/color/48/000000/home.png" alt="Ilustração de uma casa para página inicial"></img></a>
        </Link>
           
        </li>
        <li>
            <Link href="/sobre"><a className="nav-link">Sobre mim
                <img src="https://img.icons8.com/color/48/000000/spy-female.png" alt="Ilustração de uma mulher de óculos escuros"></img></a>
            </Link>
            
        </li>
        <li>
            <Link href="/habilidades"><a className="nav-link">Habilidades
                <img src="https://img.icons8.com/color/48/000000/brainstorm-skill.png" alt="Ilustração uma pessoa de perfil tendo uma ideia"></img></a>
            </Link>
            
        </li>
        <li>
            <Link href="/educacao"><a className="nav-link">Educação
                <img src="https://img.icons8.com/color/48/000000/student-female.png" alt="Ilustração de uma mulher usando um capelo"></img></a>
            </Link>
        </li>
        <li>
            <Link href="/projetos"><a className="nav-link">Projetos
                <img src="https://img.icons8.com/color/48/000000/code-file.png" alt="Ilustração de uma página de código"></img></a>
            </Link>
            
        </li>
        <li>
            <Link href="/experiencia"><a className="nav-link">Experiência
                <img src="https://img.icons8.com/color/48/000000/collaborator-female.png" alt="Ilustração de uma mulher com crachá"></img></a>
            </Link>
        </li>
        <li>
            <Link href="/contato"><a className="nav-link">Contato
                <img src="https://img.icons8.com/color/48/000000/filled-message.png" alt="Ilustração de um envelope azul"></img></a>
            </Link>
        </li>
    </ul>
    </nav>
)

export default NavBar