/**
 * WordPress dependencies
 */
const { test, expect } = require( '@wordpress/e2e-test-utils-playwright' );

test.describe( 'ContrastChecker', () => {
	test.beforeEach( async ( { admin } ) => {
		await admin.createNewPost();
	} );

	test( 'shows warning when text and background colors have low contrast', async ( {
		editor,
		page,
	} ) => {
		await editor.insertBlock( {
			name: 'core/paragraph',
			attributes: { content: 'Contrast Checker Test' },
		} );

		await editor.openDocumentSettingsSidebar();

		await page.click( 'role=button[name="Color settings"]' );

		await page.click( 'role=button[name="Text color"]' );
		await page.click( 'button[aria-label="Color: Black"]' );

		await page.click( 'role=button[name="Background color"]' );
		await page.click( 'button[aria-label="Color: Black"]' );

		const contrastWarning = page.locator(
			'.block-editor-contrast-checker'
		);
		await expect( contrastWarning ).toBeVisible();

		const warningText = await contrastWarning.textContent();
		expect( warningText ).toContain(
			'This color combination may be hard for people to read'
		);
	} );
} );
