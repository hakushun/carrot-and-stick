import React from 'react';
import Link from 'next/link';
import style from './index.module.scss';
import { SignIn } from '../../../redux/modules/signIn';
import { SignUp } from '../../../redux/modules/signUp';

type Props = {
	signIn: SignIn;
	signUp: SignUp;
	signInMailAdressErrors: boolean;
	signInPasswordErrors: boolean;
	signInValidationErrors: boolean;
	signUpUserNameErrors: boolean;
	signUpMailAdressErrors: boolean;
	signUpPasswordErrors: boolean;
	signUpValidationErrors: boolean;
	smoothScroll: () => void;
	handleSignInChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSignUpChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	showPassword: (type: string) => void;
};
const Toppage: React.FC<Props> = React.memo(
	({
		signIn,
		signUp,
		signInMailAdressErrors,
		signInPasswordErrors,
		signInValidationErrors,
		signUpUserNameErrors,
		signUpMailAdressErrors,
		signUpPasswordErrors,
		signUpValidationErrors,
		smoothScroll,
		handleSignInChange,
		handleSignUpChange,
		showPassword,
	}) => {
		return (
			<>
				<header className={style.header}>
					<div className={style.header__inner}>
						<h1>
							<Link href="/">
								<a className={style.header__title}>title</a>
							</Link>
						</h1>
						<nav className={style.nav}>
							<ul className={style.nav__inner}>
								<li className={style.nav__item}>
									<Link href="/help">
										<a className={style.nav__link}>機能紹介</a>
									</Link>
								</li>
								<li className={style.nav__item}>
									<Link href="/faq">
										<a className={style.nav__link}>よくありそうな質問</a>
									</Link>
								</li>
								<li className={style.nav__item}>
									<Link href="/contact">
										<a className={style.nav__link}>お問い合わせ</a>
									</Link>
								</li>
							</ul>
						</nav>
					</div>
				</header>
				<div className={style.mainvisual}>
					<section className={style.mainvisual__inner}>
						<div className={style.mainvisual__subtilte_wrapper}>
							<p className={style.mainvisual__subtitle}>
								結果ばかり求められる今の社会
								<br />
								「あんなに頑張ったのに評価してもらえなかった…」
								<br />
								「これだけ時間かけたのに、結果が悪かった…」
								<br />
								「リリースがなくなり努力が水の泡となって消えていった…」
							</p>
						</div>
						<div className={style.mainvisual__title_wrapper}>
							<h2 className={style.mainvisual__title}>
								頑張っているあなたの最大の理解者はあなたです!!
								<br />
								自分の努力を認め、褒めてあげましょう。
								<br />
								結果なんて知らねえぜ!!! 頑張った分だけ報われよう
							</h2>
						</div>
						<div className={style.button}>
							<button className={style.button__inner} type="button">
								なにそれ詳しく！
							</button>
						</div>
						<div className={style.scroll}>
							<button
								type="button"
								className={style.scroll__inner}
								onClick={() => smoothScroll()}>
								SCROLL<span className={style.scroll__arrow}></span>
							</button>
						</div>
					</section>
				</div>
				<main className={style.main}>
					<div className={style.main__inner}>
						<section id="form" className={style.form}>
							<div className={style.form__content}>
								<form className={style.form__section}>
									<fieldset className={style.form__inner}>
										<legend className={style.form__legend}>
											<h3 className={style.form__title}>SIGN IN</h3>
										</legend>
										<div className={style.form__inputGroup}>
											<label
												htmlFor="signin_email"
												className={style.form__label}>
												<span>MAIL ADDRESS</span>
												<input
													className={style.form__input}
													type="email"
													id="signin_email"
													name="mailAddress"
													required
													value={signIn.form.mailAddress}
													onChange={(e) => handleSignInChange(e)}
												/>
												<span className={style.error}>
													{signInMailAdressErrors &&
														signIn.validationErrors.mailAddress.message}
												</span>
											</label>
											<label
												htmlFor="signin_password"
												className={style.form__label}>
												<span>PASSWORD</span>
												<div className={style.form__password}>
													<input
														className={style.form__input}
														type="password"
														id="signin_password"
														name="password"
														autoComplete="current-password"
														required
														value={signIn.form.password}
														onChange={(e) => handleSignInChange(e)}
													/>
													<button
														id="signin_passIcon"
														className={style.form__inputIcon}
														type="button"
														onClick={() => showPassword('signin')}>
														<i
															aria-hidden="true"
															data-signin-passicon="show"
															className="fas fa-eye"></i>
														<i
															aria-hidden="true"
															data-signin-passicon="hide"
															className="fas fa-eye-slash"
															style={{ display: 'none' }}></i>
													</button>
												</div>
												<span className={style.error}>
													{signInPasswordErrors &&
														signIn.validationErrors.password.message}
												</span>
											</label>
											<button
												type="button"
												className={style.form__button}
												disabled={signInValidationErrors}>
												SIGN IN
											</button>
										</div>
									</fieldset>
								</form>
							</div>
							<div className={style.form__content}>
								<form className={style.form__section}>
									<fieldset className={style.form__inner}>
										<legend className={style.form__legend}>
											<h3 className={style.form__title}>SIGN UP</h3>
										</legend>
										<div className={style.form__inputGroup}>
											<label htmlFor="username" className={style.form__label}>
												USER NAME
												<input
													className={style.form__input}
													type="text"
													id="username"
													name="userName"
													required
													value={signUp.form.userName}
													onChange={(e) => handleSignUpChange(e)}
												/>
												<span className={style.error}>
													{signUpUserNameErrors &&
														signUp.validationErrors.userName.message}
												</span>
											</label>
											<label
												htmlFor="signup_email"
												className={style.form__label}>
												MAIL ADDRESS
												<input
													className={style.form__input}
													type="email"
													id="signup_email"
													name="mailAddress"
													required
													onChange={(e) => handleSignUpChange(e)}
													value={signUp.form.mailAddress}
												/>
												<span className={style.error}>
													{signUpMailAdressErrors &&
														signUp.validationErrors.mailAddress.message}
												</span>
											</label>
											<label
												htmlFor="signup_password"
												className={style.form__label}>
												PASSWORD
												<div className={style.form__password}>
													<input
														className={style.form__input}
														type="password"
														name="password"
														id="signup_password"
														required
														autoComplete="new-password"
														onChange={(e) => handleSignUpChange(e)}
														value={signUp.form.password}
													/>
													<button
														type="button"
														id="signup_passIcon"
														className={style.form__inputIcon}
														onClick={() => showPassword('signup')}>
														<i
															aria-hidden="true"
															data-signup-passicon="show"
															className="fas fa-eye"></i>
														<i
															aria-hidden="true"
															data-signup-passicon="hide"
															className="fas fa-eye-slash"
															style={{ display: 'none' }}></i>
													</button>
												</div>
												<span className={style.error}>
													{signUpPasswordErrors &&
														signUp.validationErrors.password.message}
												</span>
											</label>
											<button
												type="button"
												className={style.form__button}
												disabled={signUpValidationErrors}>
												SIGN UP
											</button>
										</div>
									</fieldset>
								</form>
							</div>
						</section>
					</div>
				</main>
				<footer className={style.footer}>
					<p className={style.footer__text}>作成者：watashitachi</p>
				</footer>
			</>
		);
	},
);

export default Toppage;
