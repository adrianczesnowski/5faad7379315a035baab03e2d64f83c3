import {describe, expect, it, vi, beforeEach, afterEach} from 'vitest';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import FetchPost from './FetchPost';
import {ContextProvider} from '../../context/ContextProvider';
import {useFetchPost} from './fetchPost.hooks';

vi.mock('./fetchPost.hooks', () => ({
    useFetchPost: vi.fn(),
}));

describe('FetchPost', () => {
    beforeEach(() => {
        (useFetchPost as vi.Mock).mockReturnValue({
            state: { loading: false, data: null, error: null },
            fetchData: vi.fn(),
        });
    });

    afterEach(() => {
        vi.restoreAllMocks();
    });

    it('renders correctly', () => {
        render(
            <ContextProvider>
                <FetchPost />
            </ContextProvider>,
        );
        expect(screen.getByText('Fetch Data')).toBeInTheDocument();
    });

    it('calls fetchData on button click', async () => {
        const mockFetchData = vi.fn();
        (useFetchPost as vi.Mock).mockReturnValue({
            state: { loading: false, data: null, error: null },
            fetchData: mockFetchData,
        });

        render(
            <ContextProvider>
                <FetchPost />
            </ContextProvider>,
        );

        fireEvent.click(screen.getByText('Fetch Data'));
        await waitFor(() => expect(mockFetchData).toHaveBeenCalled());
    });

    it('displays error when fetch fails', async () => {
        (useFetchPost as vi.Mock).mockReturnValue({
            state: { loading: false, data: null, error: new Error('Fetch failed') },
            fetchData: vi.fn(),
        });

        render(
            <ContextProvider>
                <FetchPost />
            </ContextProvider>,
        );

        fireEvent.click(screen.getByText('Fetch Data'));
        await waitFor(() => expect(screen.getByText('Error: Fetch failed')).toBeInTheDocument());
    });
});
