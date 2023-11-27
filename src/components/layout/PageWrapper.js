// React/Next -----------------------------------------------------------------------
// Styles ---------------------------------------------------------------------------
import styles from '../../styles/components/PageWrapper.module.css'
// Components -----------------------------------------------------------------------
// Other ----------------------------------------------------------------------------



//______________________________________________________________________________________
// ===== Component  =====

/**
 * This Component helps build a page while being a bit more dynamic then the layout file.
 * @prop children - The rest of the page content.
 * @prop [className=false] - String of any classes to surround the page with.
 * @prop [title=null] - String of the title of the page. Will also show in the Broswer Tab.
 * @prop [showTitleSection=true] - Bool of if we should render the header or not
 * @returns layout of the page
 */
const PageWrapper = ({ children, className=false, title=null, subtitle=null, showTitleSection=true }) => {

    //______________________________________________________________________________________
    // ===== Component Return =====
    const renderDefaultTitle = () => <>
        <h1>Welcome to</h1>
        <h1>Beyond the Table</h1>
        <br/>
    </>

    const renderPropTitle = () => <>
        <h2>{title}</h2>
        {subtitle ? <p>{subtitle}</p> : <br/>}
    </>

    const renderTitleSection = () => <>
        <div className="container">
            <div className={`${title ? styles.pagePanel : styles.homePanel}`}>
                <br/>
                {title ? renderPropTitle() : renderDefaultTitle() }
                <br/>
            </div>
        </div>
        <div className="branded-line"></div>
    </>


    //______________________________________________________________________________________
    // ===== Component Return =====
    return (
        <div style={{width:"100%"}}>
            {showTitleSection && renderTitleSection()}
            <div className={className ? className : ""}>
                { children }
            </div>
        </div>
    )
}

export default PageWrapper;
