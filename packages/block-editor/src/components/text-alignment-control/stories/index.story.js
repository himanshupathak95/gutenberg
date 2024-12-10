/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import TextAlignmentControl from '../';

/**
 * Text alignment options
 */
const ALIGNMENT_OPTIONS = [ 'left', 'center', 'right', 'justify' ];

/**
 * TextAlignmentControl Properties
 */
const meta = {
	title: 'BlockEditor/TextAlignmentControl',
	component: TextAlignmentControl,
	parameters: {
		docs: {
			canvas: { sourceState: 'shown' },
			description: {
				component: 'Control to facilitate text alignment selections.',
			},
		},
	},
	argTypes: {
		value: {
			control: { type: null },
			description: 'Currently selected text alignment value.',
			table: {
				type: {
					summary: 'string',
				},
			},
		},
		onChange: {
			action: 'onChange',
			control: { type: null },
			description: 'Handles change in text alignment selection.',
			table: {
				type: {
					summary: 'function',
				},
			},
		},
		options: {
			control: 'check',
			description: 'Array of text alignment options to display.',
			options: ALIGNMENT_OPTIONS,
			table: {
				type: { summary: 'array' },
			},
		},
		className: {
			control: 'text',
			description: 'Class name to add to the control.',
			table: {
				type: { summary: 'string' },
			},
		},
	},
};

export default meta;

/**
 * Default story showing TextAlignmentControl with left alignment
 */
export const Default = {
	args: {
		value: 'left',
		options: ALIGNMENT_OPTIONS,
	},
	render: function Template( { onChange, ...args } ) {
		const [ value, setValue ] = useState();
		return (
			<TextAlignmentControl
				{ ...args }
				onChange={ ( ...changeArgs ) => {
					onChange( ...changeArgs );
					setValue( ...changeArgs );
				} }
				value={ value }
			/>
		);
	},
};
