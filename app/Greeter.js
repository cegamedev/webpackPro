import React, { Component } from 'react'
import config from './config.json';
import styles from './Greeter.css';//导入

class Greeter extends Component {
    render() {
        return (
            <div>
                <div className={styles.root}>
                    {config.greetText}
                </div>
                <div className={styles.div}>
                    {config.greetText}
                </div>
            </div>
        );
    }
}

export default Greeter