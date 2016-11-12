import * as React from 'react';
import { Button, AppBar, Checkbox, IconButton, Navigation, Link as Anchor, Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import { Link } from 'react-router';
import actions from '../../../actions';

interface Props { };


let createHandlers = (dispatch) => {
    let onClick = (node, data){
        console.log(actions);
        dispatch(actions.nodeClicked(data));
    }

    return { onClick };
}


class DefaultLayout extends React.Component<Props, any> {
    constructor(props){
        super(props);
        this.handlers = createHandlers(this.props.dispatch);
    }

    state = {
        drawerActive: false,
        drawerPinned: false,
        sidebarPinned: false
    };

    toggleDrawerActive = () => {
        this.setState({ drawerActive: !this.state.drawerActive });
    };

    render() {
        console.log(this.handlers);
        return (
            <Layout>
                <NavDrawer active={this.state.drawerActive}
                    pinned={this.state.drawerPinned} permanentAt='xxxl'
                    onOverlayClick={ this.toggleDrawerActive }>
                    
                    <Navigation type="vertical">
                        <Link data-react-toolbox="link" to="/faq">FAQ</Link>
                        <Link data-react-toolbox="link" to="/collapsible">Collapsible</Link>
                    </Navigation>
                </NavDrawer>

                 <Panel>
                    <AppBar><IconButton icon='menu' inverse={ true } onClick={ this.toggleDrawerActive }/></AppBar>
                    <div style={{ flex: 1, overflowY: 'auto', padding: '1.8rem' }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    { 
                                        React.Children.map( this.props.children, child => {
                                            return React.cloneElement(child, this.props)
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </Panel>
                <Button>Test</Button>
                <Sidebar pinned={ this.state.sidebarPinned } width={ 5 }>
                    <div><IconButton icon='close' onClick={ this.toggleSidebar }/></div>
                    <div style={{ flex: 1 }}>
                        <p>Supplemental content goes here.</p>
                    </div>
                </Sidebar>
                
            </Layout>
        );
    }
}

export default DefaultLayout;
