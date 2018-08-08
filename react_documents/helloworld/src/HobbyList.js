import React, {Component} from 'react'

class HobbyList extends Component{
    render (){
        const hobbies = ["Sleeping", "Eating", "Cuddling"];
        const style = {fontSize: "1.5em"};
        console.log(this.props.text);
        return (
            <ul>
                {
                    hobbies.map((h,i) => {
                        return <li key = {i} style={style}> {h}</li>
                })
                }
            </ul>
        )
    }
}


export default HobbyList