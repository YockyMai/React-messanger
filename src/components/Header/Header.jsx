// import './Header.module.scss' //импорт стилей
import React from 'react';
import s from './Header.module.scss' //импорт МОДУЛЯ css
const Header = () => {
    return (
        <header className={s.Header}>

            <img src="https://static.rfstat.com/renderforest/images/v2/logo-homepage/gradient_2.png" alt="" className={s.logo} />


        </header>
    );
}

export default Header;