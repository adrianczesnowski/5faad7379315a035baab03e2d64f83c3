import { render, screen } from '@testing-library/react';
import Button from "./Button.tsx";

describe('Button', () => {
    it('renders button with text', () => {
        render(<Button isLoading={false} text="Fetch Data" />);
        expect(screen.getByRole('button', { name: /fetch data/i })).toBeInTheDocument();
    });
});
