export function reducer(state, action) {
  if (action.type === "getting-length") {
    return {
      ...state,
      total: action.total,
    };
  }
  throw Error("Invalid action.");
}

export function getPageNumbereducer(state, action) {
  if (action.type === "page") {
    return {
      ...state,
      number: action.number,
    };
  }
  throw Error("Invalid action.getPageNumbereducer");
}
