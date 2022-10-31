import {ReactComponent as Questions_Like_Up} from '../../general/Svg/svg-like-up.svg';
import {ReactComponent as Questions_Answer} from '../../general/Svg/svg-answer-2.svg';
import {ReactComponent as Questions_like_Down} from '../../general/Svg/svg-like-down.svg';
import {ReactComponent as Question_Edit} from '../../general/Svg/svg-edit.svg';
import {ReactComponent as Question_Delete} from '../../general/Svg/svg-delete.svg';

export function Questions(){
    const questionsData = [
        {
            id: "Qestions_0121212",
            like: 19,
            dizlike: 1,
            answer: 3,
            title: 'привет ебаный мир',
            text: 'Тег <textarea>определяет элемент управления многострочным вводом текста.Этот <textarea>элемент часто используется в форме для сбора пользовательских данных, таких как комментарии или обзоры.Текстовая область может содержать неограниченное количество символов, а текст отображается шрифтом фиксированной ширины (обычно Courier).',
            teg: ['js', 'android', 'Vue', 'FSSD SAD', 'Vue']
        },
        {
            id: "Qestions_0121213",
            like: 19,
            dizlike: 1,
            answer: 3,
            title: 'tdtfugyhu jsfgyhudsfgyhu jdshfu jkdshfujk dsghfuj hdsf huyds',
            text: 'tdtfugyhu rqtewyri;oulikytrqylukjgweqwryfsdtyfue5w364tiuu5253e64rtu jdshfu jkdshfujk dsghfuj hdsf huydstdtfugyhu jsfgyhudsfgyhu jdshfu jkdshfujk dsghfuj hdsf huyds tdtfugyhu jsfgyhudsfgyhu jdshfu jkdshfujk dsghfuj hdsf huyds',
            teg: ['js', 'android', 'Vue']
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