import {ReactComponent as Question_Edit} from '../../general/Svg/svg-edit.svg';
import {ReactComponent as Question_Delete} from '../../general/Svg/svg-delete.svg';

export function Catalog_posts(props) {
    const {catalog_posts_section_data} = props;
    const tegData = [
        {
            id: 1,
            title: 'js',
            text: 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.',
            question: 182,
            answer: 98
        },
        {
            id: 2,
            title: 'Vue',
            text: 'Vue.js — JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов. Легко интегрируется в проекты с использованием других JavaScript-библиотек. Может функционировать как веб-фреймворк для разработки одностраничных приложений в реактивном стиле.',
            question: 182,
            answer: 98
        },
        {
            id: 4,
            title: 'Дэф',
            text: 'Деф/дэф – сокращение от английского словца Defense, по нашему, оборонка,оборонный, защитный значит, дефить – это оборонять что- то или кого то или защищать что-то или кого то . Иногда дефом/дэфом называетсят совокупность всех оборонительных построек, оборонительных войск.',
            question: 1,
            answer: 0
        },
        {
            id: 5,
            title: 'Clash Of Clans',
            text: 'Clash of Сlans — стратегическая игра, созданная финской студией-разработчиком Supercell для мобильных устройств. Распространяется по модели free-to-play.',
            question: 2,
            answer: 0
        }
    ];

    return (
    <section className="catalog-section section">
        <div className="catalog container">
        {tegData.map((teg) => (
            <div key={teg.id} className="catalog-item  box-shadow">
                <div className="flex-box-catalog">
                    <a href="" className="catalog-item__teg button-fill">{teg.title}</a>
                    <div className="flex-box">
                        <a href="/edit_question/1" className="button-img__condition button-img__condition-small button">
                            <Question_Edit/>
                        </a>
                        <button className="button-img__condition button-img__condition-small button">
                            <Question_Delete/>
                        </button>
                    </div>
                </div>
                <div className="catalog-item__container">
                    <div className="catalog-item__container-2">
                        <span className="catalog-item__container-text">{catalog_posts_section_data.catalog_posts_teg_questions+" "+teg.question}</span>
                    </div>
                    <div className="catalog-item__container-2">
                        <span className="catalog-item__container-text">{catalog_posts_section_data.catalog_posts_teg_answers+" "+teg.answer}</span>
                    </div>
                </div>
                <h4 className="catalog-item__description">{teg.text}</h4>
            </div>
        ))}
        </div>
    </section>
)}