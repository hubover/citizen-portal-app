import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'
import M from 'materialize-css/dist/js/materialize.min.js'

class Navbar extends Component {
	componentDidMount() {
		var elem = document.querySelector(".sidenav");
		var instance = M.Sidenav.init(elem, {
			edge: "left",
			inDuration: 250
		});
	}

	render() {
		const { auth, profile } = this.props;
		// console.log(this.props);
		const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
		const addButton = <li><Link to='/selectdepartment'><div className="waves-effect waves-light btn cp-button">Add A Complaint</div></Link></li>;
		const buttonsNav = auth.uid ? addButton : '';

		return (
			<div>
				<nav className="nav-wrapper grey darken-3">
					<div className="container cpContent">
						<ul id="nav-mobile" className="left">
							<a href="#" data-target="slide-out" style={{ padding: 0, margin: 0 }} className="sidenav-trigger full hide-on-large-only">
								<i className="material-icons">menu</i>
							</a>
						</ul>
						<ul className="right">
							{buttonsNav}
						</ul>
					</div>
				</nav>
				<ul id="slide-out" className="sidenav sidenav-fixed cp-menu">
					<Link to='/'><img src="/images/logo.png" alt="Citizen Portal" className="cp-logo" /></Link>
					<hr className="menuLine" />
					{links}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	// console.log();
	return {
		auth: state.firebase.auth,
		profile: state.firebase.profile
	}
}

export default connect(mapStateToProps)(Navbar)