export function Page_login(props){
    const {page_login_data} = props;
    return(
        <section className="page-login__section section">
            <div className="container">
                <form action="" className="page-login__container box-shadow">
                    <h2 className="page-login__title">{page_login_data.page_login_title}</h2>
                    <div className="page-login__box">
                        <h3 className="page-login__box-title form-title">{page_login_data.page_login_name_title}</h3>
                        <input type="text" name="name" placeholder={page_login_data.page_login_name_input} className="form__edit-user__network-input form__edit-user__network-item__container" />
                    </div>
                    <div className="page-login__box">
                        <h3 className="page-login__box-title form-title">{page_login_data.page_login_password_title}</h3>
                        <input type="password" name="password" placeholder={page_login_data.page_login_password_input} className="form__edit-user__network-input form__edit-user__network-item__container" />
                    </div>
                    <button type="sumbit" className="button button-border">
                        <p className="button-text">{page_login_data.page_login_button_login}</p>
                    </button>
                </form>
            </div>
            <div className="container">
                <div className="page-login__container page-login box-shadow">
                    <p className="page-login__box-text">{page_login_data.page_login_text}
                        <a href="/registration" className="page-login__link">{page_login_data.page_login_link}</a>
                    </p>
                </div>
            </div>
        </section>
    );
}