import {Catalog_posts} from '../../sections/catalog-section/Catalog-section';
import {Navigation_container} from '../../general/navigation-container/Navigation-container';
import {ReactComponent as Search_svg} from '../../general/Svg/svg-search.svg';

export function Page_catalog(props) {
    const {page_catalog_data} = props;
    return (
        <div className="catalog-posts page-section section">
            <h2 className="container catalog-posts__title">{page_catalog_data.catalog_posts_page_title}</h2>
            <div className="container catalog-posts__container">
                <form action="" className="catalog-posts__container-search">
                    <div className="form__edit-user__network-item__container">
                        <Search_svg/>
                        <input type="text" className="form__edit-user__network-input" name="search_tegs" placeholder={page_catalog_data.page_posts_page_input}/>
                    </div>
                </form>
                <form action="" className="catalog-posts__container-box">
                    <button name="sort_tegs_by_name" className="button-border button">
                        <p className="button-text">{page_catalog_data.catalog_posts_page_sort_by_name}</p>
                    </button>
                    <button name="sort_tegs_by_data" className="button-border button">
                        <p className="button-text">{page_catalog_data.catalog_posts_page_sort_by_date_new}</p>
                    </button>
                </form>
            </div>
            <Catalog_posts catalog_posts_section_data={props}/>
            <Navigation_container />
        </div>
    );
}