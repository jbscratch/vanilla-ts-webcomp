import lodash from 'https://cdn.skypack.dev/lodash';

const template = document.createElement("template");
template.innerHTML = `

<style>

  :host {

    --max-width: 400px;

  }

  .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;

    max-width: var(--max-width);
    font-family: sans-serif;
    background: #f4f6f7;
  }
  
  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  img {
    width: 100%;
  }
  
  /* Add some padding inside the card container */
  .body {
    padding: 2px 16px;
  }

</style>
<div class="card">
  <img/>
  <div class="body">
    <h3></h3>
    <div class="details">
      <p><slot name="id"/></p>
      <p><slot name="job title"/></p>
      <p><slot name="email"/></p>
      <p><slot name="phone"/></p>
    </div>
  </div>
</div>`;

class EmployeeCard extends HTMLElement {
  private name: string = "";
  private avatar: string = "";

  attributeChangedCallback() {
    this.readAttributes();
  }

  readAttributes() {
    this.name = this.getAttribute("name") ?? "Undefined name";
    this.avatar = this.getAttribute("avatar") ?? "assets/avatar.png";
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
    this.readAttributes();

    console.log(`Found lodash on url, Version: `, lodash.VERSION);
  }

  /**
   * Runs when webcomponent is attached to dom
   */
  connectedCallback() {
    const h3 = this.shadowRoot?.querySelector("h3");
    if (h3 != null) {
      h3.innerText = this.name;
    }
    const img = this.shadowRoot?.querySelector("img");
    if (img) {
      img.src = this.avatar;
    }
  }
}

window.customElements.define("employee-card", EmployeeCard);
