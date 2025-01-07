# DotTip

`DotTip` is a React component that renders a single _tip_ on the screen. The tip will point to the React element that `DotTip` is nested within. Each tip is uniquely identified by a string passed to `tipId`.

## Usage

```jsx
<button onClick={ ... }>
	Add to Cart
	<DotTip tipId="acme/add-to-cart">
		Click here to add the product to your shopping cart.
	</DotTip>
</button>
}
```

## Props

The component accepts the following props:

### tipId

A string that uniquely identifies the tip. Identifiers should be prefixed with the name of the plugin, followed by a `/`. For example, `acme/add-to-cart`.

-   Type: `string`
-   Required: Yes

### placement

The placement of the popover relative to its parent node. Determines where the popover will be positioned relative to its reference element.

- Type: `string`
- Required: No
- Default: `"right"`
- Possible values: 
  - `'top'`, `'top-start'`, `'top-end'`
  - `'right'`, `'right-start'`, `'right-end'`
  - `'bottom'`, `'bottom-start'`, `'bottom-end'`
  - `'left'`, `'left-start'`, `'left-end'`
  - `'overlay'`

### children

Any React element or elements can be passed as children. They will be rendered within the tip bubble.
