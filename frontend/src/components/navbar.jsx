import { Link } from 'react-router-dom';
import { LayoutGrid, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function Navbar () {
    const { user, logout } = useAuth();

    return (
        <nav className="navbar">
            <link to="/equipos" className="brand">
                <LayoutGrid size={22} />
                LAB CRUD
            </link>

            <div className="Nav-rigth">
                <span>
                    {user?.nombre} . <strong>{user?.rol}</strong>
                </span>
                <button className='secondary' onClick={logout}>
                    <logOut size={16} />
                    Cerrar sesión
                </button>
            </div>
        </nav>
    );
}