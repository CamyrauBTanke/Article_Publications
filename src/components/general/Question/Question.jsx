import {ReactComponent as Questions_Like_Up} from '../../general/Svg/svg-like-up.svg';
import {ReactComponent as Questions_Answer} from '../../general/Svg/svg-answer-2.svg';
import {ReactComponent as Questions_like_Down} from '../../general/Svg/svg-like-down.svg';
import {ReactComponent as Question_Edit} from '../../general/Svg/svg-edit.svg';
import {ReactComponent as Question_Delete} from '../../general/Svg/svg-delete.svg';

export function Questions(){
    const questionsData = [
        {
            id: "Qestions_0121212",
            like: 3,
            dizlike: 0,
            answer: 1,
            title: 'Как сносить 13тх в Clash of Clans с помощью Гибрида или Лава+Шары',
            text: 'Хотелось бы услышать короткий ответ по моему вопросы. Армия фулл.',
            teg: ['Clash of Clans']
        },
        {
            id: "Qestions_0121213",
            like: 2,
            dizlike: 0,
            answer: 0,
            title: 'Ратуша/Великая адская башня (14 ТХ)',
            text: 'Великая адская башня заставит ваших врагов почувствовать себя зефирками, напавшими на костер. При уничтожении разносит ратушу в щепки взрывом, который на некоторое время замедляет все в округе',
            teg: ['Clash of Clans', 'Дэф']
        }
    ];

    return(
        <div className="question">
            {questionsData.map((question) => (
                <div key={question.id} className="question-container box-shadow">
                    <div className="question-container__condition">
                        <button className="button-img__condition button button-img__condition-small">
                            <p className="question-container__condition-button__text button-img__condition-text button-text">{question.like}</p>
                            <Questions_Like_Up/>
                        </button>
                        <button className="button-img__condition button button-img__condition-small">
                            <p className="question-container__condition-button__text button-img__condition-text button-text">{question.dizlike}</p>
                            <Questions_Answer/>
                        </button>
                        <button className="button-img__condition button button-img__condition-small">
                            <p className="question-container__condition-button__text button-img__condition-text button-text">{question.answer}</p>
                            <Questions_like_Down/>
                        </button>
                    </div>
                    <div className="question-container__description">
                        <div className="question-container__description">
                            <h2 key={question.id} className="question-container__description-title"><a href="" className="button">{question.title}</a></h2>
                            <p className="question-container__description-text">{question.text}</p>
                            <div className="question-container__description-box">
                                {question.teg.map((teg, index) => (
                                    <a key={index} href="" className="button button-fill">{teg}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="question-container__condition">
                        <a href="/edit_question/1" className="button-img__condition button-img__condition-small button">
                            <Question_Edit/>
                        </a>
                        <button className="button-img__condition button-img__condition-small button">
                            <Question_Delete/>
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}