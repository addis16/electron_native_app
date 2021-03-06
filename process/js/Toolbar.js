var React = require('react');

var Toolbar = React.createClass({

  createAppointments: function() {
    this.props.handleToggle();
  },

  toggleAbout: function() {
    this.props.handleAbout();
  },

  render: function() {
    return(
      <div className="toolbar">
        <div className="toolbar-item" onClick={this.createAppointments}>
          <span className="toobar-item-button glyphicon glyphicon-plus-sign"></span>
          <span className="toolbar-item-text">Add Appointment</span>
        </div>
        <div className="toolbar-item" onClick={this.toggleAbout}>
          <span className="toobar-item-button glyphicon glyphicon-question-sign"></span>
          <span className="toolbar-item-text">About this app</span>
        </div>
      </div>
    )
  }
});

module.exports = Toolbar;
