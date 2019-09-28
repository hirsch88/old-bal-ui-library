import { newE2EPage } from '@stencil/core/testing';

describe('bal-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bal-button></bal-button>');

    const element = await page.find('bal-button');
    expect(element).toHaveClass('hydrated');
  });
});
