class HistorySaveEntitiesCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.entities = [];
    this.render();
  }

  setConfig(config) {
    this.config = config;
    this.entities = this.config.entities || [];
    this.render();
  }

  render() {
    const template = `
      <ha-card>
        <div class="card-header">
          <div class="name">Zapisane encje</div>
        </div>
        <div class="card-content">
          ${this.entities.map(entity => `<div class="entity">${entity}</div>`).join("")}
        </div>
      </ha-card>
    `;
    this.shadowRoot.innerHTML = template;
  }

  getCardSize() {
    return 1;
  }
}

customElements.define('history-save-entities-card', HistorySaveEntitiesCard);
