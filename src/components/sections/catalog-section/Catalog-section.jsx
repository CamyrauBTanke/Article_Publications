export function Catalog_posts(props) {
    const {catalog_posts_section_data} = props;
    const tegData = [
        {
            id: 1,
            title: 'js',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laboriosam saepe eaque cum sunt reiciendis, itaque commodi sed neque hic laudantium culpa rerum, ipsa, quia ea exercitationem explicabo rem accusantium similique? Laborum consequuntur, illo vero amet, voluptatem voluptatibus dolorem incidunt laboriosam voluptate quas voluptates, magni dicta ipsa exercitationem odit. Quisquam?',
            qestion: 182,
            answer: 98
        },
        {
            id: 2,
            title: 'js',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laboriosam saepe eaque cum sunt reiciendis, itaque commodi sed neque hic laudantium culpa rerum, ipsa, quia ea exercitationem explicabo rem accusantium similique? Laborum consequuntur, illo vero amet, voluptatem voluptatibus dolorem incidunt laboriosam voluptate quas voluptates, magni dicta ipsa exercitationem odit. Quisquam?',
            qestion: 182,
            answer: 98
        },
        {
            id: 3,
            title: 'js',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laboriosam saepe eaque cum sunt reiciendis, itaque commodi sed neque hic laudantium culpa rerum, ipsa, quia ea exercitationem explicabo rem accusantium similique? Laborum consequuntur, illo vero amet, voluptatem voluptatibus dolorem incidunt laboriosam voluptate quas voluptates, magni dicta ipsa exercitationem odit. Quisquam?',
            qestion: 182,
            answer: 98
        },
        {
            id: 4,
            title: 'js',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laboriosam saepe eaque cum sunt reiciendis, itaque commodi sed neque hic laudantium culpa rerum, ipsa, quia ea exercitationem explicabo rem accusantium similique? Laborum consequuntur, illo vero amet, voluptatem voluptatibus dolorem incidunt laboriosam voluptate quas voluptates, magni dicta ipsa exercitationem odit. Quisquam?',
            qestion: 182,
            answer: 98
        },
        {
            id: 5,
            title: 'VUE',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laboriosam saepe eaque cum sunt reiciendis, itaque commodi sed neque hic laudantium culpa rerum, ipsa, quia ea exercitationem explicabo rem accusantium similique? Laborum consequuntur, illo vero amet, voluptatem voluptatibus dolorem incidunt laboriosam voluptate quas voluptates, magni dicta ipsa exercitationem odit. Quisquam?',
            qestion: 182,
            answer: 98
        }
    ];

    return (
    <section className="catalog-section section">
        <div className="catalog container">
        {tegData.map((teg) => (
            <div key={teg.id} className="catalog-item  box-shadow">
                <a href="" className="catalog-item__teg button-fill">{teg.title}</a>
                <h4 className="catalog-item__description">{teg.text}</h4>
                <div className="catalog-item__container">
                    <div className="catalog-item__container-2">
                        <span className="catalog-item__container-text">{catalog_posts_section_data.catalog_posts_teg_qestions}</span>
                        <span className="catalog-item__container-text">{teg.qestion}</span>
                    </div>
                    <div className="catalog-item__container-2">
                        <span className="catalog-item__container-text">{catalog_posts_section_data.catalog_posts_teg_answers}</span>
                        <span className="catalog-item__container-text">{teg.answer}</span>
                    </div>
                </div>
            </div>
        ))}
        </div>
    </section>
)}