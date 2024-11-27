/**
 * Internal dependencies
 */
import TextDecorationControl from '../';

/**
 * WordPress dependencies
 */
import { useState, useEffect } from '@wordpress/element';

/**
 * Text decoration options
 */
const DECORATION_OPTIONS = [ 'none', 'underline', 'line-through' ];

/**
 * Demo text component to show text decoration effect
 */
const DemoText = ( { decoration } ) => (
	<p style={ { textDecoration: decoration } }>
		This is a sample text to demonstrate the text decoration.
	</p>
);

/**
 * Storybook configuration for TextDecorationControl component
 */
export default {
	title: 'BlockEditor/TextDecorationControl',
	component: TextDecorationControl,
	argTypes: {
		value: {
			control: 'select',
			options: DECORATION_OPTIONS,
			description: 'Currently selected text decoration value',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'none' },
			},
		},
		onChange: {
			action: 'onChange',
			control: {
				type: null,
			},
			description: 'Callback function when text decoration changes',
			table: {
				type: {
					summary: 'function',
				},
			},
		},
		className: {
			control: 'text',
			description: 'Additional CSS class name to apply',
			table: {
				type: { summary: 'string' },
			},
		},
	},
	render: function Render( { onChange, value, className } ) {
		const [ selectedDecoration, setSelectedDecoration ] = useState( value );

		useEffect( () => {
			setSelectedDecoration( value );
		}, [ value ] );

		const handleDecorationChange = ( newValue ) => {
			setSelectedDecoration( newValue );
			if ( onChange ) {
				onChange( newValue );
			}
		};

		return (
			<div>
				<TextDecorationControl
					value={ selectedDecoration }
					onChange={ handleDecorationChange }
					className={ className }
				/>
				<DemoText decoration={ selectedDecoration } />
			</div>
		);
	},
};

/**
 * Story demonstrating TextDecorationControl with default settings
 */
export const Default = {
	args: {
		value: 'none',
	},
};

/**
 * TextDecorationControl with underline decoration selected
 */
export const WithUnderline = {
	args: {
		value: 'underline',
	},
};

/**
 * TextDecorationControl with strikethrough decoration selected
 */
export const WithStrikethrough = {
	args: {
		value: 'line-through',
	},
};

/**
 * TextDecorationControl with custom className
 */
export const WithCustomClass = {
	args: {
		value: 'none',
		className: 'custom-text-decoration-control',
	},
};
