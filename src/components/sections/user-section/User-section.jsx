import User_Photo from '../../../assets/images/photo_2022-05-03_17-15-52.jpg';
import {ReactComponent as User_Telegram} from '../../general/Svg/svg-telegram-2.svg';
import {ReactComponent as User_YouTube} from '../../general/Svg/svg-youtube.svg';
import {ReactComponent as User_Linkedin} from '../../general/Svg/svg-linkedin.svg';
import {ReactComponent as User_Link} from '../../general/Svg/svg-link.svg';
import {ReactComponent as User_GitHub} from '../../general/Svg/svg-github.svg';
import {ReactComponent as User_Instagram} from '../../general/Svg/svg-instagram.svg';
import {ReactComponent as  User_button_menu} from '../../general/Svg/svg-menu.svg';

import {Form_edit_profile} from '../../general/Form-edit-profile/Form-edit-profile';
import {Qestions} from '../../general/Question/Question';
import {User_teg_statistic} from '../../general/User-teg/User-teg';

export function User_section(props) {
    const {user_section_data} = props;
    const user_data = [
        "Xoxot",
        "shfbsidfbidbfodnsfimsd ifim dsfn dsufn ds fsdu",
        12,
        15,
        "https://www.instagram.com/Camyrau_B_Tanke/",
        "https://t.me/Camyrau_B_Tanke",
        "https://www.linkedin.com/in/vladyslav-hunko-4521a8250",
        "https://ru-ru.facebook.com/",
        "https://github.com/CamyrauBTanke",
        "https://www.youtube.com/channel/UCCIaTyFJqvO1SanxoltkOAA",
        2
    ]
    
    return (
        <section className="user-section section">
            <div className="user-container container">
                <div className="user-informations">
                    <div className="user-informations__img">
                        <div className="user-informations__img-level">
                            <p className="user-informations__img-level__text">{user_data[10]}</p>
                        </div>
                        <img src={User_Photo} alt="" className="full-img" />
                    </div>
                    <div className="user-informations__info">
                        <h2 className="user-informations__info-nikname">{user_data[0]}</h2>
                        <p className="user-informations__info-text">{user_data[1]}</p>
                        <div className="user-informations__info-network">
                            <a href={user_data[4]} target="_blank" className="button button-img svg-box">
                                <User_Instagram />
                            </a>
                            <a href={user_data[5]} target="_blank" className="button button-img svg-box">
                                <User_Telegram />
                            </a>
                            <a href={user_data[6]} target="_blank" className="button button-img svg-box">
                                <User_Linkedin />
                            </a>
                            <a href={user_data[7]} target="_blank" className="button button-img svg-box">
                                <User_Link />
                            </a>
                            <a href={user_data[8]} target="_blank" className="button button-img svg-box">
                                <User_GitHub />
                            </a>
                            <a href={user_data[9]} target="_blank" className="button button-img svg-box">
                                <User_YouTube />
                            </a>
                        </div>
                        <div className="user-informations__info-statistic">
                            <p className="user-informations__info-statistic__text">{user_section_data.user_section_data_qestions}: {user_data[2]}</p>
                            <p className="user-informations__info-statistic__text">{user_section_data.user_section_data_answers}: {user_data[3]}</p>
                        </div>
                    </div>
                </div>
                <div className="user-work">
                    <div className="user-work__navigation">
                        <div className="user-work__navigation-button">
                            <button className="button button-border">
                                <p className="button-text">{user_section_data.user_section_data_button_qestions}</p>
                            </button>
                            <button className="button button-border">
                                <p className="button-text">{user_section_data.user_section_data_button_answers}</p>
                            </button>
                            <button className="button button-border">
                                <p className="button-text">{user_section_data.user_section_data_button_tegs}</p>
                            </button>
                            <button className="button button-border">
                                <p className="button-text">{user_section_data.user_section_data_button_edit_data}</p>
                            </button>
                        </div>
                        <button className="button-img__condition button user-work__navigation-menu">
                            <User_button_menu/>
                            <p className="question-container__condition-button__text button-img__condition-text button-text">{user_section_data.user_section_data_button_menu}</p>
                        </button>
                    </div>
                    <div className="user-work__statistick">
                        <User_teg_statistic user_teg_statistic_data = {user_section_data}/>
                        <Form_edit_profile form_edit_profile_data = {user_section_data}/>
                        <Qestions/>
                    </div>
                </div>
            </div>
        </section>
    );
}