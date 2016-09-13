import React from 'react';

require('./HelloWorld.scss');

class HelloWorld extends React.Component {
  render() {
    return (
      <a className="hello-world" href={this.props.url || "#"}>Hello, world</a>
    );
  }
}

export default HelloWorld;