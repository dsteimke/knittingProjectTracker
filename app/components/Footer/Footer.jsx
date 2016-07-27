import styles from './_Footer.scss';
import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        Designed by Danielle Steimke using React & Other Things
      </footer>
    );
  }
}
