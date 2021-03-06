import * as React from 'react';
import { FormWidgetProps } from 'rendition/dist/unstable';
import { Input } from '../../../../';

const BaseInput = (props: FormWidgetProps) => {
	// Note: since React 15.2.0 we can't forward unknown element attributes, so we
	// exclude the "options" and "schema" ones here.
	const {
		value,
		readonly,
		disabled,
		autofocus,
		onBlur,
		onFocus,
		options,
		schema,
		formContext,
		...inputProps
	} = props;

	if (schema.type === 'number') {
		inputProps.type = 'number';
	} else {
		inputProps.type = options.inputType || inputProps.type || 'text';
	}

	const change = ({ target: { value } }: any) => {
		return props.onChange(value === '' ? options.emptyValue : value);
	};

	return (
		<Input
			w="100%"
			readOnly={readonly}
			disabled={disabled}
			autoFocus={autofocus}
			value={value == null ? '' : value}
			{...inputProps}
			onChange={change}
			onBlur={
				onBlur && ((event: any) => onBlur(inputProps.id, event.target.value))
			}
			onFocus={
				onFocus && ((event: any) => onFocus(inputProps.id, event.target.value))
			}
		/>
	);
};

export default BaseInput;
