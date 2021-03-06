import React from 'react';
import ReactDOM from 'react-dom';

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
];

// Define these exported classes
export class OlderCoaster extends React.Component {
  // <div class="oldercoaster">
  //   <p>Two grannies having the time of their life!</p>
  //   <p>Passengers:</p>
  //   <ul>
  //     <li>Agnes</li>
  //     <li>Muriel</li>
  //   </ul>
  // </div>
  render() {
    return React.createElement('div', { className: 'oldercoaster' },
      React.createElement('p', {}, 'Two grannies having the time of their life!'),
      React.createElement('p', {}, 'Passengers:'),
      React.createElement('ul', {},
        [
          React.createElement('li', {}, 'Agnes'),
          React.createElement('li', {}, 'Muriel')
        ]
      ),
    )
  }
};

export class InFrontOfYou extends React.Component {
  // <div>
  //   <p>You shouldn't look too far.</p>
  //   <p>Sometimes, the solution is right in front of you.</p>
  // </div>
  render() {
    return React.createElement('div', {},
      React.createElement('p', {}, "You shouldn't look too far."),
      React.createElement('p', {}, 'Sometimes, the solution is right in front of you.')
    )
  }
};

var ButcherShopListItems = BUTCHER_PRODUCTS.map(function(item) { return React.createElement('li', {}, item) });

export class ButcherShop extends React.Component {
//   <div class="butcher-shop">
//   <p>Hello! We have the following products for sale today:</p>
//   <ul>
//     <li>Tenderloin</li>
//     <li>Short ribs</li>
//     <li>Beef shin</li>
//     <li>Ribeye</li>
//   </ul>
// </div>
  render() {
    return React.createElement('div', { className: 'butcher-shop' },
      React.createElement('p',  {}, 'Hello! We have the following products for sale today:'),
      React.createElement('ul', {}, ButcherShopListItems),
    )
  }
};

ReactDOM.render(
  React.createElement('div', {}, [
    React.createElement(OlderCoaster),
    React.createElement(InFrontOfYou),
    React.createElement(ButcherShop)
  ]),
  document.getElementById('root')
);
