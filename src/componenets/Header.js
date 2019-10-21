import React, { Component } from 'react';

import Particles from 'react-particles-js';

class Header extends Component {
  render() {
    return (
      <div id="header">
        <Particles
          params={{
            particles: {
              number: {
                value: 150,
                density: {
                  enable: true,
                  value_area: 200
                }
              },
              line_linked: {
                enable: false
              },
              move: {
                random: true,
                direction: 'bottom',
                speed: 0.05
              },
              size: {
                value: 2
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05
                }
              }
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: 'push'
                }
              },
              modes: {
                push: {
                  particles_nb: 1
                }
              }
            },
            retina_detect: true
          }}
        />
        <h1>Astronomy Picture of the Day</h1>
      </div>
    );
  }
}

export default Header;
