import { render, screen } from '@testing-library/react';
import { Application } from './Application';

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />);

    const pageHeading = screen.getByRole('heading', { level: 1 });
    expect(pageHeading).toBeInTheDocument();

    const paragraphElement = screen.getByText('All fields are mandatory');
    expect(paragraphElement).toBeInTheDocument();

    const spanElement = screen.getByTitle('close');
    expect(spanElement).toBeInTheDocument();

    const imageElement = screen.getByAltText('a person with a laptop');
    expect(imageElement).toBeInTheDocument();

    const customElement = screen.getByTestId('custom-element');
    expect(customElement).toBeInTheDocument();

    const nameElement = screen.getByRole('textbox', { name: /name/i });
    expect(nameElement).toBeInTheDocument();

    const nameElement2 = screen.getByLabelText('Name', { selector: 'input' });
    expect(nameElement2).toBeInTheDocument();

    const nameElement3 = screen.getByPlaceholderText('Fullname');
    expect(nameElement3).toBeInTheDocument();

    const nameElement4 = screen.getByDisplayValue('Vishwas');
    expect(nameElement4).toBeInTheDocument();

    const jobLocationElement = screen.getByRole('combobox', {
      name: /job location/i,
    });
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole('checkbox', {
      name: /i agree to the terms and conditions/i,
    });
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      /i agree to the terms and conditions/i
    );
    expect(termsElement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole('button', { name: /submit/i });
    expect(submitButtonElement).toBeInTheDocument();
  });
});
