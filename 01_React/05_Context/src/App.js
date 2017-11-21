import React from 'react';
import PropTypes from 'prop-types';

const MESSAGES = [
  'Fusce ac felis sit amet',
  'Vivamus aliquet elit ac nisl',
  'In hac habitasse platea dictumst',
  'Vestibulum ante ipsum primis in',
  'Sed cursus turpis vitae tortor',
  'Aenean commodo ligula eget dolor'
];

class Button extends React.Component {
  static contextTypes = {
      color: PropTypes.string
  }

  render() {
      return (
          <button style={{ backgroundColor: this.context.color }}>
              {this.props.children}
          </button>
      );
  }
}

class Message extends React.Component {
  render() {
      return (
          <div style={{ border: '1px solid grey', margin: 10, padding: 10 }}>
              <p>{this.props.text}</p>
              <Button>Delete</Button>
          </div>
      );
  }
}

class MessageList extends React.Component {
  render() {
      return (
          <div>
              {
                  this.props.messages.map(message =>
                      <Message key={message} text={message} />
                  )
              }
          </div>
      );
  }
}

class App extends React.Component {
  static childContextTypes = {
      color: PropTypes.string
  }

  getChildContext() {
      return {
          color: 'lightblue'
      };
  }

  render() {
      return <MessageList messages={MESSAGES} />;
  }
}

export default App;
