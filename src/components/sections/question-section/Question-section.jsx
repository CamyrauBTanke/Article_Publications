import Img_User from '../../../assets/images/product-goblin.png'

export function getCurrentDate(question_data){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    let data_now = getCurrentDate().split('.');
    let data = question_data.question_data_date.split('.');
    let data_result_day = data_now[2] - data[2], data_result_month = data_now[1] - data[1], data_result_years = data_now[0] - data[0];
    
    let result = "";
    if(data_result_day > 0){
        result += data_result_day + "дней нахад";
    }
    if(data_result_month > 0){
        result += data_result_month + "месяцев назад";
    }
    if(data_result_years > 0){
        result += data_result_years + "зим назад";
    }
    else
        result = "недавно";

    return result
}

export function Question_section(props) {
    const {question_section_data} = props;
    const question_data = {
        question_data_id: 13234234,
        question_data_date: "2022.10.10",
        question_data_title: "sadsadgfdsg fdg fdgfdg dfdsf iydtvf uyhdigfd",
        question_data_text: "fsdom fnisd fbudsfidspo ,fp[ds,pof mdsnfb yvdsfr dsuifuynds foisd fbdstyf honildsufb dosifu bdsfy bgds8huf dsu8hfb ndsuhpfm pd9siof mds",
        question_data_like: 12,
        question_data_answer: 0,
        question_data_dizlike: 2,
        question_data_comment: [
            {
                user_answer_id: 1234,
                user_answer_name: "dsffds",
                user_answer_img: "../../../assets/images/product-goblin.png",
                user_answer_text: "xrcdtkgbuj,pl;wdasyvufykgbhln;kmLADSGVCNBUYHNIJKDSGFBULIJ",
                user_answer_date: "2022.10.10"
            },
            {
                user_answer_id: 1235,
                user_answer_name: "dsffds",
                user_answer_img: "../../../assets/images/product-goblin.png",
                user_answer_text: "xrcdtkgbuj,pl;wdasyvufykgbhln;kmLADSGVCNBUYHNIJKDSGFBULIJ",
                user_answer_date: "2022.10.10"
            }
        ]
    }
    
    return (
        <section className="">
            <div className="">

            </div>
            <div className="">
                <div className="">
                    <h2 className="">{question_data.question_data_title}</h2>
                    <div className="">
                        <div className="">
                            <img src={question_data.question_data_img} alt="" className="full-img" />
                        </div>
                        <div className="">
                            <p className="">{getCurrentDate(question_data)}</p>
                        </div>
                    </div>
                </div>
                <div className="">

                </div>
            </div>
        </section>
    );
}