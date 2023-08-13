import { Fragment } from "react";
import styles from "@/styles/components/Loading.module.css";

/**
 * Displays a loading animation
 * @prop {string} style String indicating which loading animation to show
 */
const Loading = ({style="bars", color=null}) => {

    const renderLoader = (style) => {
        if (style === "bars") {
            return (
                <Fragment>
                    <div className={`${styles.bar1} ${color && styles[color] ? styles[color] : ""}`} />
                    <div className={`${styles.bar2} ${color && styles[color] ? styles[color] : ""}`} />
                    <div className={`${styles.bar3} ${color && styles[color] ? styles[color] : ""}`} />
                </Fragment>
            );
        } else if (style === "quarter-spinner") {
            return (
                <div className="tw-relative">
                    <div className={`${styles.quarterSpinner} ${color && styles[color] ? styles[color] : ""}`} />
                </div>
            );
        } else if (style === "dots") {
            return (
                <Fragment>
                    <div className={`${styles.dot1} ${color && styles[color] ? styles[color] : ""}`} />
                    <div className={`${styles.dot2} ${color && styles[color] ? styles[color] : ""}`} />
                    <div className={`${styles.dot3} ${color && styles[color] ? styles[color] : ""}`} />
                </Fragment>
            );
        }
    };

    return (
        <div className="tw-flex tw-flex-row">
            {renderLoader(style)}
            <p>Loading...</p>
        </div>
    );
};

export default Loading;