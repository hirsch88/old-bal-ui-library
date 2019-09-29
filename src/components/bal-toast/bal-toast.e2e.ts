import { newE2EPage } from '@stencil/core/testing';

describe('bal-toast', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bal-toast></bal-toast>');

    const element = await page.find('bal-toast');
    expect(element).toHaveClass('hydrated');
  });
});
