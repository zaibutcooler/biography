import { expect, test } from '@playwright/test';

test('index page has expected', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Page' })).toBeVisible();
});
