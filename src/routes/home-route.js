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
        .section-sc-yellow1 {
          height: calc(80vh - 70px);
        }
        .section-sc-yellow1 > div {
          flex: 1;
          align-self: flex-end;
          text-align: center; 
          padding: 0 0 8vh 0;       
        }
        .section-sc-yellow1 > div:first-child {
          padding-top: 115px;
        }
        .section-sc-yellow1 > div:nth-child(2) {
          padding: 44px 0 52px;
        }
        .logo {
          background-image: url(../images/SwarmCity-Sprite-doublesize.png);
          background-repeat: no-repeat;
          background-size: 324px 324px;
          width: 108px;
          height: 50px;
          background-position: -108px -108px;
          margin: 0 auto 20px auto; 
        }
        button {
          font-size: 18px;
          padding: 24px 32px 23px;
          min-width: 200px;
          max-width: 300px;
        }
        button small {
          font-size: 10px;
        }
        ul.horizontal.link-blue li {
          padding-bottom: 16px;
        }
        ul.horizontal.link-black li {
          padding-bottom: 8px;
        }
        ul.horizontal.link-black h5 {
          margin-top: 0;
          margin-bottom: 12px;
        }
        .display-large {
          display: none;
        }
        @media (min-width: 600px) {
          .section-sc-yellow1 {
            flex: 1;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap ;
          }
          .section-sc-yellow1 > div h1 {
            text-align: left;
            margin: 30px 0 0;
          }
          .section-sc-yellow1 > div:first-child {
            padding-left: calc(10vw - 12px);
            padding-bottom: 18vh;
          }
          .section-sc-yellow1 > div:nth-child(2) {
            text-align: right;
            padding-right: calc(10vw - 12px);
            padding-bottom: 16vh;
          }
          .logo {
            margin: 0;
            background-position: -109px -107px;
          }
          .display-large {
            display: block;
          }
          button {
            width: 100%;
            max-width: 220px;
            min-width: 0;
            padding: 16px 40px;
          }
        }
      </style>
      <div class="container section-language link-black"><a href="#">EN</a></div>
      <div class="container section-sc-yellow1">
          <div class="col-2">
            <div class="logo"></div>
            <h1><small>Welcome to </small>swarm.<br class="display-large" />city</h1>
          </div>
          <div class="col-2">
            <button tabindex="1" class="button">enter here <small>Boardwalk v3.0</small></button>
          </div>
      </div>

      <div class="container footer section-sc-white1">
        <ul class="horizontal link-blue bold-1">
          <li><a tabindex="2" href="https://thisis.swarm.city/" target="_blank">What is Swarm City?</a></li>
          <li><a tabindex="3" href="http://support.swarm.city/" target="_blank">Support</a></li>
          <li><a tabindex="4" href="http://support.swarm.city/" target="_blank">FAQ</a></li>
          <li><a tabindex="5" href="https://advisors.swarm.city/" target="_blank">Advisors</a></li>
        </ul>
      </div>

      <div class="container footer section-sc-grey6">
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
