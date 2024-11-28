/**
 * WordPress dependencies
 */
import { useState, useEffect } from '@wordpress/element';

/**
 * Internal dependencies
 */
import TextAlignmentControl from '../';

/**
 * Text alignment options
 */
const ALIGNMENT_OPTIONS = [ 'left', 'center', 'right', 'justify' ];

/**
 * Demo text component to show text alignment effect
 */
const DemoText = ( { alignment } ) => (
	<p style={ { textAlign: alignment } }>
		This is a sample paragraph to demonstrate the text alignment control. It
		contains multiple lines of text to better show the alignment effect. You
		can see how the text aligns differently based on the selected option.
	</p>
);

/**
 * TextAlignmentControl Properties
 */
export default {
	title: 'BlockEditor/TextAlignmentControl',
	component: TextAlignmentControl,
	argTypes: {
		value: {
			control: 'select',
			options: ALIGNMENT_OPTIONS,
			description: 'Currently selected text alignment value',
			table: {
				type: {
					summary: 'string',
				},
				defaultValue: { summary: 'left' },
			},
		},
		onChange: {
			action: 'onChange',
			control: {
				type: null,
			},
			description: 'Callback function when text alignment changes',
			table: {
				type: {
					summary: 'function',
				},
			},
		},
		options: {
			control: 'array',
			description: 'Array of alignment options to display',
			table: {
				type: { summary: 'array' },
				defaultValue: {
					summary: "['left', 'center', 'right', 'justify']",
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
	render: function Render( { onChange, value, options, className } ) {
		const [ selectedAlignment, setSelectedAlignment ] = useState( value );

		useEffect( () => {
			setSelectedAlignment( value );
		}, [ value ] );

		const handleAlignmentChange = ( newValue ) => {
			setSelectedAlignment( newValue );
			if ( onChange ) {
				onChange( newValue );
			}
		};

		return (
			<div>
				<TextAlignmentControl
					value={ selectedAlignment }
					onChange={ handleAlignmentChange }
					options={ options }
					className={ className }
				/>
				<DemoText alignment={ selectedAlignment } />
			</div>
		);
	},
};

/**
 * Default story showing TextAlignmentControl with left alignment
 */
export const Default = {
	args: {
		value: 'left',
		options: ALIGNMENT_OPTIONS,
	},
};

/**
 * TextAlignmentControl with left alignment
 */
export const WithLeftAlignment = {
	args: {
		value: 'left',
		options: ALIGNMENT_OPTIONS,
	},
};

/**
 * TextAlignmentControl with center alignment
 */
export const WithCenterAlignment = {
	args: {
		value: 'center',
		options: ALIGNMENT_OPTIONS,
	},
};

/**
 * TextAlignmentControl with right alignment
 */
export const WithRightAlignment = {
	args: {
		value: 'right',
		options: ALIGNMENT_OPTIONS,
	},
};

/**
 * TextAlignmentControl with justify alignment
 */
export const WithJustifyAlignment = {
	args: {
		value: 'justify',
		options: ALIGNMENT_OPTIONS,
	},
};

/**
 * TextAlignmentControl with custom className
 */
export const WithCustomClass = {
	args: {
		value: 'left',
		options: ALIGNMENT_OPTIONS,
		className: 'custom-text-alignment-control',
	},
};
