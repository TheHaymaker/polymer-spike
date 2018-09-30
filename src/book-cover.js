import { PolymerElement } from "@polymer/polymer/polymer-element.js";
import { html } from "@polymer/polymer/lib/utils/html-tag.js";

import "@polymer/iron-image/iron-image.js";

class BookCover extends PolymerElement {
  static get template() {
    return html`
    <iron-image style="width:164px; height:220px; background-color: lightgray;"
  sizing="cover" preload fade src="https://d1re4mvb3lawey.cloudfront.net/pg1017/cover.jpg"></iron-image>`;
  }
}

customElements.define("book-cover", BookCover);
