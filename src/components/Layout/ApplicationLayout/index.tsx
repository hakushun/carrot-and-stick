import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';

// http://localhost:3000/mypage

export const ApplicationLayout: React.FC = ({ children }) => {
	const toggleClass = (elm: HTMLElement, name: string) => {
		if (elm.getAttribute(name) === 'true') {
			elm.setAttribute('data-menu-open', 'false');
			return;
		}
		elm.setAttribute('data-menu-open', 'true');
	};

	const toggleMenu = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const dataAttr = 'data-menu-open';
		e.preventDefault();
		const menu = document.getElementById('menu') as HTMLDivElement;
		const menuIcon = document.getElementById('menu_icon') as HTMLButtonElement;
		const nav = document.getElementById('nav') as HTMLButtonElement;
		toggleClass(menu, dataAttr);
		toggleClass(menuIcon, dataAttr);
		toggleClass(nav, dataAttr);
	};

	return (
		<div className={styles.root}>
			<div id="menu" className={styles.menu} data-menu-open="true">
				<div className={styles.menu__title}>
					<h1 className={styles.menu__titleText}>MENU</h1>
					<button
						type="button"
						onClick={(e) => toggleMenu(e)}
						className={
							styles.menu__titleIcon + ' ' + styles.menu__titleIcon_active
						}>
						<span
							data-menu-open="true"
							id="menu_icon"
							className={styles.menu__titleIconBar}></span>
					</button>
				</div>
				<div
					className={
						styles.menu__pointContainer +
						' ' +
						styles.menu__pointContainer_active
					}>
					<div className={styles.menu__openPoint}>
						<h2 className={styles.menu__pointTitle}>がんばりポイント</h2>
						<div className={styles.menu__pointBlock}>
							<strong className={styles.menu__pointNumber}>100</strong>
							<span className={styles.menu__point}>points</span>
						</div>
					</div>
					<div className={styles.menu__closePoint}>
						<div className={styles.menu__pointBlock}>
							<strong className={styles.menu__pointNumber}>100</strong>
							<span className={styles.menu__point}>points</span>
						</div>
					</div>
				</div>
				<nav id="nav" className={styles.nav} data-menu-open="true">
					<ul className={styles.nav__list}>
						<li className={styles.nav__listItem}>
							<Link href="/">
								<div className={styles.nav__listItemInner}>
									<div
										className={
											styles.nav__listItemIcon +
											' ' +
											styles.nav__listItemIcon_active
										}>
										<img
											className={styles.nav__listItemIconImg}
											src="/images/nav/ganbalistIcon.svg"
											alt=""
										/>
									</div>
									<a
										className={styles.nav__link + ' ' + styles.nav__link_active}
										href="/">
										<span className={styles.nav__linkText}>がんばりスト</span>
									</a>
								</div>
							</Link>
						</li>
						<li className={styles.nav__listItem}>
							<div className={styles.nav__listItemInner}>
								<div
									className={
										styles.nav__listItemIcon +
										' ' +
										styles.nav__listItemIcon_active
									}>
									<img
										className={styles.nav__listItemIconImg}
										src="/images/nav/gohoubilist.svg"
										alt=""
									/>
								</div>
								<Link href="/">
									<a
										className={styles.nav__link + ' ' + styles.nav__link_active}
										href="/">
										<span className={styles.nav__linkText}>ごほうびリスト</span>
									</a>
								</Link>
							</div>
						</li>
						<li className={styles.nav__listItem}>
							<Link href="/">
								<div className={styles.nav__listItemInner}>
									<div
										className={
											styles.nav__listItemIcon +
											' ' +
											styles.nav__listItemIcon_active
										}>
										<img
											className={styles.nav__listItemIconImg}
											src="/images/nav/changelist.svg"
											alt=""
										/>
									</div>
									<a
										className={styles.nav__link + ' ' + styles.nav__link_active}
										href="/">
										<span className={styles.nav__linkText}>交換リスト</span>
									</a>
								</div>
							</Link>
						</li>
						<li className={styles.nav__listItem}>
							<Link href="/">
								<div className={styles.nav__listItemInner}>
									<div
										className={
											styles.nav__listItemIcon +
											' ' +
											styles.nav__listItemIcon_active
										}>
										<img
											className={styles.nav__listItemIconImg}
											src="/images/nav/rireki.svg"
											alt=""
										/>
									</div>
									<a
										className={styles.nav__link + ' ' + styles.nav__link_active}
										href="/">
										<span className={styles.nav__linkText}>履歴</span>
									</a>
								</div>
							</Link>
						</li>
						<li className={styles.nav__listItem}>
							<Link href="/">
								<div className={styles.nav__listItemInner}>
									<div
										className={
											styles.nav__listItemIcon +
											' ' +
											styles.nav__listItemIcon_active
										}>
										<img
											className={styles.nav__listItemIconImg}
											src="/images/nav/static.svg"
											alt=""
										/>
									</div>
									<a
										className={styles.nav__link + ' ' + styles.nav__link_active}
										href="/">
										<span className={styles.nav__linkText}>統計</span>
									</a>
								</div>
							</Link>
						</li>
						<li className={styles.nav__listItem}>
							<Link href="/">
								<div className={styles.nav__listItemInner}>
									<div
										className={
											styles.nav__listItemIcon +
											' ' +
											styles.nav__listItemIcon_active
										}>
										<img
											className={styles.nav__listItemIconImg}
											src="/images/nav/howtouse.svg"
											alt=""
										/>
									</div>
									<a
										className={styles.nav__link + ' ' + styles.nav__link_active}
										href="/">
										<span className={styles.nav__linkText}>使い方</span>
									</a>
								</div>
							</Link>
						</li>
						<li className={styles.nav__listItem}>
							<Link href="/">
								<div className={styles.nav__listItemInner}>
									<div
										className={
											styles.nav__listItemIcon +
											' ' +
											styles.nav__listItemIcon_active
										}>
										<img
											className={styles.nav__listItemIconImg}
											src="/images/nav/contact.svg"
											alt=""
										/>
									</div>
									<a
										className={styles.nav__link + ' ' + styles.nav__link_active}
										href="/">
										<span className={styles.nav__linkText}>お問い合わせ</span>
									</a>
								</div>
							</Link>
						</li>
					</ul>
					<ul className={styles.nav__sub}>
						<li className={styles.nav__listItem}>
							<Link href="/">
								<div className={styles.nav__listItemInner}>
									<div
										className={
											styles.nav__listItemIcon +
											' ' +
											styles.nav__listItemIcon_active
										}>
										<img
											className={styles.nav__listItemIconImg}
											src="/images/nav/mypage.svg"
											alt=""
										/>
									</div>
									<a
										className={styles.nav__link + ' ' + styles.nav__link_active}
										href="/">
										<span className={styles.nav__linkText}>マイページTOP</span>
									</a>
								</div>
							</Link>
						</li>
						<li className={styles.nav__listItem}>
							<Link href="/">
								<div className={styles.nav__listItemInner}>
									<div
										className={
											styles.nav__listItemIcon +
											' ' +
											styles.nav__listItemIcon_active
										}>
										<img
											className={styles.nav__listItemIconImg}
											src="/images/nav/logout.svg"
											alt=""
										/>
									</div>
									<a
										className={styles.nav__link + ' ' + styles.nav__link_active}
										href="/">
										<span className={styles.nav__linkText}>ログアウト</span>
									</a>
								</div>
							</Link>
						</li>
					</ul>
				</nav>
			</div>
			{children}
		</div>
	);
};
