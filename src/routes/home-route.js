import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/css-shared.js';

class HomeRoute extends PolymerElement {
  static get template() {
    return html`
      <style include="css-shared">
        :host {
          display: flex;
          min-height: 100vh;
          flex-direction: column;
        }
        .home-top {
          flex: 1;
          background-color: var(--sc-yellow);
          display: flex;
          flex-direction: row;
          flex-wrap: wrap ;
        }
        .home-top div {
          flex: 1;
          align-self: flex-end;
          text-align: center; 
          padding: 0 0 18vh 0;
        }
        .home-middle {
          height:95px;
          line-height: 6;
          font-size: 12px;
          background-color: var(--sc-white1)
        }
        .home-bottom {
          height:100px;
          line-height: 1;
          font-size: 12px;
          background-color: var(--sc-grey6);
        }
        button {
          background-color: var(--sc-yellow2);
        }
        h5 {
          font-size: 12px;
        }
      </style>

      <div class="container home-top">
          <div>
            <h1><small>Welcome to </small>swarm. city</h1>
          </div>
          <div>
            <button tabindex="1" class="button">enter here <small>Boardwalk v3.0</small></button>
          </div>
      </div>

      <div class="container home-middle">
        <ul class="horizontal link-blue bold-1">
          <li><a tabindex="2" href="https://thisis.swarm.city/" target="_blank">What is Swarm City?</a></li>
          <li><a tabindex="3" href="http://support.swarm.city/" target="_blank">Support</a></li>
          <li><a tabindex="4" href="http://support.swarm.city/" target="_blank">FAQ</a></li>
          <li><a tabindex="5" href="https://advisors.swarm.city/" target="_blank">Advisors</a></li>
        </ul>
      </div>

      <div class="container home-bottom">
        <ul class="horizontal link-black light-1">
          <h5>Find Swarm City on</h5>
          <li><a tabindex="6" href="https://riot.im/app/#/group/+swarmcity:matrix.org" target="_blank">Riot</a></li>
          <li><a tabindex="7" href="https://slackinvite.swarm.city" target="_blank">Slack</a></li>
          <li><a tabindex="8" href="https://medium.com/swarm-city-times" target="_blank">Medium</a></li>
          <li><a tabindex="9" href="https://github.com/swarmcity" target="_blank">Github</a></li>
          <li><a tabindex="10" href="https://twitter.com/swarmcitydapp" target="_blank">Twitter</a></li>
          <li><a tabindex="11" href="https://www.facebook.com/groups/SwarmCity/" target="_blank">Facebook</a></li>
          <li><a tabindex="12" href="https://www.youtube.com/channel/UCsHBWn_ytZ3xdMbTyYe5Ifg" target="_blank">Youtube</a></li>
          <li><a tabindex="13" href="https://www.reddit.com/r/SwarmCity/" target="_blank">Reddit</a></li>
        </ul>
      </div>
    `;
  }
} window.customElements.define('home-route', HomeRoute);
