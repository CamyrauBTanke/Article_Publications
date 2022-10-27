import {Catalog_posts} from '../../sections/catalog-section/Catalog-section';
import {Navigation_container} from '../../general/navigation-container/Navigation-container';
import {ReactComponent as Search_svg} from '../../general/Svg/svg-search.svg';

export function Page_catalog(props) {
    const {page_catalog_data} = props;
    return (
        <div className="catalog-posts page-section section">
            <h2 className="container catalog-posts__title">{page_catalog_data.catalog_posts_page_title}</h2>
            <div className="container">
                <form action="" className="">
                    <div className="form__edit-user__network-item__container">
                        <Search_svg/>
                        <input type="url" className="form__edit-user__network-input form__edit-user__network-instagram" name="edit_user_data_instagram" placeholder={page_catalog_data.page_posts_page_input}/>
                    </div>
                </form>
                <button className="button-border button">
                    <p className="button-text">{page_catalog_data.catalog_posts_page_sort_by_name}</p>
                </button>
                <button className="button-border button">
                    <p className="button-text">{page_catalog_data.catalog_posts_page_sort_by_date_new}</p>
                </button>
            </div>
            <Catalog_posts catalog_posts_section_data={props}/>
            <Navigation_container />
        </div>
    );
}