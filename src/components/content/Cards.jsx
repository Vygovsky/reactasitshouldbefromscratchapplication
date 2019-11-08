import React, {Component} from 'react';
import './Cards.css'
import Services from "../service/Service";
import ErrorMessage from "../Error/Error";
import Card from "./Card/Card";

export default class Cards extends Component {
    Service = new Services();
    state = {
        users: [],
        error: false
    };


    componentDidMount() {
        this.updateCards();
    }

    removeCardByUserId = id => {
        this.Service.removeCardsById(id)
            .then(() => this.removeCard(id))
            .catch(this.onError)
    };

    updateCards = () => {
        this.Service.getAllCards()
            .then(this.onCardLoader)
            .catch(this.onError)
    };

    onCardLoader = users => {
        this.setState({
            users,
            error: false
        });
        console.log(this.state.users);
    };

    removeCard = userId => {
        const updateUsers = this.state.users.filter(item => item.id !== userId);
        this.setState({
            users: updateUsers
        });
    };

    onError = () => {
        this.setState({
            error: true
        })
    };

    returnItems = (arrayUsers) => {
        return arrayUsers.map(item => {
            const {firstName, lastName, id} = item;

            return (
                <div key={id} className="post">
                    <Card
                        id={id}
                        firstName={firstName}
                        lastName={lastName}
                        onRemoveCard={this.removeCardByUserId}
                    />

                </div>

            )
        })
    };


    render() {
        const {users, error} = this.state;
        if (error) {
            return <ErrorMessage/>
        }
        const items = this.returnItems(users);

        return (
            <div className="cards">
                {items}
            </div>

        )
    };
}

