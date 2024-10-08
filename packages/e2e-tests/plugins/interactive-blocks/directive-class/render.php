<?php
/**
 * HTML for testing the directive `data-wp-class`.
 *
 * @package gutenberg-test-interactive-blocks
 */
?>

<div
	data-wp-interactive='{"namespace": "directive-class"}'
	data-wp-context='{ "value": false }'
>
	<button
		data-wp-on--click="actions.toggleTrueValue"
		data-testid="toggle trueValue"
	>
		Toggle trueValue
	</button>

	<button
		data-wp-on--click="actions.toggleFalseValue"
		data-testid="toggle falseValue"
	>
		Toggle falseValue
	</button>

	<button
		data-wp-on--click="actions.toggleContextValue"
		data-testid="toggle context value"
	>
		Toggle context value
	</button>

	<div
		class="foo bar"
		data-wp-class--foo="state.falseValue"
		data-testid="remove class if callback returns falsy value"
	></div>

	<div
		class="foo"
		data-wp-class--bar="state.trueValue"
		data-testid="add class if callback returns truthy value"
	></div>

	<div
		class="foo bar"
		data-wp-class--foo="state.falseValue"
		data-wp-class--bar="state.trueValue"
		data-wp-class--baz="state.trueValue"
		data-testid="handles multiple classes and callbacks"
	></div>

	<div
		class="foo foo-bar"
		data-wp-class--foo="state.falseValue"
		data-wp-class--foo-bar="state.trueValue"
		data-testid="handles class names that are contained inside other class names"
	></div>

	<div
		class="foo bar baz"
		data-wp-class--bar="state.trueValue"
		data-testid="can toggle class in the middle"
	></div>

	<div
		data-wp-class--foo="state.falseValue"
		data-testid="can toggle class when class attribute is missing"
	></div>

	<div
		class="foo"
		data-wp-class--foo="context.value"
		data-testid="can use context values"
	></div>

	<div
		data-wp-class--block__element--modifier="state.trueValue"
		data-testid="can use BEM notation classes"
	></div>

	<div
		data-wp-class--main-bg----color="state.trueValue"
		data-testid="can use classes with several dashes"
	></div>

	<div
		data-wp-class--default="context.value"
		data-testid="class name default"
	></div>

	<div
		data-wp-class--#[^+-]$="context.value"
		data-testid="class name no-aplhanumeric"
	></div>

	<div
		data-wp-class--class-name-attribute&#61;&quot;foo&#32;bar&quot;="context.value"
		data-testid="class name HTML entities"
	></div>
</div>
