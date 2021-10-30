import React from 'react';
import './Navbar.module.scss'
import s from './Navbar.module.scss' //импорт МОДУЛЯ css
import {NavLink} from "react-router-dom"
const Navbar = () => {
    return (
        <nav className={s.nav}>
				<NavLink className = {s.nav_element} to="/feed" activeClassName={s.active}>
					<p>
						News
					</p>
				</NavLink>
				<NavLink className = {s.nav_element} to="/dialogs" activeClassName={s.active}>
					<p>
						Messages
					</p>
				</NavLink>
				<NavLink className = {s.nav_element} to="/profile" activeClassName={s.active}>
					<p>
						Profile
					</p>
				</NavLink>
				<NavLink className = {s.nav_element} to="/audios" activeClassName={s.active}>
					<p>
						Music
					</p>
				</NavLink>
				<NavLink className = {s.nav_element} to="/friends" activeClassName={s.active}>
					<p>
						Friends
					</p>
				</NavLink>
				<NavLink className = {s.nav_element} to="/settings" activeClassName={s.active}>
					<p>
						Settings
					</p>
				</NavLink>
		</nav>
    );
}

export default Navbar;