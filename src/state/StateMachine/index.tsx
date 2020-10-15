import {Machine} from 'xstate';

const StateMachine = Machine({
  id: 'stateMachine',
  initial: 'unauthorised',
  context: {
    user: '',
    password: '',
  },
  states: {
    unauthorised: {
      on: {AUTHORISE: 'authorised'},
    },
    authorised: {},
  },
});

export defaut StateMachine;