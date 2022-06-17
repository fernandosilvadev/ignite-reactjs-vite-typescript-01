import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css'


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover} 
            src="https://images.unsplash.com/photo-1553390774-b4822481c894?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50" 
            />
            <div className={styles.profile}>

                <Avatar 
                src="https://github.com/fernandosilvadev.png"
                alt="Fernando Silva"
                />
                <strong>Fernando Moura</strong>
                <span>@fernando_moura</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size="1.25rem"/> Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}