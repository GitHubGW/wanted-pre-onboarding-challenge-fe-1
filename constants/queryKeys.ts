const QUERY_KEYS = {
  TODO: {
    GET_TODOS: () => ["TODO", "GET_TODOS"],
    GET_TODO_BY_ID: (id: string) => ["TODO", "GET_TODO_BY_ID", id],
  },
};

export default QUERY_KEYS;
