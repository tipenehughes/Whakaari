import React, { useEffect } from "react";
import styles from "../../../CSS/Navigation/Languages.module.css";

const LangDropDown = ({ selection, langs, handleSetSelection }) => {
    const removeSelection = (arr) => {
        const index = arr.findIndex((v) => v.lang === selection.lang);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    };

    return (
        <div className={styles.dropDown} key={selection}>
            {removeSelection(langs).map((lang) => {
                return (
                    <div className={styles.languagesContainer}>
                        <div
                            className={styles.languages}
                            aria-label="Language selector"
                            data-lang={lang.lang}
                            data-code={lang.code}
                            onClick={handleSetSelection}
                        >
                            <a class={styles.langActive} href="#">
                                <img src={lang.lang} id="en" alt="English" />
                                <p>{lang.code}</p>
                            </a>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default LangDropDown;