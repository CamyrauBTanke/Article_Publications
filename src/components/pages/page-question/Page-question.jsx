import {Questions} from '../../general/Question/Question';
import {Navigation_container} from '../../general/navigation-container/Navigation-container';

export function Page_question(props) {
    const {page_qustion_data} = props;
    return (
        <div className="page-section section page-question__section">
            <div className="container page-question__container">
                <h2 className="page-question__title">{page_qustion_data.page_question_title}</h2>
                <a href="/create_question" className="button button-border">{page_qustion_data.page_question_create_question}</a>
            </div>
            <form className="container page-question__container page-question__container-flex">
                <button name="page_question_sort_by_data" className="button button-fill">{page_qustion_data.page_question_sort_by_data}</button>
                <button name="page_question_sort_by_popular" className="button button-fill">{page_qustion_data.page_question_sort_by_popular}</button>
            </form>
            <div className="container">
                <Questions/>
            </div>
            <Navigation_container />
        </div>
    );
}