import React from "react";

class User extends React.Component {
    constructor(props) {
        super()
        this.state={
            data: null,
            id: "",
            value: ""
        }
    }

    componentDidMount() {
        fetch("https://randomuser.me/api/").then((res)=> res.json()).then((data)=> this.setState({data : data.results[0]}))
    }
    handleHover = ({target})=> {
        if(target.tagName === "I") {
            this.setState({
                id: target.dataset.id
            })
        }
        switch (target.dataset.id) {
            case "name":
                let name = this.state.data.name.first;
                this.setState({
                    value: name
                })
            break;
            case "email":
                let email = this.state.data.email;
                this.setState({
                    value: email
                })
            break;
            case "dob":
                let dob = this.state.data.dob.age;
                this.setState({
                    value: dob
                })
            break;
            case "location":
                let location = this.state.data.location.street.name;
                this.setState({
                    value: location
                })
            break;
            case "phone":
                let phone = this.state.data.phone;
                this.setState({
                    value: phone
                })
            break;
            case "lock":
                let lock = this.state.data.login.password;
                this.setState({
                    value: lock
                })
            break;
            default:
                break;
        }
    }

    clickHandler = ()=> {
        this.componentDidMount();
    }
    
    render() {
        console.log(this.state.value)
        if(!this.state.data) {
            return <h3>Looding.....</h3>
        }
        return (
            <section className ="random-user">
                <div className="container">
                    <div className="card">
                        <img src={this.state.data.picture.large} alt="avtar"/>
                        <p>{`My ${this.state.id} is`}</p>
                        <h2>{this.state.value}</h2>
                        <div onMouseEnter={this.handleHover} className="icons">
                            <i data-id="name" className="fas fa-user-alt"></i>
                            <i data-id="email" className="fas fa-envelope-open"></i>
                            <i data-id="dob" className="fas fa-calendar-times"></i>
                            <i data-id="location" className="fas fa-map"></i>
                            <i data-id="phone" className="fas fa-phone"></i>
                            <i data-id="lock" className="fas fa-lock"></i>
                        </div>

                        <button onClick={this.clickHandler}>Random User</button>
                    </div>
                </div>
            </section>
        )
    }
}

export default User;