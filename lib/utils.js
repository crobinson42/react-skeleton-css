export function PropTypeCheckerOnChange (props, propName, componentName) {
  if (!/function/.test(typeof props[propName])) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. You must use this as a "controlled-input". ' +
			'https://facebook.github.io/react/docs/forms.html#controlled-components'
    );
  }
}
