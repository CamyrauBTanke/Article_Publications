function Nav_Count(count){
    if(count[1] == 0)
        return(
            <button className="">{count[0]}</button>
        )
    if(count[0] > 0)
        return(
            <>
                <button className="button button-navigation">{"<"}</button>
                <button className="button button-navigation">{count[0]}</button>
                <button className="button button-navigation">{">"}</button>
                <button className="button button-navigation">{count[1]}</button>
            </>
        )
}

export function Navigation_container() {
    const page_catalog_data = [1,10];
    return (
        <div className="navigation-container container">
            {Nav_Count(page_catalog_data)}
        </div>
    );
}