import React, {Component} from 'react';

export default class Form extends Component {
    state = {
        searchUser: '',
    };


    render(){
   /* const filterUser=this.props.users.filter(user=>{user.name.indexOf(this.state.searchUser)!==-1});*/
        return (
            <form>
                <input
                    className="form-control"
                    type="text"
                    value={this.state.searchUser}
                    onChange={event => this.setState  ({searchUser: event.target.value})}
                    aria-label="Search"/>
            </form>
        )
    }
};
