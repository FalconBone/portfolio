import classes from './Header.module.css';

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div>
          Даниил Нефедов
        </div>
        <nav>
          Домашнаяя, Обо мне, Проекты, Контакты
        </nav>
      </div>
    </header>
  );
}

export default Header;
