import {ReactComponent as User_teg_Delete} from '../Svg/svg-delete.svg';

export function User_teg_statistic(props) {
    const {user_teg_statistic_data} = props;
    const user_teg_data = [
        {
            id_teg: 123214456,
            name_teg: "js",
            questions_teg: 32,
            answer_teg: 2
        },
        {
            id_teg: 12112132,
            name_teg: "Vue.js",
            questions_teg: 2,
            answer_teg: 1
        },
        {
            id_teg: 123445445,
            name_teg: "jsx",
            questions_teg: 332,
            answer_teg: 3
        }
    ]
    return (
        <div className="user-teg__statistic box-shadow">
            <h1 className="user-teg__statistic-title">{user_teg_statistic_data.user_teg_statistic_title}</h1>
            <ul className="user-teg__statistic-container">
                    {user_teg_data.map((private_policy) => (
                        <li key={private_policy.id_teg} className="user-teg__statistic-container__item">
                            <p className="user-teg__statistic-container__item-one">{user_teg_statistic_data.user_teg_statistic_name}: 
                                <a href="" className="buuton button-fill">{private_policy.name_teg}</a>
                            </p>
                            <p className="user-teg__statistic-container__item-one">{user_teg_statistic_data.user_teg_statistic_questions}: {private_policy.questions_teg}</p>
                            <p className="user-teg__statistic-container__item-one">{user_teg_statistic_data.user_teg_statistic_answers}: {private_policy.answer_teg}</p>
                        </li>
                    ))}
            </ul>
        </div>
    );
}