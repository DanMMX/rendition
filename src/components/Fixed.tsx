import defaultTo = require('lodash/defaultTo');
import { compose, withProps } from 'recompose';
import { FixedProps } from 'rendition';
import styled, { StyledFunction, withTheme } from 'styled-components';
import hoc from '../hoc';

interface FixedBaseProps extends DefaultProps {
	top?: ResponsiveStyle;
	right?: ResponsiveStyle;
	bottom?: ResponsiveStyle;
	left?: ResponsiveStyle;
	z?: ResponsiveStyle;
}

const Base = (styled.div as StyledFunction<FixedBaseProps>)`
	position: fixed;
	top: ${props => defaultTo(props.top, 0)};
	right: ${props => defaultTo(props.right, 0)};
	bottom: ${props => defaultTo(props.bottom, 0)};
	left: ${props => defaultTo(props.left, 0)};
	z-index: ${props => defaultTo(props.z, 0)};
	background: ${props => defaultTo(props.bg, 'none')};
`;

const dimensions = withProps((props: FixedProps) => {
	return {
		top: props.top === true ? 0 : props.top,
		right: props.right === true ? 0 : props.right,
		bottom: props.bottom === true ? 0 : props.bottom,
		left: props.left === true ? 0 : props.left,
	};
});

export default compose<FixedBaseProps, FixedProps>(withTheme, dimensions, hoc)(
	Base,
);
