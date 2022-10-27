import Logo from '../../../assets/images/cloud-1.png';

export function Error_section(props) {
    const {error_section_data} = props;
    return(
        <section className="error-section section">
            <div className="error-container-row container">
                <div className="error-container">
                    <h2 className="error-title">{error_section_data.error_title}</h2>
                    <p className="error-text">{error_section_data.error_text}</p>
                    <a href="/" className="button button-border">{error_section_data.error_button}</a>
                </div>
                <div className="error-img">
                    <img src={Logo} alt="" className="full-img" />
                </div>
            </div>
        </section>
    );
}