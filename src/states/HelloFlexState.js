const initialState = {
  myState: "you're not not crazy",
};

const ACTION_ACCEPT_CHAT = "ACCEPT_CHAT";
const ACTION_END_CHAT = "END_CHAT";

export class Actions {
  static acceptChat = () => ({ type: ACTION_ACCEPT_CHAT });
  static endChat = () => ({ type: ACTION_END_CHAT });
}

export function reduce(state = initialState, action) {
  switch (action.type) {
    case ACTION_ACCEPT_CHAT: {
      return { ...state, isInChat: true };
    }
    case ACTION_END_CHAT: {
      return { ...state, isInChat: false };
    }
    default:
      return state;
  }
}
