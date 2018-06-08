import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

class Dashboard extends Component {
  mapListItems() {
    if (this.props.initialState.length !== 0) {
      return this.props.initialState.map(item => {
        return (
          <div>
            <Link
              to={{
                pathname: '/trip/' + item.id
              }}
              className="collection-item"
            >
              {item.address}
            </Link>
          </div>
        );
      });
    }
    else{
      return (
        <div>
        <h2>Welcome to TravelBudd!</h2>
        <p>
          To get started, click <Link to="plan/add"><a>here</a></Link> or the red button on the bottom right corner.
        </p>
        </div>
      );
    }
    return;
  }

  render() {
    return (
      <div className="container">
        <div className="collection">{this.mapListItems()} </div>
        <div className="fixed-action-btn">
          <Link to="plan/add">
            <Button variant="fab" color="secondary" aria-label="add">
              <AddIcon />
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log('state changed: ', state);
  return { initialState: state };
};

export default connect(mapStateToProps)(Dashboard);
