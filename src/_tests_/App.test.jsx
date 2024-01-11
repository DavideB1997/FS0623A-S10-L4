import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('Corretto montaggio del App', () => {
	it('monta correttamente il jumbo', async () => {
		render(<App />);
		const jumbo = await screen.findAllByTestId('jumbo');
		expect(jumbo).toHaveLength(1);
	});
	it('monta correttamente i books', async () => {
		render(<App />);
		const cards = await screen.findAllByTestId('card');
		expect(cards).toHaveLength(150);
	});
	it('comment area visible ', async () => {
		render(<App />);
		const cards = await screen.findAllByTestId('card-filtrata');
		fireEvent.click(cards[1]);
		const commentArea = screen.getByText(/Comment text/i);
		expect(commentArea).toBeInTheDocument();
	});
	it('test filtro', () => {
		render(<App />);
		const elemento = screen.getByPlaceholderText(/Search here/i);
		fireEvent.change(elemento, {
			target: { value: 'the last wish:' },
		});
		const cardsFiltrate = screen.getAllByTestId('card-filtrata');
		expect(cardsFiltrate).toHaveLength(1);
	});
	it('bordo diverso ', async () => {
		render(<App />);
		const cards = await screen.findAllByTestId('card-filtrata');
		const card = cards[1];
		fireEvent.click(card);
		expect(card).toHaveStyle('border: 3px solid red');
	});
});
