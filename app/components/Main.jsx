import React from 'react';
import Nav from 'Nav';

// export default class Main extends React.Component {
//   render() {
//     return (
//       <div>
//         <Nav/>
//         <h2>Main Component</h2>
//         {this.props.children}
//       </div>
//     );
//   }
// };

var Main = (props) => {
  return (
    <div>
      <Nav/>
      <h2>Main Component</h2>
      {props.children}
    </div>
  );
}

module.exports = Main;
