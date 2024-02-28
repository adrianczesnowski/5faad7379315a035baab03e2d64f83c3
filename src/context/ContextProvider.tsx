import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface IPostData {
    body: string;
    id: number;
    title: string;
    userId: number;
}

interface State {
    loading: boolean;
    data: IPostData | null;
    error: Error | null;
}

type Action =
    | { type: 'FETCH_START' }
    | { type: 'FETCH_SUCCESS'; payload: any }
    | { type: 'FETCH_ERROR'; payload: Error };

const initialState: State = {
    loading: false,
    data: null,
    error: null,
};

const Context = createContext<{ state: State; dispatch: React.Dispatch<Action> }>({
    state: initialState,
    dispatch: () => null,
});

const fetchPostsReducer = (state: State, action: Action): State => {
    switch (action.type) {
        case 'FETCH_START':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, data: action.payload, error: null };
        case 'FETCH_ERROR':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

interface ContextProviderProps {
    children: ReactNode;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(fetchPostsReducer, initialState);

    return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
};

export const usePosts = () => useContext(Context);
