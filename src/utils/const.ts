import {
  statusCodesTypes,
} from '../types/types'



export const statusCodes: statusCodesTypes[] = [
  {
    id: 1,
    code: '100',
    message: 'Continue',
    description: `El código de respuesta de estado informativo HTTP 100 Continue indica que todo está correcto hasta el momento y que el cliente debe continuar con la solicitud o ignorarla si ya ha terminado. Para que un servidor compruebe los headers de la solicitud, un cliente debe enviar Expect: 100-continue como header en su solicitud inicial y recibir como respuesta un código de estado 100 Continue antes de enviar el body.`,
  },
  { id: 2, code: '101', message: 'Switching Protocols', description: '' },
  { id: 3, code: '102', message: 'Processin', description: '' },
  { id: 4, code: '103', message: 'Early Hints', description: '' },
  { id: 5, code: '200', message: 'OK', description: '' },
]
