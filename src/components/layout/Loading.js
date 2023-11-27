import styles from "@/styles/components/Loading.module.css";

/**
 * Displays a loading animation
 * @prop {string} style String indicating which loading animation to show
 */
const Loading = ({style="bars", color=null, center=false, centerScreen=false}) => {

    const renderLoader = (style) => {
        if (style === "bars") {
            return <>
                <div className={`${styles.bar1} ${color && styles[color] ? styles[color] : ""}`} />
                <div className={`${styles.bar2} ${color && styles[color] ? styles[color] : ""}`} />
                <div className={`${styles.bar3} ${color && styles[color] ? styles[color] : ""}`} />
            </>
        } else if (style === "quarter-spinner") {
            return <div className="tw-relative">
                <div className={`${styles.quarterSpinner} ${color && styles[color] ? styles[color] : ""}`} />
            </div>
        } else if (style === "dots") {
            return <>
                <div className={`${styles.dot1} ${color && styles[color] ? styles[color] : ""}`} />
                <div className={`${styles.dot2} ${color && styles[color] ? styles[color] : ""}`} />
                <div className={`${styles.dot3} ${color && styles[color] ? styles[color] : ""}`} />
            </>
        }
    };

    return (
        <div className={`${center ? "tw-flex tw-justify-center tw-items-center tw-text-2xl" : ""} ${centerScreen ? "tw-h-screen" : ""}`}>
            <div className="tw-flex tw-flex-row">
                {renderLoader(style)}
                <p>Loading...</p>
            </div>
        </div>
    );
};

export default Loading;