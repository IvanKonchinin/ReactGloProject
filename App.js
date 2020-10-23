const style1 = {
    backgroundImage: 'url(./images/1.svg)'
};
const style2 = {
    backgroundImage: 'url(./images/2.svg)'
};
const style3 = {
    backgroundImage: 'url(./images/3.svg)'
};
const style4 = {
    backgroundImage: 'url(./images/4.svg)'
};

const NumberDiv = (props) => <div className="features-slider_item">
					<div className="features-img" style={props.style}></div>
					<div className="features-feature">{props.name} целевое преимущество</div>
					</div>;
					
const Phonelink = (props) => <div className={props.className}><a href="tel:7(962)556-1234">+7(962)556-1234</a></div>;			
const Logo = (props) => <a href="#"><div className={props.className}></div></a>;
const MobileQueryPhone = (props) => <a href={props.href} className={props.className}></a>;

const RenderJSX = () => (
<div>
	<header>
		<div className="wrapper">
			<div className="header">
				<Logo className="header-logo"/>
				<MobileQueryPhone href="tel:999" className="header-phone"/>
				<Phonelink className="header-phonelink"/>
			</div>
		</div>
	</header>
	<main>
		<div className="wrapper">
			<div className="main">
				<h1 className="main-head">Заголовок c уникальным торговым предложение по системе 4U</h1>
				<div className="main-small">Описания предлжения компании. Сайт рыбатекст поможет дизайнеру, верстальщику,
				                        вебмастеру сгенерировать несколько абзацев более.
				</div>
				<button className="btn main-btn"><span>Подробнее</span></button>
			</div>
		</div>
	</main>
	<section className="features">
		<div className="wrapper">
			<div className="features-wrapper">
				<h2 className="features-head">Уникальный заголовок для преимущества компании</h2>
				<div className="features-subhead">О нас</div>
				<div className="features-description">Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру
				                                  сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке, а начинающему
				                                  оратору отточить.
				</div>
				<div className="features-slider">
					<div className="features-slider_items">
						<NumberDiv name="Первое" style={style1}/>
						<NumberDiv name="Второе" style={style2}/>
						<NumberDiv name="Третье" style={style3}/>
						<NumberDiv name="Четвертое" style={style4}/>
					</div>
					<button className="features-slider-arrow features-slider-prev">
						<svg width="9" height="16"
								xmlns="http://www.w3.org/2000/svg">
							<path
									d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
							</path>
						</svg>
					</button>
					<button className="features-slider-arrow features-slider-next">
						<svg width="9"
								height="16" xmlns="http://www.w3.org/2000/svg">
							<path
									d="M8.707 8.707a1 1 0 0 0 0-1.414L2.343.929A1 1 0 1 0 .93 2.343L6.586 8 .929 13.657a1 1 0 0 0 1.414 1.414l6.364-6.364zM7 9h1V7H7v2z">
							</path>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</section>
	<section className="contact">
		<div className="wrapper">
			<div className="contact-wrapper">
				<h2 className="contact-title">Остались вопросы?</h2>
				<div className="contact-description">Оставьте номер телефона, и мы перезвоним вам</div>
				<form action="../mailer.smart.php" className="contact-form"><input type="text" placeholder="Ваше имя"/>
					<input type="tel" placeholder="Телефон"/> <input type="email" placeholder="E-mail"/>
					<button
							className="btn contact-btn"><span>Позвоните мне</span></button>
				</form>
				<div className="contact-personal">Я даю своё <a href="#">согласие</a> на обработку моих персональных данных.
				</div>
			</div>
		</div>
	</section>
	<footer>
		<div className="footer">
			<Logo className="footer-logo"/>

			<div className="footer-company"><span>© 2020 XXXcompany. Все права защищены.</span></div>
			<MobileQueryPhone href="tel:888" className="footer-phone"/>
			<div className="footer-websurfer">
				<span className="footer-websurfer_build">Сделано</span> 
				<a href="#">Иван Кончинин</a>
			</div>
			<Phonelink className="footer-phonelink"/>
		</div>
	</footer>
</div>   
);

ReactDOM.render(<RenderJSX/>, document.getElementById('root'));