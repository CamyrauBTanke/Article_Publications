export function Menu_Navigation(props) {
    const {menu_Navigation_data} = props;
    const page_user_id = 1;

    return (
    <div className="menu-navigation">
        <nav className="menu-navigation__container" id="menu-navigation">
            <ul className="menu-navigation__list">
                <li className="menu-navigation__list-item">
                    <a key="header_navigation_01" href="/" className="button button-menu">{menu_Navigation_data.menu_Navigation_main}</a>
                </li>
                <li className="menu-navigation__list-item">
                    <a key="header_navigation_02" href={"/user/"+page_user_id} className="button button-menu">{menu_Navigation_data.menu_Navigation_account}</a>
                </li>
                <li className="menu-navigation__list-item">
                    <a key="header_navigation_03" href={"/question/"} className="button button-menu">{menu_Navigation_data.menu_Navigation_questions}</a>
                </li>
                <li className="menu-navigation__list-item">
                    <a key="header_navigation_04" href={"/catalog/"} className="button button-menu">{menu_Navigation_data.menu_Navigation_teg}</a>
                </li>
            </ul>
        </nav>
    </div>
    );
}