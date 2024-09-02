// Autocomplete.tsx
import React from 'react'
import { Box, styled } from '@mui/material'

const BoxAutocomplete = styled(Box)(({ theme }) => ({
  position: 'absolute',
  zIndex: 100,
  width: '100%',
  background: theme.palette.common.white,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '10px',
  marginTop: '-22px',
  maxHeight: '300px',
  overflowY: 'scroll',
  boxShadow: '0px 3px 6px #00000029',
  '.result-items': {
    padding: '10px 20px',
    cursor: 'pointer',
    '&:hover': {
      background: '#76ABAE',
    },
  },
}))

const AutocompleteList = ({ value, setValue, data, propertyToSearch }: any) => {
  const onSearch = (search: string) => {
    setValue(search)
  }

  return (
    <BoxAutocomplete>
      {data
        .filter((item: string) => {
          const option = item[propertyToSearch].toLowerCase()
          const search = value.toLowerCase()
          return search && option.includes(search) && option !== search
        })
        .map((item: string | any) => (
          <Box
            key={item.id}
            onClick={() => onSearch(item[propertyToSearch])}
            className='result-items'
          >
            {item[propertyToSearch]}
          </Box>
        ))}
    </BoxAutocomplete>
  )
}

export default AutocompleteList
