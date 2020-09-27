import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Toppage from './presentation';
import {
	changeSignInForm,
	selectSignIn,
	selectSignInMailAdressErrors,
	selectSignInPasswordErrors,
	selectSignInValidationErrors,
} from '../../../redux/modules/signIn';
import {
	changeSignUpForm,
	selectSignUp,
	selectSignUpMailAdressErrors,
	selectSignUpPasswordErrors,
	selectSignUpUserNameErrors,
	selectSignUpValidationErrors,
} from '../../../redux/modules/signUp';

const Component = React.memo(
	(): JSX.Element => {
		// コンポーネントとactionを接続
		const dispatch = useDispatch();
		// コンポーネントとstoreを接続
		const signIn = useSelector(selectSignIn);
		const signUp = useSelector(selectSignUp);
		const signInMailAdressErrors = useSelector(selectSignInMailAdressErrors);
		const signInPasswordErrors = useSelector(selectSignInPasswordErrors);
		const signInValidationErrors = useSelector(selectSignInValidationErrors);
		const signUpUserNameErrors = useSelector(selectSignUpUserNameErrors);
		const signUpMailAdressErrors = useSelector(selectSignUpMailAdressErrors);
		const signUpPasswordErrors = useSelector(selectSignUpPasswordErrors);
		const signUpValidationErrors = useSelector(selectSignUpValidationErrors);

		const smoothScroll = () => {
			const target = document.querySelector('#form') as HTMLElement;
			if (target) {
				const targetY = target.offsetTop;
				window.scroll({ top: targetY, behavior: 'smooth' });
			}
		};

		// メモ化：不要なレンダリングを防ぐ
		const handleSignInChange = useCallback(
			(e: React.ChangeEvent<HTMLInputElement>) => {
				dispatch(
					changeSignInForm({ name: e.target.name, value: e.target.value }),
				);
			},
			[dispatch],
		);
		const handleSignUpChange = useCallback(
			(e: React.ChangeEvent<HTMLInputElement>) => {
				dispatch(
					changeSignUpForm({ name: e.target.name, value: e.target.value }),
				);
			},
			[dispatch],
		);

		const showPassword = (type: string) => {
			const targetInput = document.getElementById(
				`${type}_password`,
			) as HTMLInputElement;
			const targetPassIcon = document.getElementById(`${type}_passIcon`);
			const showSelector = `[data-${type}-passicon="show"]`;
			const hideSelector = `[data-${type}-passicon="hide"]`;
			const hideIcon =
				targetPassIcon &&
				(targetPassIcon.querySelector(hideSelector) as HTMLElement);
			const showIcon =
				targetPassIcon &&
				(targetPassIcon.querySelector(showSelector) as HTMLElement);

			if (targetInput && targetPassIcon && hideIcon && showIcon) {
				if (targetInput.type === 'password') {
					targetInput.setAttribute('type', 'text');
					hideIcon.style.display = 'block';
					showIcon.style.display = 'none';
				} else {
					targetInput.setAttribute('type', 'password');
					hideIcon.style.display = 'none';
					showIcon.style.display = 'block';
				}
			}
		};

		return (
			<Toppage
				signIn={signIn}
				signUp={signUp}
				signInMailAdressErrors={signInMailAdressErrors}
				signInPasswordErrors={signInPasswordErrors}
				signInValidationErrors={signInValidationErrors}
				signUpUserNameErrors={signUpUserNameErrors}
				signUpMailAdressErrors={signUpMailAdressErrors}
				signUpPasswordErrors={signUpPasswordErrors}
				signUpValidationErrors={signUpValidationErrors}
				smoothScroll={smoothScroll}
				handleSignInChange={handleSignInChange}
				handleSignUpChange={handleSignUpChange}
				showPassword={showPassword}
			/>
		);
	},
);

export default Component;
