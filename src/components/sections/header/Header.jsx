import Header_logo from '../../../assets/images/logo1.png';
import {ReactComponent as Header_menu} from '../../general/Svg/svg-menu.svg';
import {ReactComponent as Header_search} from '../../general/Svg/svg-search.svg';
import {ReactComponent as Header_notifications} from '../../general/Svg/svg-notifications.svg';
import {Menu_Navigation} from '../../general/Menu-navigation/Menu-navigation';

import Header_User from '../../../assets/images/photo_2022-05-03_17-15-52.jpg';

export function Header(props) {
    const {header_section_data} = props;
    const header_data_user = [11, Header_User];
    
    return (
        <>
        <header className="header header-sticky section">
            <nav className="header-box container">
                <div className="header-box__container">
                    <button className="header-box__container-logo svg-box button button-img menu-navigation__button" id="menu-navigation__button">
                        <Header_menu />
                        <img src={Header_logo} alt="" className="" />
                    </button>
                    <div className="form-search">
                        <button className="svg-box button form-search__button">
                            <Header_search />
                            <form action="">
                                <input type="search" id="input-search" name="search" placeholder={header_section_data.header_input_text} className="form-search__input" />
                            </form>
                        </button>
                    </div>
                    <div className="header-box__container">
                        <a href="" className="svg-box button button-img">
                            <Header_notifications />
                            <div className="button-img__count">{header_data_user[0]}</div>
                        </a>
                        <a href="" className="button button-img header-box__container-people">
                            <img src={header_data_user[1]} alt="" className="full-img" />
                        </a>
                    </div>
                </div>
            </nav>
            <Menu_Navigation menu_Navigation_data = {header_section_data}/>
        </header>
        <div className="header-bottom"></div>
        </>
    );
}