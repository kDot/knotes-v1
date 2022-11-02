import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import { AppKnotesV1 } from '../src/AppKnotesV1.js';
import '../src/app-knotes-v1.js';

describe('AppKnotesV1', () => {
  let element: AppKnotesV1;
  beforeEach(async () => {
    element = await fixture(html`<app-knotes-v1></app-knotes-v1>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
