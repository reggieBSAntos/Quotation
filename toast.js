"use strict";

const Toast = {
  init() {
    const style = document.head.querySelector("style");

    style.innerHTML += `.toast {
        position: fixed;
        top: 0px;
        left: 0;
        right: 0;
        margin: auto;

        max-width: 350px;
        padding: 8px 0;
        color: #d9d9d9;
        font-family: sans-serif;
        font-size: 0.95em;
        text-align: center;
        border: 0.5px solid #DCDCDC;
        border-radius: 3px;
        background: #F0F0F0;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        rgba(0, 0, 0, 0.15) 0px 1px 3px 1px;
      
        visibility: hidden;
        opacity: 0;
        transition: opacity 0.2s, top 0.2s, visibility 0.2s;
        z-index: 106;
      }
      
      /* BOTTOM IS RELATIVE TO THE HEIGHT OF THE FOOTER */
      .toast--visible {
        top: 2%;
        visibility: visible;
        opacity: 1;
      }
      
      .toast--success {
        color: #2e7d32;
      }
      
      .toast--error {
        color:#d32f2f;
      }
    `;

    this.el = document.createElement("span");
    this.el.className = "toast";
    document.body.appendChild(this.el);
  },

  show(message, state) {
    clearTimeout(this.Timeout);
    this.el.textContent = message;
    this.el.className = "toast toast--visible";

    if (state) {
      this.el.classList.add(`toast--${state}`);
    }

    this.hideTimeout = setTimeout(() => {
      this.el.classList.remove("toast--visible");
    }, 1500);
  },

  hide() {
    this.el.classList.remove("toast--visible");
  },
};
