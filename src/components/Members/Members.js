import React from 'react';
import styles from './Members.module.css';

const Members = (props) => {
    return (
        <div className={styles.Members}>
            <span className={styles.Member}>{props.member}</span>
        </div>
    )
}

export default Members;