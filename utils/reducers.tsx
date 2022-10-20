interface State {
  name: string
  email: string
  message: string
}

interface Action {
  type: string
  value: string
}

export const formReducer = (prevState: State, action: Action) => {
  const { type, value } = action

  switch (type) {
    case 'name': {
      return { ...prevState, name: value }
    }

    case 'email': {
      return { ...prevState, email: value }
    }

    case 'message': {
      return { ...prevState, message: value }
    }

    case 'reset': {
      return {
        name: '',
        email: '',
        message: '',
      }
    }

    default: {
      throw new Error(`Unsupported action type: ${type}`)
    }
  }
}
