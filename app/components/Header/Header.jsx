import styles from './_header.scss';
import React from 'react';

export default class Header extends React.Component {
  render() {
    var year = (new Date()).getFullYear();
    return (
      <header className={styles.header}>
        THIS IS THE HEADERYAS
      </header>
    );
  }
}