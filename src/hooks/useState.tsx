import React, {
  ReactNode,
  createContext,
  useReducer,
  useContext,
  useCallback,
} from 'react';

const defaultState = {
  user: '',
  password: '',
};

type State = {
  user: string;
  password: string;
};

type Action =
  | {type: 'SETUSER'; user: string}
  | {type: 'SETPASSWORD'; password: string};

type Dispatch = (action: Action) => void;

const StateContext = createContext<State>(defaultState);
const StateDispatchContext = createContext<Dispatch | undefined>(undefined);

function stateReducer(state: State, action: Action) {
  switch (action.type) {
    case 'SETUSER': {
      console.warn(action.user);
      return {...state, user: action.user};
    }
    case 'SETPASSWORD': {
      return {...state, password: action.password};
    }
    default: {
      throw new Error(`Unhandled action`);
    }
  }
}

export function StateProvider({children}: {children: ReactNode}) {
  const [state, dispatch] = useReducer(stateReducer, defaultState);

  return (
    <StateContext.Provider value={state}>
      <StateDispatchContext.Provider value={dispatch}>
        {children}
      </StateDispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useStateUser() {
  const context = useContext(StateContext);

  if (context === undefined) {
    throw new Error('usestate must be used within a stateProvider');
  }
  return context.user;
}

export function useStatePassword() {
  const context = useContext(StateContext);

  if (context === undefined) {
    throw new Error('usestate must be used within a stateProvider');
  }
  return context.password;
}

export function useSetUser(userInput: string) {
  const context = useContext(StateDispatchContext);

  if (context === undefined) {
    throw new Error('useIncDec must be used within a stateProvider');
  }

  const useSetUser = useCallback(
    () => context({user: userInput, type: 'SETUSER'}),
    [context],
  );

  return useSetUser;
}

export function useSetPassword(password: string) {
  const context = useContext(StateDispatchContext);

  if (context === undefined) {
    throw new Error('useIncDec must be used within a stateProvider');
  }

  const useSetPassword = useCallback(
    () => context({password: password, type: 'SETPASSWORD'}),
    [context],
  );

  return useSetPassword;
}
