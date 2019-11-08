import React from 'react';
import Form from "./Form";

export default class SearchPanel extends React.Component {
    state = {
        searchUsers: []
    };
    componentWillMount = () => {
        this.setState({
            users: this.props.content,
            searchUsers: this.props.content
        })
    };

    searchUser = searchUser => {
        this.setState(event=> ({
                searchUsers: [...event.searchUsers, searchUser]
            }
        ));
    };


    render() {
        return (
            <div>

                  {/*  <form>
                        <input type="text" placeholder="Search" onChange={this.filterList}/>
                    </form>*/}
                    <Form onSubmit={this.searchUser} />

                {/*  <div>{
                    this.state.items.map(function (item) {
                        return <div key={item}>{item}</div>
                    })
                }
                </div>*/}

            </div>
        );
    }
};
