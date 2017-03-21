import React from 'react';

// export default class WeatherMessage extends React.Component {
//   render() {
//     const {location, temp} = this.props;
//
//     return (
//       <div>
//         <h3>It's {temp} in {location}.</h3>
//       </div>
//     );
//   }
// };

var WeatherMessage = ({location, temp}) => {
  return (
    <div>
      <h3>It's {temp} in {location}.</h3>
    </div>
  )
};

module.exports = WeatherMessage;
