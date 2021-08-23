function App() {
  return (
    <div className='wrapper clear'>
      <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex align-center'>
          <img
            src='/img/logo.png'
            alt='Логотип магазина React Sneakers'
            width={40}
            height={40}
          />
          <div>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className='opacity-5'>Магазин реактивных кроссовок</p>
          </div>
        </div>
        <ul className='d-flex '>
          <li className='mr-30'>
            <img
              width={18}
              height={18}
              src='/img/cart.svg'
              alt='Корзина товаров'
            />
            <span>1205 руб.</span>
          </li>
          <li>
            <img src='/img/user.svg' alt='Аватар пользователя' />
          </li>
        </ul>
      </header>

      <section className='content p-40'>
        <div className='d-flex justify-between align-center mb-40'>
          <h1>Все кроссовки</h1>

          <div className='d-flex search-block'>
            <img src='/img/search.svg' alt='Иконка поиска' />
            <input type='text' placeholder='Поиск...' />
          </div>
        </div>
        <div className='d-flex'>
          <div className='card'>
            <img
              width={133}
              height={112}
              src='/img/sneakers/1.jpg'
              alt='Кроссовки'
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between aliggn-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img
                  width={11}
                  height={11}
                  src='/img/plus.svg'
                  alt='Добавить товар'
                />
              </button>
            </div>
          </div>
          <div className='card'>
            <div className='btn-favorite'>
              <img src='/img/heart-unliked.svg' alt='unliked' />
            </div>
            <img
              width={133}
              height={112}
              src='/img/sneakers/2.jpg'
              alt='Кроссовки'
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between aliggn-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img
                  width={11}
                  height={11}
                  src='/img/plus.svg'
                  alt='Добавить товар'
                />
              </button>
            </div>
          </div>
          <div className='card'>
            <img
              width={133}
              height={112}
              src='/img/sneakers/3.jpg'
              alt='Кроссовки'
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between aliggn-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img
                  width={11}
                  height={11}
                  src='/img/plus.svg'
                  alt='Добавить товар'
                />
              </button>
            </div>
          </div>
          <div className='card'>
            <img
              width={133}
              height={112}
              src='/img/sneakers/4.jpg'
              alt='Кроссовки'
            />
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className='d-flex justify-between aliggn-center'>
              <div className='d-flex flex-column'>
                <span>Цена:</span>
                <b>12 999 руб.</b>
              </div>
              <button className='button'>
                <img
                  width={11}
                  height={11}
                  src='/img/plus.svg'
                  alt='Добавить товар'
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
