import Link from 'next/link'

import '../src/css/navbar.scss'

import iconAbout from '../src/img/aboutme-icon.png'
import iconSkills from '../src/img/skills-icon.png'
import iconEdu from '../src/img/education-icon.png'
import iconProj from '../src/img/projects-icon.png'
import iconContact from '../src/img/contact-icon.png'

const NavBar = () => (
            <nav className="navbar">
                <input type="checkbox" id="hamb-btn"/>
                <label htmlFor="hamb-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <ul>
                    <li>   
                        <Link href="/"><a className="nav-link">Sobre mim
                            <img src={iconAbout} alt="Ilustração de uma mulher de óculos escuros"></img></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/habilidades"><a className="nav-link">Habilidades
                            <img src={iconSkills} alt="Ilustração uma pessoa de perfil tendo uma ideia"></img></a>
                        </Link>
                        
                    </li>
                    <li>
                        <Link href="/educacao"><a className="nav-link">Educação
                            <img src={iconEdu} alt="Ilustração de uma mulher usando um capelo"></img></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projetos"><a className="nav-link">Projetos
                            <img src={iconProj} alt="Ilustração de uma página de código"></img></a>
                        </Link>
                        
                    </li>
                    <li>
                        <Link href="/contato"><a className="nav-link">Contato
                            <img src={iconContact} alt="Ilustração de um envelope azul"></img></a>
                        </Link>
                    </li>
                </ul>
            </nav>
        )

export default NavBar