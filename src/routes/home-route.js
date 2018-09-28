import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '../css/css-shared.js';

class HomeRoute extends PolymerElement {
  static get template() {
    return html`
      <style include="css-shared">
        :host {
          display: block;
          min-height: 100vh;
        }
      </style>

      <div class="home-top">
        <div>
          <h1><small>Welcome to </small>swarm. city</h1>
        </div>
        <div>
          <button tabindex="1" class="button">enter here <small>Boardwalk v3.0</small></button>
        </div>
      </div>

      <div class="home-middle">
        <ul>
          <li><a tabindex="2" href="https://thisis.swarm.city/" target="_blank">What is Swarm City?</a></li>
          <li><a tabindex="3" href="http://support.swarm.city/" target="_blank">Support</a></li>
          <li><a tabindex="4" href="http://support.swarm.city/" target="_blank">FAQ</a></li>
          <li><a tabindex="5" href="https://advisors.swarm.city/" target="_blank">Advisors</a></li>
        </ul>
      </div>

      <div class="home-bottom">
        <div>Find Swarm City on</div>
        <ul>
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
