import {ReactComponent as Footer_instagram} from '../../general/Svg/svg-instagram.svg';
import {ReactComponent as Footer_telegram} from '../../general/Svg/svg-telegram-2.svg';
import {ReactComponent as Footer_linkedin} from '../../general/Svg/svg-linkedin.svg';
import {ReactComponent as Footer_mail} from '../../general/Svg/svg-mail.svg';
import {ReactComponent as Footer_github} from '../../general/Svg/svg-github.svg';
import {ReactComponent as Footer_youtube} from '../../general/Svg/svg-youtube.svg';

export function Footer(props) {
    const {footer_section_data} = props;
    return (
        <footer className="footer section">
            <div className="footer-box container">
                <div className="footer-box__menu-box">
                    <ul className="footer-box__menu-box__list">
                        <li className="footer-box__menu-box__list-item">
                            <h3  className="footer-box__menu-box__list-item__title">{footer_section_data.footer_data_сatalog}</h3>
                            <div className="footer-box__menu-box__list-item__box" id="footer-menu-box__catalog">
                                <a href="" className="button button-link__middle">{footer_section_data.footer_data_blog}</a>
                                <a href="" className="button button-link__middle">{footer_section_data.footer_data_categories}</a>
                                <a href="" className="button button-link__middle">{footer_section_data.footer_data_user_manual}</a>
                            </div>
                        </li>
                        <li className="footer-box__menu-box__list-item">
                            <h3  className="footer-box__menu-box__list-item__title">{footer_section_data.footer_data_agreements}</h3>
                            <div className="footer-box__menu-box__list-item__box" id="footer-menu-box__services">
                                <a href="privacy-policy.html" className="button button-link__middle">{footer_section_data.footer_data_privacy_policy}</a>
                                <a href="" className="button button-link__middle">{footer_section_data.footer_data_terms_of_use}</a>
                                <a href="" className="button button-link__middle">{footer_section_data.footer_data_setting_cookies}</a>
                                <a href="" className="button button-link__middle">{footer_section_data.footer_data_cookie_policy}</a>
                            </div>
                        </li>
                        <li className="footer-box__menu-box__list-item">
                            <h3  className="footer-box__menu-box__list-item__title">{footer_section_data.footer_data_about_us}</h3>
                            <div className="footer-box__menu-box__list-item__box" id="footer-menu-box__about-company">
                                <a href="" className="button button-link__middle">{footer_section_data.footer_data_contacts}</a>
                                <a href="" className="button button-link__middle">{footer_section_data.footer_data_about_the_project}</a>
                                <a href="" className="button button-link__middle">{footer_section_data.footer_data_connect_with_us}</a>
                            </div>
                        </li>
                        <div className="footer-box__network-box">
                            <a href="https://www.instagram.com/Camyrau_B_Tanke/" target="_blank" className="button button-img svg-box">
                                <Footer_instagram />
                            </a>
                            <a href="https://t.me/Camyrau_B_Tanke" target="_blank" className="button button-img svg-box">
                                <Footer_telegram />
                            </a>
                            <a href="https://www.linkedin.com/in/vladyslav-hunko-4521a8250" target="_blank" className="button button-img svg-box">
                                <Footer_linkedin />
                            </a>
                            <a href="mailto:xoxot.cmertu.21@gmail.com" target="_blank" className="button button-img svg-box">
                                <Footer_mail />
                            </a>
                            <a href="https://github.com/CamyrauBTanke" target="_blank" className="button button-img svg-box">
                                <Footer_github />
                            </a>
                            <a href="https://www.youtube.com/channel/UCCIaTyFJqvO1SanxoltkOAA" target="_blank" className="button button-img svg-box">
                                <Footer_youtube />
                            </a>
                        </div>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
//<h3 onclick="Show_Block('footer-menu-box__catalog')" className="footer-box__menu-box__list-item__title">{footer_section_data.footer_data_сatalog}</h3>