/**
 * WordPress dependencies
 */
const { test, expect } = require( '@wordpress/e2e-test-utils-playwright' );

test.describe( 'ContrastChecker', () => {
	test.beforeEach( async ( { admin } ) => {
		await admin.createNewPost();
	} );

	test( 'should show warning when text and background colors have low contrast', async ( {
		editor,
		page,
	} ) => {
		await editor.openDocumentSettingsSidebar();
		await editor.insertBlock( {
			name: 'core/paragraph',
			attributes: { content: 'Contrast Checker Test' },
		} );

		await page.getByRole( 'button', { name: 'Text', exact: true } ).click();
		await page.getByLabel( 'Black' ).click();

		await page.getByRole( 'button', { name: 'Background' } ).click();
		await page.getByLabel( 'Black' ).click();

		const lowContrastWarning = page.locator(
			'.block-editor-contrast-checker'
		);
		await expect( lowContrastWarning ).toBeVisible();
		await expect( lowContrastWarning ).toContainText(
			'This color combination may be hard for people to read'
		);
	} );
} );
