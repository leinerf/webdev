// //Uncontrolled Components
// <input type="text" />
// //React is not aware of wat the user is typing

// //<input type="text" value={this.state.inputText}/> cant change

// //controlled component with update
// <input
//     type="text"
//     name="inputText"
//     value={this.state.inputText}
//     onChange={(e) => {
//         this.setState({inputText: e.target.value});
//     }}
// />
// //React is now in control of the state via this.state.inputText
// //and the state can change via onChange

// <form onSubmit={(e) => {
//     e.preventDefault();
//     const data = [
//         ...this.state.data, this.state.inputText
//     ];
//     this.setState({data, inputText: ""});
// }}>
// <input
//     type="text"
//     name="inputText"
//     value={this.state.inputText}
//     onChange={(e) => {
//         this.setState({inputText: e.target.value});
//     }}
// />
// </form>