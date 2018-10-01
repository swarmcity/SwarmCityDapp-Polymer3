import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="css-shared">
  <template>
    <style>
      *: {
        margin: 0;
      }

      *:focus {
        outline: none !important;
      }

      :host {
          --sc-white1: rgba(250, 250, 250, 1);
          --sc-yellow2: rgba(243, 220, 134, 1);
          --sc-yellow: rgba(239, 217, 111, 1);
          --sc-blue1: rgba(36, 177, 255, 1);
          --sc-green1: rgba(122, 214, 156, 1);
          --sc-green2: rgba(35, 180, 96, 1);
          --sc-red1: rgba(245, 88, 88, 1);
          --sc-red2: rgba(208, 2, 27, 1);
          --sc-grey1: rgba(242, 242, 242, 1);
          --sc-grey2: rgba(191, 191, 191, 1);
          --sc-grey3: rgba(102, 102, 102, 1);
          --sc-grey5: rgba(172, 172, 172, 1);
          --sc-grey6: rgba(230, 230, 230, 1);
          --sc-black1: rgba(0, 0, 0, 1);
          --sc-black2: rgba(0, 0, 0, 0.5);
          --sc-black3: rgba(51, 51, 51, 1);
      }

      button {
        font-size: 22px;
        font-weight: 800;
        width: 300px;
        border: 0;
        padding: 30px 42px;
        border-redius: 2px;
        box-shadow: var(--sc-black2) 0px 1px 2px -1px;
        cursor: pointer;
      }

      ul {
        list-style: none;
      }

      ul.horizontal {
        margin: 0;
        padding-left: calc(10vw - 12px);
        padding-top: 33px;
        padding-bottom: 33px;
      }

      ul.horizontal li {
        display: lit-item;
        padding-right: 20px;
      }

      ul.horizontal li:last-child {
        padding-right: 0;
      }

      .container {
        padding:12px;
      }

      .link-blue a {
        color: var(--sc-blue1);
        text-decoration: none;
        border-bottom: 1px dotted var(--sc-blue1);
        line-height: 1.9;
      }

      .link-black a {
        color: var(--sc-black3);
        text-decoration: none;
        border-bottom: 1px dotted var(--sc-black2);
        line-height: 1.8;
      }

      .bold-1 a, p {
        font-weight: 800;
      }

      .light-1 a, p {
        font-weight: 300;
      }

      h1 {
        font-size: 35px;
        margin: 20px 0;
        font-weight: 800;
        line-height: 1.08;
      }

      small {
        font-size: 0.63em;
        font-weight: 200;
        min-width: 100%;
        display: block;
      }

      .col-2 {
        width: 100%;
      }


      @media (min-width: 600px) {
        ul.horizontal li {
          display: inline;
        }
        h1 {
          font-size:78px;
          line-height: 68px;
        }
        .col-2 {
          width: 50%;
        }
        small {
          font-size: 0.43em;
          line-height: 26px;
        }

      }

      @media (min-width: 1281px) {
        h1 {
          font-size: 98px;
          line-height: 82px;
        }
      }

    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
