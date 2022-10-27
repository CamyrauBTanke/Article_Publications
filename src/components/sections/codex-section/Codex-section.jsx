import logo from '../../../assets/images/logo1.png';

export function Codex_section(props) {
    const {codex_section_data} = props;
    var codex_data = [
        {
            id: 132,
            text: "Я создаю авторские материалы и не перепечатываю с других сайтов."
        },
        {
            id: 1332,
            text: "Публикуя материалы других авторов, я всегда привожу ссылки на источники."
        },
        {
            id: 1324,
            text: "Я не матерюсь и не оскорбляю других на страницах Goblix"
        },
        {
            id: 1352,
            text: "Я уважаю администрацию и пользователей ресурса, не унижаю и не оскорбляю их — я здесь не для этого."
        },
        {
            id: 1312,
            text: "В споре я стараюсь не раздувать конфликт, а решить проблему в личной переписке."
        },
        {
            id: 1322,
            text: "Если мне не удалось разрешить конфликт, я не призываю других к активному противодействию."
        },
        {
            id: 13721,
            text: "Если нужно, я помогаю новичкам."
        },
        {
            id: 137562,
            text: "Я пользуюсь поиском, чтобы уточнить, нет ли уже на сайте похожего материала. Если так вышло, я дополню его в комментариях."
        },
        {
            id: 136572,
            text: "Каждым своим действием на ресурсе я стремлюсь добавить порядка, а не внести хаоса."
        },
        {
            id: 137122,
            text: "Я стараюсь учесть конструктивную критику и пожелания."
        },
        {
            id: 139872,
            text: "Я на позитиве. Из самой сложной ситуации всегда есть выход."
        },
        {
            id: 1371322,
            text: "Я понимаю, что Goblix — это сообщество людей с разными интересами. Если какая-то тема мне не интересна, я не мешаю другим ее обсуждать."
        }
    ]
    
    return(
        <section className="codex-section section">
            <div className="container codex-box">
                <div className="codex-container">
                    <h2 className="codex-box__title">{codex_section_data.codex_section_title}</h2>
                    <p className="codex-box__text">{codex_section_data.codex_section_text}</p>
                </div>
                <div className="codex-box__img">
                    <img src={logo} alt="" className="full-img" />
                </div>
            </div>
            <div className="container">
                <ol className="privacy-policy__list-2">
                    {codex_data.map((codex) => (
                        <li key={codex.id} className="privacy-policy__list-2__title">{codex.text}</li>
                    ))}
                </ol>
            </div>
        </section>
    );
}