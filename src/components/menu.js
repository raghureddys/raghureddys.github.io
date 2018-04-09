import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import ListSubheader from 'material-ui/List/ListSubheader';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import red from 'material-ui/colors/red';

import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from 'material-ui-icons/ExpandLess';
import ExpandMore from 'material-ui-icons/ExpandMore';
import Home from 'material-ui-icons/Home';
import PictureAsPdf from 'material-ui-icons/PictureAsPdf';
import IconButton from 'material-ui/IconButton';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    }
});

class Menu extends React.Component {
    state = { open: true };

    handleClick = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <List component="nav">
                    <ListItem button>
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <ListItemText inset primary="Raghu Reddy" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <PictureAsPdf />
                        </ListItemIcon>
                        <ListItemText inset primary="Resume" />
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <PictureAsPdf />
                        </ListItemIcon>
                        <ListItemText inset primary="Portfolio" />
                    </ListItem>
                    <ListItem button onClick={this.handleClick}>
                        <ListItemIcon>
                            <PictureAsPdf />
                        </ListItemIcon>
                        <ListItemText inset primary="Inbox" />
                        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>
                                    <PictureAsPdf />
                                </ListItemIcon>
                                <ListItemText inset primary="Starred" />
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </div>
        );
    }
}

Menu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);