import {ReactComponent as Qestions_Like_Up} from '../../general/Svg/svg-like-up.svg';
import {ReactComponent as Qestions_Answer} from '../../general/Svg/svg-answer-2.svg';
import {ReactComponent as Qestions_like_Down} from '../../general/Svg/svg-like-down.svg';

export function Qestions(){
    const qestionsData = [
        {
            id: "Qestions_0121212",
            like: 19,
            dizlike: 1,
            answer: 3,
            title: 'tdtfugyhu jsfgyhudsfgyhu jdshfu jkdshfujk dsghfuj hdsf huyds',
            text: 'tdtfugyhu jsfgyhudsfgyhu jdshfu jkdshfujk dsghfuj hdsf huyds tdtfugyhu jsfgyhudsfgyhu jdshfu jkdshfujk dsghfuj hdsf huydstdtfugyhu jsfgyhudsfgyhu jdshfu jkdshfujk dsghfuj hdsf huyds tdtfugyhu jsfgyhudsfgyhu jdshfu jkdshfujk dsghfuj hdsf huyds',
            teg: ['js', 'android', 'Vue', 'FSSD SAD', 'Vue']
        },
        {
            id: "Qestions_0121213",
            like: 19,
            dizlike: 1,
            answer: 3,
            title: 'tdtfugyhu jsfgyhudsfgyhu jdshfu jkdshfujk dsghfuj hdsf huyds',
            text: 'tdtfugyhu jsfgyhudsfgyhu jdshfu jkdshfujk dsghfuj hdsf huyds tdtfugyhu jsfgyhudsfgyhu jdshfu jkdshfujk dsghfuj hdsf huydstdtfugyhu jsfgyhudsfgyhu jdshfu jkdshfujk dsghfuj hdsf huyds tdtfugyhu jsfgyhudsfgyhu jdshfu jkdshfujk dsghfuj hdsf huyds',
            teg: ['js', 'android', 'Vue']
        }
    ];

    return(
        <div className="question">
            {qestionsData.map((qestion) => (
                <div key={qestion.id} className="question-container box-shadow">
                    <div className="question-container__condition">
                        <button className="button-img__condition button">
                            <p className="question-container__condition-button__text button-img__condition-text button-text">{qestion.like}</p>
                            <Qestions_Like_Up/>
                        </button>
                        <button className="button-img__condition button">
                            <p className="question-container__condition-button__text button-img__condition-text button-text">{qestion.dizlike}</p>
                            <Qestions_Answer/>
                        </button>
                        <button className="button-img__condition button">
                            <p className="question-container__condition-button__text button-img__condition-text button-text">{qestion.answer}</p>
                            <Qestions_like_Down/>
                        </button>
                    </div>
                    <div className="question-container__description">
                        <div className="question-container__description">
                            <h2 key={qestion.id} className="question-container__description-title"><a href="" className="button">{qestion.title}</a></h2>
                            <p className="question-container__description-text">{qestion.text}</p>
                            <div className="question-container__description-box">
                                {qestion.teg.map((teg, index) => (
                                    <a key={index} href="" className="button button-fill">{teg}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}