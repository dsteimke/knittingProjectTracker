import styles from './_header.scss';
import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className={styles.header}>
        Handmade Wardrobe Architect
      </header>
    );
  }
}
