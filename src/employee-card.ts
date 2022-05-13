const template = document.createElement("template");
template.innerHTML = `
<style>
<style>
  .employee-card {
    font-family: sans-serif;
    background: #f4f6f7;
    width: 250px;
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 10px;
  }

</style>
<div class="employee-card">
  <img/>
  <div>
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
  #name: string = "";
  #avatar: string = "";

  attributeChangedCallback() {
    this.readAttributes();
  }

  readAttributes() {
    this.#name = this.getAttribute("name") ?? "Undefined name";
    this.#avatar = this.getAttribute("avatar") ?? "assets/avatar.png";
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
    this.readAttributes();
  }

  /**
   * Runs when webcomponent is attached to dom
   */
  connectedCallback() {
    const h3 = this.shadowRoot?.querySelector("h3");
    if (h3 != null) {
      h3.innerText = this.#name;
    }
    const img = this.shadowRoot?.querySelector("img");
    if (img) {
      img.src = this.#avatar;
    }
  }
}
window.customElements.define("employee-card", EmployeeCard);
