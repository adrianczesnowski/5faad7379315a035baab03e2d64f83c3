import {usePosts} from "../../context/ContextProvider.tsx";
import {useEffect, useState} from "react";

export const useFetchPost = () => {
    const { state, dispatch } = usePosts();
    const [timer, setTimer] = useState<number | null>(null);

    const fetchData = async () => {
        dispatch({ type: 'FETCH_START' });

        try {
            const randomId = Math.floor(Math.random() * 50) + 1;
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${randomId}`);

            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const data = await response.json();

            const timerId = setTimeout(() => {
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            }, 2000);

            setTimer(timerId);
        } catch (error) {
            dispatch({ type: 'FETCH_ERROR', payload: error instanceof Error ? error : new Error('Unknown error') });
        }
    };

    useEffect(() => {
        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [timer]);

    return {
        fetchData,
        state,
    };
};
