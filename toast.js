export default (message, state) => {
  clearTimeout(toast.Timeout);
  toast.textContent = message;
  toast.className = "toast toast--visible";

  if (state) {
    toast.classList.add(`toast--${state}`);
  }

  toast.hideTimeout = setTimeout(() => {
    toast.classList.remove("toast--visible");
  }, 3000);
};

const hide = () => {
  toast.classList.remove("toast--visible");
};

if (document.head.querySelector("style") == null)
  document.head.append(document.createElement("style"));

document.head.querySelector("style").innerHTML += `
.toast {
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  margin: auto;

  max-width: 350px;
  padding: 5px;
  color: #ffffff;ss
  font-family: sans-serif;
  font-size: 0.95em;
  text-align: center;
  background: var(--gray);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2),
  rgba(0, 0, 0, 0.15) 0px 1px 3px 1px;
  border-radius: 2px;
  /* border: 0.5px solid #DCDCDC;*/

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

const toast = document.createElement("span");
toast.className = "toast";
document.body.appendChild(toast);
