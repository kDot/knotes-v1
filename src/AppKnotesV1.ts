import { LitElement, html, css } from 'lit';
import '@material/mwc-button'

const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;

export class AppKnotesV1 extends LitElement {

  static styles = css`
  `;

  render() {
    return html`
      <main>
        <div class="logo"><img alt="open-wc logo" src=${logo} /></div>
        <h1>${this.title}</h1>

        <p>Edit <code>src/AppKnotesV1.ts</code> and save to reload.</p>
        <a
          class="app-link"
          href="https://open-wc.org/guides/developing-components/code-examples"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code examples
        </a>
      </main>
      <mwc-button class=”mdc-button”>Button</mwc-button>
      <button class="mdc-button mdc-button--raised">
        <span class="mdc-button__ripple"></span>
        <span class="mdc-button__focus-ring"></span>
        <span class="mdc-button__label">Contained Button</span>
      </button>
      <p class="app-footer">
        Made with love by
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/open-wc"
          >open-wc</a
        >.
      </p>
    `;
  }
}
