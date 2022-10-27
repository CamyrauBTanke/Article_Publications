import Img_User from '../../../assets/images/product-goblin.png'

export function Question_section(props) {
    const {question_section_data} = props;
    const question_data = {
        question_data_id: 13234234,
        question_data_date: "21.8.2021",
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
                            <p className="">{question_data.question_data_date}</p>
                        </div>
                    </div>
                </div>
                <div className="">

                </div>
            </div>
        </section>
    );
}