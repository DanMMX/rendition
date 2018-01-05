import * as React from 'react'
import { storiesOf, action } from '@storybook/react'
import styled from 'styled-components'
import { Table } from '../'
import PokeDex from './assets/pokedex'

const Container = styled.div`
  margin: 30px;
`

const prefixNum = num => (num.toString().length === 1 ? `0${num}` : num)

const columns = [
  {
    field: 'Name',
    sortable: true
  },
  {
    field: 'pokedex_number',
    label: 'National Pokedex Number',
    sortable: true,
    render: value => <code>{value}</code>
  },
  {
    field: 'Category',
    sortable: true
  },
  {
    field: 'first_seen',
    label: 'First Seen',
    sortable: true,
    render: value => {
      if (value == null) {
        return null
      }

      const d = new Date(value)
      return (
        <span>
          {d.getFullYear()}-{prefixNum(d.getMonth() + 1)}-{prefixNum(
            d.getDay() + 1
          )}
        </span>
      )
    }
  }
]

storiesOf('Table', module).addWithInfo('Standard', () => {
  return (
    <Container>
      <Table
        columns={columns}
        data={PokeDex}
        rowKey='pokedex_number'
        onCheck={action('items-selected')}
      />
    </Container>
  )
})