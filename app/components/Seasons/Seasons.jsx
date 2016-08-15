import styles from './_Seasons.scss';
import React from 'react';

var classNames = require( 'classnames' ); 

export default class Season extends React.Component {

  

  render() {
    return (
      <a className={styles.seasons}>
        {this.props.name}
      </a>
    );
  }
}
