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
			description: 'String to make editable.',
			table: {
				type: { summary: 'string' },
			},
		},
		onChange: {
			action: 'onChange',
			control: { type: null },
			description: 'Called when the value changes.',
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
			description:
				"Text won't insert line breaks on Enter if set to true.",
			table: {
				type: { summary: 'boolean' },
			},
		},
		onReplace: {
			action: 'onReplace',
			control: { type: null },
			description:
				'Called when the Text instance can be replaced with the given blocks.',
			table: {
				type: { summary: 'function' },
			},
		},
		onMerge: {
			action: 'onMerge',
			control: { type: null },
			description:
				'Called when blocks can be merged. Forward is true when merging with the next block, false when merging with the previous block.',
			table: {
				type: { summary: 'function' },
			},
		},
		onRemove: {
			action: 'onRemove',
			control: { type: null },
			description:
				'Called when the block can be removed. Forward is true when the selection is expected to move to the next block, false to the previous block.',
			table: {
				type: { summary: 'function' },
			},
		},
	},
};

export default meta;

export const Default = {
	render: function Template( { onChange, ...args } ) {
		const [ value, setValue ] = useState();
		return (
			<EditableText
				{ ...args }
				value={ value }
				onChange={ ( ...changeArgs ) => {
					onChange( ...changeArgs );
					setValue( ...changeArgs );
				} }
				tagName={ args.tagName || 'div' }
			/>
		);
	},
};
