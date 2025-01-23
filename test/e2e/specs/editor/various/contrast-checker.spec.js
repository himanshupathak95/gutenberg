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
		await editor.insertBlock( {
			name: 'core/paragraph',
			attributes: { content: 'Contrast Checker Test' },
		} );

		const paragraph = editor.canvas.getByRole( 'document', {
			name: 'Block: Paragraph',
		} );
		await paragraph.click();

		await page.click(
			'button.block-editor-panel-color-gradient-settings__dropdown:has-text("Text")'
		);
		await page.click(
			'button.components-circular-option-picker__option[aria-label="Black"]'
		);

		await page.click(
			'button.block-editor-panel-color-gradient-settings__dropdown:has-text("Background")'
		);
		await page.click(
			'button.components-circular-option-picker__option[aria-label="Black"]'
		);

		const warningElement = page.locator( '.block-editor-contrast-checker' );
		await expect( warningElement ).toBeVisible();
		await expect( warningElement ).toContainText(
			'This color combination may be hard for people to read'
		);
	} );
} );
