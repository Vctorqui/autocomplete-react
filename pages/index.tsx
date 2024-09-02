import {
  Box,
  Container,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material'
import { NextPage } from 'next'
import React, { useState } from 'react'
import { statusCodes } from '@/utils/const'
import AutocompleteList from '@/components/AutocompleteList'

const BoxContainer = styled(Box)(() => ({
  background: '#F8EDED',
  height: '100vh',
}))

const Index: NextPage = () => {
  const [query, setQuery] = useState('')

  const handleStatusChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  return (
    <>
      <BoxContainer>
        <Container maxWidth='lg'>
          <Box
            sx={{
              backgroundImage:
                'url(https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeW15Zm5iaXoxYm5jMWRjZXVpaTI0cHlsZTJoM3FyOHh3Z3o3NHo1ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7NoNw4pMNTvgc/giphy.webp)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              padding: '50px 0',
            }}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={2}
          >
            <Typography fontWeight={700} variant='h3' color={'#FF8225'}>
              AUTOCOMPLETE CON REACT.JS
            </Typography>
          </Box>
          <Stack
            mt={4}
            justifyContent={'center'}
            alignItems={'center'}
            spacing={2}
          >
            <Box position={'relative'}>
              <TextField
                fullWidth={false}
                sx={{ width: '400px' }}
                value={query}
                label={'Buscar Códigos de estado'}
                placeholder='E.g.200'
                onChange={handleStatusChange}
                helperText='Introduce el código de estado que recibes para saber qué está pasando'
              />
              <AutocompleteList
                value={query}
                setValue={setQuery}
                data={statusCodes}
                propertyToSearch={'code'}
              />
            </Box>
          </Stack>
        </Container>
      </BoxContainer>
    </>
  )
}

export default Index
