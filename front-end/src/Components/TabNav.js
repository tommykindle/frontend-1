import React from 'react'
import { Tab, Menu, Icon } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below

const Nav = props => (
	<NavLink
		exact
		{...props}
		activeClassName="active"
	/>
);

const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>

const myProfileLabel = createLabel("my profile", "My Profile")
const createProfileLabel = createLabel("create profile", "Create Profile")


const panes = [
  { menuItem: <Menu.Item key='my profile' as={Nav} to={`/`} content={myProfileLabel} /> },
  { menuItem: <Menu.Item key='create profile' as={Nav} to={`/add`} content={createProfileLabel} /> },
]

const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />

export default TabNav