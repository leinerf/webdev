class ClickExample extends Component {
    constructor(props){
        super(props)
        this.state = {name: 'tim'};
        //makes it so that this handleClick function is called
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e){
        this.setState((prevState, props) => {
            {name: prevState.name.toUpperCase()}
        });
    }

    render(){
        return (
            <div>
                <p> {this.state.name}</p>
                <button type="button"
                    onClick={this.handleClick}>
                    UPPERCASE
                </button>
            </div>
        );
    }

}
