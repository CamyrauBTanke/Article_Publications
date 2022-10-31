export function Edit_question(props){
    const {create_question_page_data} = props;
    return(
        <section className="section create-question__section">
            <div className="container create-question__container">
                <h2 className="create-question__title">{create_question_page_data.page_edit_question_title}</h2>
                <form action="conteiner" className="create-question__box box-shadow">
                    <div className="create-question__box-container">
                        <h4 className="form-title">{create_question_page_data.page_create_question_ruls}</h4>
                        <p className="">{create_question_page_data.page_create_question_text} <a href="/codex" className="">{create_question_page_data.page_create_question_link}</a></p>
                    </div>
                    <div className="create-question__box-container">
                        <h4 className="form-title">{create_question_page_data.page_create_question_name}</h4>
                        <input type="url" className="form__edit-user__network-input form__edit-user__network-item__container" name="create_question_name" placeholder={create_question_page_data.page_create_question_description_input_name}/>
                    </div>
                    <div className="create-question__box-container">
                        <h4 className="form-title">{create_question_page_data.page_create_question_description}</h4>
                        <textarea name="create_question_description" placeholder={create_question_page_data.page_create_question_description_input_description} className="form__edit-user__network-item__container create-question__textarea"/>
                    </div>
                    <div className="create-question__box-container">
                        <h4 className="form-title">{create_question_page_data.page_create_question_tegs}</h4>
                        <input type="url" className="form__edit-user__network-input form__edit-user__network-item__container" name="create_question_tegs" placeholder={create_question_page_data.page_create_question_description_input_tegs}/>
                    </div>
                    <div className="form__edit-user__answer create-question__box-container">
                        <button type="submit" className="button button-border">
                            <p className="button-text">{create_question_page_data.page_edit_question_button_sumbit}</p>
                        </button>
                        <a href="/question" className="button button-border">
                            <p className="button-text">{create_question_page_data.page_edit_question_button_reset}</p>
                        </a>
                    </div>
                </form>
            </div>
        </section>
    );
}