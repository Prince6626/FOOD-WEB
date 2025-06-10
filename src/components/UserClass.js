import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
            },
        };
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Prince6626");
        const json = await data.json();

        this.setState ({
            userInfo: json,
        });
        console.log(json);
    }

    render(){
        const {name ,location ,avatar_url} = this.state.userInfo;

        return(
            <div className="user-card">
                <img src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @_ps.6__</h4>
            </div>
        )
    }
}

export default UserClass;