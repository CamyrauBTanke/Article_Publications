export function Page_registration(props){
    const {page_registration_data} = props;
    return(
        <section className="page-login__section section">
            <div className="container">
                <form action="" className="page-login__container box-shadow">
                    <h2 className="page-login__title">{page_registration_data.page_registration_title}</h2>
                    <p className="page-login__text">{page_registration_data.page_registration_box_text}
                        <a href="/private_policy" className="page-login__link">{page_registration_data.page_registration_box_link}</a>
                    </p>
                    <div className="page-login__box">
                        <h3 className="page-login__box-title form-title">{page_registration_data.page_registration_name_title}</h3>
                        <input type="text" name="name" placeholder={page_registration_data.page_registration_name_input} className="form__edit-user__network-input form__edit-user__network-item__container" />
                    </div>
                    <div className="page-login__box">
                        <h3 className="page-login__box-title form-title">{page_registration_data.page_registration_email_title}</h3>
                        <input type="email" name="password" placeholder={page_registration_data.page_registration_email_input} className="form__edit-user__network-input form__edit-user__network-item__container" />
                    </div>
                    <div className="page-login__box">
                        <h3 className="page-login__box-title form-title">{page_registration_data.page_registration_password_title}</h3>
                        <input type="password" name="password" placeholder={page_registration_data.page_registration_password_input} className="form__edit-user__network-input form__edit-user__network-item__container" />
                    </div>
                    <button type="sumbit" className="button button-border">
                        <p className="button-text">{page_registration_data.page_registration_button_registration}</p>
                    </button>
                </form>
            </div>
            <div className="container">
                <div className="page-login__container box-shadow">
                    <p className="page-login__box-text">{page_registration_data.page_registration_text} 
                        <a href="/login" className="page-login__link">{page_registration_data.page_registration_link}</a>
                    </p>
                </div>
            </div>
        </section>
    );
}