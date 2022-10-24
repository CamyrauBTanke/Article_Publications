import {ReactComponent as Form_user_edit_Telegram} from '../../general/Svg/svg-telegram-2.svg';
import {ReactComponent as Form_user_edit_Mail} from '../../general/Svg/svg-mail.svg';
import {ReactComponent as Form_user_edit_Linkedin} from '../../general/Svg/svg-linkedin.svg';
import {ReactComponent as Form_user_edit_GitHub} from '../../general/Svg/svg-github.svg';
import {ReactComponent as Form_user_edit_Instagram} from '../../general/Svg/svg-instagram.svg';
import {ReactComponent as Form_user_edit_Website} from '../../general/Svg/svg-link.svg';
import {ReactComponent as Form_user_edit_Name} from '../../general/Svg/svg-account-2.svg';
import {ReactComponent as Form_user_edit_Description} from '../../general/Svg/svg-file-2.svg';
import {ReactComponent as Form_user_edit_File} from '../../general/Svg/svg-file.svg';

import User_Photo from '../../../assets/images/photo_2022-05-03_17-15-52.jpg';

export function Form_edit_profile(props) {
    const {form_edit_profile_data} = props;

    return (
        <form action="edit_user_data" className="form__edit-user">
            <h2 className="form__edit-user__blok-title">{form_edit_profile_data.form_edit_profile_data_blok_name}</h2>
            <div className="form__edit-user__container box-shadow">
                <div className="form__edit-user__container-box__file">
                    <h3 className="form__edit-user__title">{form_edit_profile_data.form_edit_profile_data_file_title}</h3>
                    <div className="form__edit-user__container-box__img">
                        <img src={User_Photo} alt="" className="full-img" />
                    </div>
                    <input type="file" name="edit_user_data_file" id="edit_user_data_file" className="inputfile" />
                    <label htmlFor="edit_user_data_file" className="form__edit-user__container__file">
                        <Form_user_edit_File/>
                        <p className="form__edit-user__container__file-text">{form_edit_profile_data.form_edit_profile_data_file_button_text}</p>
                    </label>
                </div>
                <div className="form__edit-user__container-box">
                    <h3 className="form__edit-user__title">{form_edit_profile_data.form_edit_profile_data_name_title}</h3>
                    <div className="form__edit-user__network-item__container">
                        <Form_user_edit_Name/>
                        <input type="text" className="" name="edit_user_data_name" placeholder={form_edit_profile_data.form_edit_profile_data_name}/>
                    </div>
                </div>
                <div className="form__edit-user__container-box">
                    <h3 className="form__edit-user__title">{form_edit_profile_data.form_edit_profile_data_description_title}</h3>
                    <div className="form__edit-user__network-item__container">
                        <Form_user_edit_Description/>
                        <input type="text" className="" name="edit_user_data_description" placeholder={form_edit_profile_data.form_edit_profile_data_description}/>
                    </div>
                </div>
            </div>

            <h2 className="form__edit-user__blok-title">{form_edit_profile_data.form_edit_profile_data_blok_link}</h2>
            <div className="form__edit-user__network box-shadow">
                <div className="form__edit-user__network-item">
                    <h3 className="form__edit-user__title">{form_edit_profile_data.form_edit_profile_data_instagram_title}</h3>
                    <div className="form__edit-user__network-item__container">
                        <Form_user_edit_Instagram/>
                        <input type="url" className="form__edit-user__network-input form__edit-user__network-instagram" name="edit_user_data_instagram" placeholder={form_edit_profile_data.form_edit_profile_data_instagram}/>
                    </div>
                </div>
                <div className="form__edit-user__network-item">
                    <h3 className="form__edit-user__title">{form_edit_profile_data.form_edit_profile_data_telegram_title}</h3>
                    <div className="form__edit-user__network-item__container">
                        <Form_user_edit_Telegram/>
                        <input type="url" className="form__edit-user__network-input form__edit-user__network-telegram" name="edit_user_data_telegram" placeholder={form_edit_profile_data.form_edit_profile_data_telegram}/>
                    </div>
                </div>
                <div className="form__edit-user__network-item">
                    <h3 className="form__edit-user__title">{form_edit_profile_data.form_edit_profile_data_linkedln_title}</h3>
                    <div className="form__edit-user__network-item__container">
                        <Form_user_edit_Linkedin/>
                        <input type="url" className="form__edit-user__network-input form__edit-user__network-linkedln" name="edit_user_data_linkedln" placeholder={form_edit_profile_data.form_edit_profile_data_linkedln}/>
                    </div>
                </div>
                <div className="form__edit-user__network-item">
                    <h3 className="form__edit-user__title">{form_edit_profile_data.form_edit_profile_data_website_title}</h3>
                    <div className="form__edit-user__network-item__container">
                        <Form_user_edit_Website/>
                        <input type="url" className="form__edit-user__network-input form__edit-user__network-website" name="edit_user_data_website" placeholder={form_edit_profile_data.form_edit_profile_data_website}/>
                    </div>
                </div>
                <div className="form__edit-user__network-item">
                    <h3 className="form__edit-user__title">{form_edit_profile_data.form_edit_profile_data_github_title}</h3>
                    <div className="form__edit-user__network-item__container">
                        <Form_user_edit_GitHub/>
                        <input type="url" className="form__edit-user__network-input form__edit-user__network-github" name="edit_user_data_github" placeholder={form_edit_profile_data.form_edit_profile_data_github}/>
                    </div>
                </div>
                <div className="form__edit-user__network-item">
                    <h3 className="form__edit-user__title">{form_edit_profile_data.form_edit_profile_data_youtobe_title}</h3>
                    <div className="form__edit-user__network-item__container">
                        <Form_user_edit_Mail/>
                        <input type="email" className="form__edit-user__network-input form__edit-user__network-mail" name="edit_user_data_mail" placeholder={form_edit_profile_data.form_edit_profile_data_mail}/>
                    </div>
                </div>
            </div>
            <div className="form__edit-user__answer">
                <button type="submit" className="button form__edit-user__answer-button">{form_edit_profile_data.form_edit_profile_data_button_sumbit}</button>
                <button type="reset" className="button form__edit-user__answer-button">{form_edit_profile_data.form_edit_profile_data_button_reset}</button>
            </div>
        </form>
    );
}  