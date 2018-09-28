import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="css-shared">
  <template>
    <style>
      // Add your Shared styles in here
      
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
