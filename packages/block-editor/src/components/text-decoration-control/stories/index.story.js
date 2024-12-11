/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import TextDecorationControl from '../';

/**
 * TextDecorationControl Properties
 */
const meta = {
	title: 'BlockEditor/TextDecorationControl',
	component: TextDecorationControl,
	parameters: {
		docs: {
			canvas: { sourceState: 'shown' },
			description: {
				component: 'Control to facilitate text decoration selections.',
			},
		},
	},
	argTypes: {
		value: {
			control: { type: null },
			description: 'Currently selected text decoration.',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'none' },
			},
		},
		onChange: {
			action: 'onChange',
			control: { type: null },
			description: 'Handles change in text decoration selection.',
			table: {
				type: {
					summary: 'function',
				},
			},
		},
		className: {
			control: 'text',
			description: 'Additional class name to apply.',
			table: {
				type: { summary: 'string' },
			},
		},
	},
};

export default meta;

/**
 * Default story showing TextDecorationControl
 */
export const Default = {
	args: {
		value: 'none',
	},
	render: function Template( { onChange, ...args } ) {
		const [ value, setValue ] = useState( 'none' );
		return (
			<TextDecorationControl
				{ ...args }
				onChange={ ( newValue ) => {
					onChange( newValue );
					setValue( newValue );
				} }
				value={ value }
			/>
		);
	},
};
