/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import EditableText from '../';

const meta = {
	title: 'BlockEditor/EditableText',
	component: EditableText,
	parameters: {
		docs: {
			canvas: { sourceState: 'shown' },
			description: {
				component:
					'Renders an editable text input in which text formatting is not allowed.',
			},
		},
	},
	argTypes: {
		value: {
			control: { type: null },
			description: 'Text content to make editable.',
			table: {
				type: { summary: 'string' },
			},
		},
		onChange: {
			action: 'onChange',
			control: { type: null },
			description: 'Called when the text content changes.',
			table: {
				type: { summary: 'function' },
			},
		},
		tagName: {
			control: 'text',
			description: 'The HTML tag name of the editable element.',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'div' },
			},
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text to show when the field is empty.',
			table: {
				type: { summary: 'string' },
			},
		},
		disableLineBreaks: {
			control: 'boolean',
			description: 'Prevents insertion of line breaks on Enter.',
			table: {
				type: { summary: 'boolean' },
			},
		},
	},
};

export default meta;

export const Default = {
	render: function Template( { onChange, ...args } ) {
		const [ value, setValue ] = useState( '' );
		return (
			<EditableText
				{ ...args }
				value={ value }
				onChange={ ( ...changeArgs ) => {
					onChange( ...changeArgs );
					setValue( ...changeArgs );
				} }
				placeholder="Type some text..."
			/>
		);
	},
};
