/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import {
	BlockVerticalAlignmentControl,
	BlockVerticalAlignmentToolbar,
} from '../';

const meta = {
	title: 'BlockEditor/BlockVerticalAlignmentControl',
	component: BlockVerticalAlignmentControl,
	parameters: {
		docs: {
			canvas: { sourceState: 'shown' },
			description: {
				component:
					'Controls for vertical alignment of content within a block.',
			},
		},
	},
	argTypes: {
		value: {
			control: { type: null },
			description: 'Currently selected vertical alignment value.',
			table: {
				type: {
					summary: 'string',
				},
			},
		},
		onChange: {
			action: 'onChange',
			control: { type: null },
			description: 'Handles change in vertical alignment selection.',
			table: {
				type: {
					summary: 'function',
				},
			},
		},
		controls: {
			control: 'check',
			description: 'Array of vertical alignment options to display.',
			options: [ 'top', 'center', 'bottom' ],
			table: {
				type: { summary: 'array' },
				defaultValue: { summary: "['top', 'center', 'bottom']" },
			},
		},
	},
};

export default meta;

export const Default = {
	render: function Template( { onChange, ...args } ) {
		const [ value, setValue ] = useState();
		return (
			<BlockVerticalAlignmentControl
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

export const Toolbar = {
	render: function Template( { onChange, ...args } ) {
		const [ value, setValue ] = useState();
		return (
			<BlockVerticalAlignmentToolbar
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
