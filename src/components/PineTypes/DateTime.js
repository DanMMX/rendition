import * as React from 'react'
import Input from '../Input'
const moment = require('moment')

/**
  Date Time types use momentjs for comparison, so the input and target value
  should be in one of the following forms:
  - ISO 8601
  - Unix timestamp (seconds or milliseconds)
  - JS Date object
  See https://momentjs.com/docs/#/parsing/ for more information
*/
export const rules = {
  is: (target, value) => target && moment(target).isSame(value),
  'is before': (target, value) => target && moment(target).isBefore(value),
  'is after': (target, value) => target && moment(target).isAfter(value)
}

export const validate = value => moment(value).isValid()

// Since we interpret dates on display, there is no need to normalize here
export const normalize = value => value

export const Edit = ({ value, onChange, ...props }) => (
  <Input
    {...props}
    type='datetime-local'
    value={value}
    onChange={e => onChange(e.target.value)}
  />
)

export const Display = ({
  data,
  dateFormat = 'dddd, MMMM Do YYYY, h:mm:ss a',
  ...props
}) => (
  <div {...props}>
    <span>{moment(data).format(dateFormat)}</span>
  </div>
)
