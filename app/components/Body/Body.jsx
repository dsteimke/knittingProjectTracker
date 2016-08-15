import styles from './_Body.scss';
import React from 'react';
import Menu from '../Menu/Menu';
import Season from '../Seasons/Seasons'

let { PropTypes } = React;

export default class Body extends React.Component {

  static defaultProps = {
    items: []
  };

  static propTypes = {
    items: PropTypes.array.isRequired
  };


  render() {
    return (
      <div className={styles.body}>
          <Season name={"Spring"} />
          <Season name={"Summer"} />
          <Season name={"Fall"}   />
          <Season name={"Winter"} />
      </div>
    );
  }
}
