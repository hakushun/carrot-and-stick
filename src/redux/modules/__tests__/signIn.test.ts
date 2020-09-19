import reducer, { changeSignInForm } from '../signIn';

describe('SignIn reducer test', () => {
	it('value を渡して正しく InitialState が変更される', () => {
		const result = reducer(
			undefined,
			changeSignInForm({ name: 'mailAddress', value: 'sample@sample.com' }),
		);
		expect(result).toEqual({
			form: {
				mailAddress: 'sample@sample.com',
				password: '',
			},
			edited: {
				mailAddress: true,
				password: false,
			},
			validationErrors: {
				mailAddress: { error: false, message: '' },
				password: { error: false, message: '' },
			},
		});
	});
});
