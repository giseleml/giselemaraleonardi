import Link from 'next/link'
import '../src/css/navbar.scss'

class NavBar extends React.Component {
    constructor(props){
        super(props)
        this.state = { checked: true }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({
            checked: !this.state.checked
        })
    }

    render() {
        return (
            <nav className="navbar">
                <label htmlFor="hamb-btn" onClick={this.handleChange}>
                {
                    this.state.checked ? String.fromCharCode('9776') : String.fromCharCode('10006')
                }
               
                </label>
                <input type="checkbox" id="hamb-btn"/>
                <ul>
                    <li>   
                        <Link href="/"><a className="nav-link">Sobre mim
                            <img src="https://2.bp.blogspot.com/-MRezei8QZfI/XNxx4YrSk9I/AAAAAAAAArs/JJAKUFBhWqQiKk7AFGPBCZEaCP0B6FHYACLcBGAs/s1600/aboutme-icon.png" alt="Ilustração de uma mulher de óculos escuros"></img></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/habilidades"><a className="nav-link">Habilidades
                            <img src="https://1.bp.blogspot.com/-8uJwY6OILHI/XNxx8ChztRI/AAAAAAAAAsU/NYVIjg7QE6cVjgf2AvErM03SJghMfgsZQCLcBGAs/s1600/skills-icon.png" alt="Ilustração uma pessoa de perfil tendo uma ideia"></img></a>
                        </Link>
                        
                    </li>
                    <li>
                        <Link href="/educacao"><a className="nav-link">Educação
                            <img src="https://1.bp.blogspot.com/-8IRgeizs10I/XNxx4W6d48I/AAAAAAAAAr0/hIneFYUTN5YF4s4RpwGnhbpHsuIi-s4sACLcBGAs/s1600/education-icon.png" alt="Ilustração de uma mulher usando um capelo"></img></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/projetos"><a className="nav-link">Projetos
                            <img src="https://1.bp.blogspot.com/-rRjfHN06JTk/XNxx7HUXq8I/AAAAAAAAAsM/EwqF6dj6ex4sPnKs57iFz4fsLh1_nqDBACLcBGAs/s1600/projects-icon.png" alt="Ilustração de uma página de código"></img></a>
                        </Link>
                        
                    </li>
                    <li>
                        <Link href="/experiencia"><a className="nav-link">Experiência
                            <img src="https://4.bp.blogspot.com/-GaAL1cwP-C0/XNxx42HQvcI/AAAAAAAAAr4/k9IviYossk0Pi5192hs29VtoH9cXTNelwCLcBGAs/s1600/experience-icon.png" alt="Ilustração de uma mulher com crachá"></img></a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contato"><a className="nav-link">Contato
                            <img src="https://4.bp.blogspot.com/-OwKz6-V9ddM/XNxx4YJzgHI/AAAAAAAAArw/R3sUlmL4B-AVEpVPyGQ-R9fJtuv4Cv3SwCLcBGAs/s1600/contact-icon.png" alt="Ilustração de um envelope azul"></img></a>
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}


export default NavBar