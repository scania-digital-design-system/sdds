import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Content from '../Content/Content'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import data from './../../../package.json';

import './Header.scss';

const Subnav = (props) => {
  if(props.item && props.item.children) {
    return  (
      <c-navigation slot="sub" active target={'/' + data.name + props.item.url} expand="true">
      { props.item.children.map((child, key) => 
        <NavLink 
          activeClassName="active"
          to={props.item.url + child.url}
          key={key} 
          slot= {child.type + '-items'}
          >{child.name}
        </NavLink> ) }
      </c-navigation>
    )
    
  } else {
    return '';
  }
}

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onLoadActive = {};
    this.state = {
      active: {},
      dropdownOpen: false
    };
  }

  setActive(item) {
    this.setState({ active: item });
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  matchUrl = (match, location) => {
    const activeSegment = location.pathname.match(/^\/+\w*/gm);
    if(match) {
      this.onLoadActive = (this.props.items.children || []).find(item => {
        return item.url === activeSegment[0];
      })
    }
    return match;
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.active !== this.onLoadActive) this.setActive(this.onLoadActive)
  }

  render() {
    // console.log(this.props.items)
    return [
      <c-header site-name="App" key="1">
      </c-header>,

      <c-navigation key="2">
        {(this.props.items.children || []).map((item, key) =>
          <NavLink
            activeClassName="active"
            to={item.url}
            key={key}
            className={item.children ? 'parent' : ''}
            slot={item.type + '-items'}
            onClick={() => this.setActive(item)}
            isActive={this.matchUrl}
            {...item.attrs}
            >{item.name}
          </NavLink>
        )}

        <UncontrolledDropdown setActiveFromChild slot="secondary-items">
          <DropdownToggle tag="a" className="nav-item" caret>User</DropdownToggle>

          <DropdownMenu right={true}>
            <DropdownItem tag={NavLink} to="/user/profile">Profile</DropdownItem>
            <DropdownItem tag={NavLink} to="/user/settings">Settings</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>

        <Subnav item={ this.state.active } ctrl={Content}/>
      </c-navigation>
    ];
  }
}

export default Header;
