var React = require('react');

var HeaderNav = React.createClass({

  handleSearch: function(event) {
    this.props.onSearch(event.target.value);
  },

  handleSort: function(event) {
    this.props.onReOrder(event.target.id, this.props.orderDir);
  },

  handleOrder: function(event) {
    this.props.onReOrder(this.props.orderBy, event.target.id);
  },

  render: function() {
    return(
      <nav className="navigation navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header"><a className="navbar-brand" href="#">Electron App</a></div>
          <div className="navbar-form navbar-right search-appointments">
            <div className="input-group">
              <input id="SearchApts" placeholder="Search" autoFocus type="text" className="form-control" aria-label="Search Appointments" onChange={ this.handleSearch }/>
              <div className="input-group-btn">
                <button type="button" className="btn btn-info dropdown-toggle"data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span className="caret"></span>
                </button>
                <ul className="dropdown-menu dropdown-menu-right">
                  <li><a href="#" id="petName" onClick={ this.handleSort }>Pet Name {(this.props.orderBy === 'petName') ? <span className="glyphicon glyphicon-ok"></span> : null} </a></li>
                  <li><a href="#" id="aptDate" onClick={ this.handleSort }>Date {(this.props.orderBy === 'aptDate') ? <span className="glyphicon glyphicon-ok"></span> : null} </a></li>
                  <li><a href="#" id="ownerName" onClick={ this.handleSort }>Owner {(this.props.orderBy === 'ownerName') ? <span className="glyphicon glyphicon-ok"></span> : null} </a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#" id="asc" onClick={ this.handleOrder }>Asc {(this.props.orderDir === 'asc') ? <span className="glyphicon glyphicon-ok"></span> : null} </a></li>
                  <li><a href="#" id="desc" onClick={ this.handleOrder }>Desc {(this.props.orderDir === 'desc') ? <span className="glyphicon glyphicon-ok"></span> : null} </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
});

module.exports = HeaderNav;
