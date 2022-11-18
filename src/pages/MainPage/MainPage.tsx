import React from "react";
import styles from "./styles.module.css";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <h2>Main Page</h2>
      <div className={styles.about}>
        <h2>О чем это приложение?</h2>
        <h2>Данное приложение является наглядной демонстрацией работы библиотеки react-router-dom</h2>
        <h3>Но сначала определимся с базовой терминологией и основными понятиями навигации в сети</h3>
        <dl>
          <dt>URL (Uniform Resource Locator)</dt>
          <dd>унифицированный адрес электронного ресурса (файла), или единообразный и однозначный определитель местонахождения ресурса (файла).</dd>
          <dt>Роутинг</dt>
          <dd>сопоставление URL с соответствующим ему ресурсом (файлом), другое название этого — маршрутизация.</dd>
        </dl>
        <p>
          Например, если вы запустили это приложение локально, то URL текущей страницы следующий: <code>http://localhost:3000/</code>.
          А если вы нажмёте на кнопку Store, то ваш URL станет следующим: <code>http://localhost:3000/store</code>.
        </p>
        <p>Исходя из этих двух примеров уже можно выделить основные части URL (все части рассматривать здесь не будем):</p>
        <dl>
          <dt>Схема</dt>
          <dd>схема обращения к ресурсу; в большинстве случаев имеется в виду сетевой протокол. Например, <code>http</code></dd>
          <dt>Хост</dt>
          <dd>полностью прописанное доменное имя хоста в системе DNS или IP-адрес хоста в форме четырёх групп десятичных чисел, разделённых точками; числа — целые в интервале от 0 до 255. Например, <code>localhost</code> или <code>127.0.0.1</code></dd>
          <dt>Порт</dt>
          <dd>целое неотрицательное число, записываемое в заголовках протоколов транспортного уровня, соответствующее определённому хосту. Например, <code>3000</code> или <code>80</code></dd>
          <dt>Путь</dt>
          <dd>уточняющая информация о месте нахождения ресурса, зависящая от протокола. Например, <code>/</code> или <code>store</code></dd>
        </dl>
        <h3>Теперь рассмотрим два основных подхода к роутингу — это необходимо, чтобы понимать, какую задачу решает react-router-dom</h3>
        <h4>Роутинг на стороне сервера</h4>
        <p>Это самый первый механизм роутинга, который использовался повсеместно</p>
        <p>Если рассмотреть его абстрактно, то работал он примерно так:</p>
        <ol>
          <li>На сервер приходит запрос на получение ресурса по указанному URL</li>
          <li>Сервер отправляет ответ в котом находится либо запрошенный ресурс, либо ошибка</li>
        </ol>
        <p>А вот так это выглядело во времена раннего интернета при использовании браузера</p>
        <ol>
          <li>Пользователь вводит адрес сайта (URL) в браузерную строку и нажимает Enter</li>
          <li>На сервер отправляется запрос на получение нужной страницы (ресурса)</li>
          <li>Сервер формирует HTML-документ и возвращает его клиенту (браузеру, откуда пользователь отправил запрос)</li>
          <li>Браузер (клиент) получает ответ с сервера, загружает его и отображает</li>
          <li>Пользователь видит готовую страницу у себя в браузере</li>
        </ol>
        <h4>Роутинг на стороне клиента</h4>
        <p>Такой способ роутинга пришёл на замену серверному роутингу по одной простой причине — сайты стали более динамичными.</p>
        <p>В наше время вполне нормально видеть сайт, содержимое которого меняется в ответ на действия пользователя и при этом нет обновлений страницы. При использовании роутинга на стороне сервера это было бы невозможно, а при роутинге на стороне клиента — возможно.</p>
        <p>Роутинг на стороне клиента работает просто — вся логика сопоставления URL с нужным ресурсом описывается на стороне клиента на JavaScript при помощи History API.</p>
        <p>Доступ к History API можно получить через свойство <code>history</code> глобального объекта <code>window</code>. Не будем углубляться в тонкости работы с ним, посмотрим лишь на то, какие основные возможности оно нам предоставляет:</p>
        <ul>
          <li>Переместиться куда угодно в истории (<code>history.back()</code>, <code>history.forward()</code>, <code>history.go(n)</code>)</li>
          <li>Добавить новую запись в историю (<code>history.pushState(state, title, url?)</code>)</li>
          <li>Перезаписать определённую запись в истории (<code>history.replaceState(state, title, url?)</code>)</li>
        </ul>
        <p>
          Здесь <code>state</code> — это объект, описывающий состояние записи в истории, хранить в нём можно что угодно; <code>title</code> — это заголовок страницы; <code>url</code> — URL того ресурса, который хотим показать (параметр необязательный, потому что порой нужно лишь поменять <code>state</code> текущего ресурса). 
        </p>
        <p>Сочетая операции над историей, можно реализовать полноценную маршрутизацию (роутинг) на стороне клиента. Собственно, так этот роутинг и работает.</p>
        <h3>React Router</h3>
        <p>Библиотека react-router, лежащая в основе библиотеки react-router-dom, выполняет одну важную функцию — упрощает процесс разработки роутинга на стороне клиента. И далее мы увидим, на примере текущего сайта, как работает react-router-dom.</p>
        <p>
          <strong>Важное замечание!</strong> 
          Библиотека react-router развивается крайне активно и её разработчики очень любят от версии к версии сильно менять подход к работе с их библиотекой. Нынешняя актуальная версия (6.4) хоть и стабильная, но крайне мало где используются основные новвоведения из неё.
          Потому здесь и далее будет показан код, актуальный как для версии 6.4, так и для всей текущей мажорной версии (6).
        </p>
        <h4>Как работать с react-router-dom</h4>
        <p>Чтоб роутинг при помощи React Router в принципе стал возможен в вашем React-приложении, необходимо использовать компонент <code>BrowserRouter</code>:</p>
        <pre><code>
          {`import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
`}
        </code></pre>
        <p>Оборачивая приложение <code>{`<App />`}</code> в <code>{`<BrowserRouter />`}</code>, мы даём доступ React Router к отслеживанию навигации и манипуляции с ней из любой точки приложения. А именно это нам и нужно.</p>
        <p>Теперь мы можем создавать маршруты, для этого есть компонент <code>Route</code>, а для группирования маршрутов используется компонент <code>Routes</code>.</p>
        <p>Давайте сразу взглянем на всё содержимое файла App.tsx:</p>
        <pre><code>
          {`import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthLayout, MainLayout, ProfileLayout, StoreLayout } from './layouts';
import { AboutPage, AuthPage, BagPage, ForgotPasswordPage, MainPage, NotFoundPage, ProductPage, ProductsPage, ProfilePage, PurchasePage } from './pages';
import { LoggedRouteProtector, UnloggedRouteProtector } from './routeProtectors';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<MainPage />}/>
          <Route path='/about' element={<AboutPage />}/>
        </Route>
        <Route path='/store' element={<StoreLayout />}>
          <Route index element={<ProductsPage />}/>
          <Route path=':product' element={<ProductPage />}/>
        </Route>
        <Route path='/auth' element={<LoggedRouteProtector page={AuthLayout} />}>
          <Route index element={<AuthPage />}/>
          <Route path='forgot-password' element={<ForgotPasswordPage />}/> 
        </Route>
        <Route path='/profile' element={<UnloggedRouteProtector page={ProfileLayout} />}>
          <Route index element={<ProfilePage />}/>
        </Route>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
}

export default App;
`}
        </code></pre>
        <p>
          Как видно из кода, в App.tsx нет никакой логики, кроме логики роутинга. Все страницы сайта импортируются и используются как React-компоненты, привязываясь к определённым путям внутри элементов <code>{`Route`}</code>.
          Рассуждая глобально, способы маршрутизации (маршруты) можно разбить на следующие: <i>Обычные</i> и <i>Динамические</i>. При этом динамические включают в себя и маршруты с запросами и параметрами, но их мы здесь рассматривать не будем.
          Стоит добавить, что частой практикой в реальных проектах является создание <i>защищённых</i> маршрутов (требующих аутентификации, например), потому рассмотрим их здесь тоже. <i>Защищёнными</i> могут быть как <i>обычные</i>, так и <i>динамические</i> маршруты. 
        </p>
        <h4>Обычные маршруты</h4>
        <p>Сейчас мы находимся на главной странице (Main Page), расположенной по адресу <code>'/'</code>. Это самый базовой из маршрутов и он является обычным, не динамическим. Увидеть в коде это можно, если посмотреть на первый из роутов (Route):</p>
        <pre><code>
          {`<Route path='/' element={<MainLayout />}>
  <Route index element={<MainPage />}/>
  <Route path='about' element={<AboutPage />}/>
</Route>`}
        </code></pre>
        <p>
          Здесь сразу бросается в глаза интересная концепция из React Router — возможность создавать вложенные маршруты, при этом родительский маршрут будет перенаправлять на вложенный маршрут, у которого указан пропс <code>index</code>.
          Это очень удобная и полезная возможность, она позволяет создавать Layout и использовать его для группы страниц, связанных по какому то принципу. 
          <strong>Layout</strong> — это некоторая базовая основа, на которую опираются все вложенные страницы. 
          В Layout могут быть описаны базовые стили, может совершаться конфигурирование базовых и общих для всех вложенных страниц параметров, могут вызываться базовые подключения (например, к вебсокетам).
        </p>
        <p>
          Создание обычных маршрутов очень простое — путь указывается как это обычно делается в любых файловых системах.
        </p>
        <h4>Динамические маршруты</h4>
        <p>Динамические маршруты — это те, адрес которых может меняться в определённой своей части (частях).</p>
        <p>Вероятно, это звучит сложно, потому лучше посмотрим на пример, взятый из страницы <code>/store</code>:</p>
        <pre><code>
          {`<Route path='/store' element={<StoreLayout />}>
  <Route index element={<ProductsPage />}/>
  <Route path=':product' element={<ProductPage />}/>
</Route>`}
        </code></pre>
        <p>
          В этом примере есть только один динамический маршрут, вот он: <code>{`<Route path=':product' element={<ProductPage />}/>`}</code>. 
          Динамичность его в том заключается, что <code>product</code>, по сути, это лишь переменная, принимающая в себя любое строковое значение.
        </p>
        <p>Создав такой маршрут, вы сделали все адреса вида <code>{`/store/<any_name>`}</code> возможными. В этом и заключается вся суть динамических маршрутов.</p>
        <p>Чтоб проверить динамические маршруты в действии, перейдите на страницу Store и там переходите на страницы продуктов. И не забывайте смотреть в адресную строку браузера.</p>
        <h4>Некоторые замечания</h4>
        <ol>
          <li>
            <p>
              Всегда стоит помнить, что символ <code>'/'</code> не нужно указывать в начале вложенного маршрута, ибо если так сделать, то вложенный маршрут будет считаться абсолютным и может возникнуть конфликт:
            </p>
            <code style={{color: 'red'}}>Uncaught Error: Absolute route path "/:product" nested under path "/store" is not valid. An absolute child route path must start with the combined path of all its parent routes.</code>
          </li>
          <li>
            <p>
              Создавая динамические маршруты, помните, что внутри переменной, идущей за символом <code>':'</code>, может быть буквально что угодно (в виде строки, конечно). 
              И если вы всё же хотите как-то ограничить динамические маршруты на своём сайте, то вам придётся делать проверку адреса самостоятельно, без средств React Router. 
            </p>
            <p>
              Делать это порой нужно для тех случаев, когда у вас, например, есть список товаров, который вы отображаете на сайте. И при нажатии на товар, вы попадаете на отдельную страницу товара.
              И если пользователь перейдёт на страницу несуществующего товара и при этом с вашей стороны не будет сделано никакой проверки на существование такой страницы, то пользователь увидит стандартный белый экран.
              Чтоб такое избежать, добавьте проверку на странице товара, где будет проверяться, есть ли указанный в адресе товар в списке существующих (проверяйте по id/uuid/имени, как вам угодно). 
            </p>
          </li>
        </ol>
        <h4>Защищённые маршруты</h4>
        <p>
          Использование защищённых маршрутов крайне распространено — всем и всегда хочется разбивать пользователей на группы, давать каждой группе свой определённый набор прав и т.д.
          Самый простой пример защищённого маршрута — это ваш личный кабинет на каком либо сайте. Доступа к этому маршруту нет ни у кого, пока не будут введены и отправлены правильные идентификационные параметры (логин и пароль, например).
        </p>
        <p>
          Стоит понимать, что защищённые маршруты это не специфика React Router и что нет какого-то универсального простого способа их сделать через React Router. 
          Но зато имеются все инструменты, чтобы довольно просто реализовать их самостоятельно. 
        </p>
        <p>В коде ниже представлены два защищённых маршрута:</p>
        <pre><code>
        {`<Route path='/auth' element={<LoggedRouteProtector page={AuthLayout} />}>
  <Route index element={<AuthPage />}/>
  <Route path='forgot-password' element={<ForgotPasswordPage />}/> 
</Route>
<Route path='/profile' element={<UnloggedRouteProtector page={ProfileLayout} />}>
  <Route index element={<ProfilePage />}/>
</Route>`} 
        </code></pre>
        <p>
          Маршрут <code>/auth</code> защищён от попадания неаутентифицированных пользователей, а маршрут <code>/profile</code> — от попадания аутентифицированных пользователей.
          Для реализации такого поведения к элементам, которые рендерятся при попадании на соответствующий адрес, добавлены обёртки — т.н. route protectors. 
          Реализация у них одинаковая, рассмотрим один из них:
        </p>
        <pre><code>
        {`import React from "react";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
  page: React.ComponentType;
}

const UnloggedRouteProtector = ({ page: Page }: Props) => {
  // Обычно информация о правах пользователя находится в хранилище по типу Redux или MobX,
  // и тогда получение информации о том, авторизован пользователь или нет, выглядит, например, вот так:
  // const { isAuthtorized, status } = useAppSelector((state) => state.auth);
  // однако в данном случае, чтоб не перегружать пример, воспользуемся для передачи данных обычным localStorage
  const isAuthtorized = JSON.parse(localStorage.getItem('auth') || 'false');
  const location = useLocation();

  // if (status === "pending") {
  //   // Возвращать тут можно что угодно, это делается лишь для того, чтоб пользователь лучше понимал, что происходит
  //   return <div>loading...</div>;
  // }
  
  if (isAuthtorized) return <Page />;
  // если же пользователь не авторизован, он будет перенаправлен на страницу авторизации
  return <Navigate to={"/auth"} state={{from: location.pathname}} />;
};

export default UnloggedRouteProtector;`} 
        </code></pre>
        <p>
          Код выше — это UnloggedRouteProtector.tsx, он защищает маршрут <code>/profile</code>. 
          Аналогичным образом работает и LoggedRouteProtector.tsx, защищающий маршрут <code>/auth</code>, 
          вот единственное, что в нём отличается от примера выше: 
        </p>
        <pre><code>
        {`if (!isAuthtorized) return <Page />;
// если же пользователь авторизован, он будет перенаправлен на страницу откуда пришёл (если есть информация о ней),
// или на главную страницу
return <Navigate to={\`\${locationState?.from ? locationState.from : '/'}\`}/>;`} 
        </code></pre>
        <p>
          Чтоб увидеть защищённые маршруты в действии, перейдите на страницу Profile. 
          Если в вашем локальном хранилище (localStorage) нет записи <code>'auth'</code> или же она есть и её значение равно <code>'false'</code>, 
          то вместо страницы Profile вы попадёте на страницу Auth. А если нажмёте на кнопку login, то будете авторизованы, страница обновится и вы попадёте на страницу Profile,
          и, как бы вы не пытались, но на любую из страниц, адрес которой начинается с <code>/auth</code> (например, <code>/auth/forgot-password</code>), вы не попадёте. 
          Чтоб попасть туда, вам придётся разлогиниться (кнопка logout на странице Profile).
         </p>
         <h4>useNavigate, Navigate и useLocation</h4>
         <p>
          Рассматривая защищённые роуты, вы могли заметить использование двух кастомных хуков и одного компоненты, импортируемых из react-router-dom: 
          хуки <code>useNavigate</code>, <code>useLocation</code> и компонент <code>Navigate</code>. 
          Это самые часто используемые и самые базовые хуки и компоненты, необходимые для построения простейшего роутинга в приложении.
          Рассмотрим каждый из них
         </p>
         <dl>
          <dt>useNavigate</dt>
          <dd>
            Этот хук возвращает функцию, которая позволяет программно осуществлять навигацию пользователя. 
            <p>
              Например, в данном приложении с использованием этого хука созданы кнопки навигационной панели. 
              Вот так выглядит компонент NavButton.tsx:
            </p>
            <pre><code>
            {`import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

interface NavButtonProps {
  to: string;
  label: string;
}

const NavButton = ({to, label}: NavButtonProps) => {
  const navigate = useNavigate();

  const onNavBtnClick = () => {
    navigate(to);
  };

  return (
    <button className={styles.conatiner} onClick={onNavBtnClick}>
      { label }
    </button>
  );
};

export default NavButton;`} 
            </code></pre>
            <p>
              Навигация здесь происходит внутри функции <code>onNavBtnClick</code>, а адрес, на который нужно перейти,
              передаётся в кнопку как пропс.
              Подробнее про хук useNavigate вы можете прочесть в <a href="https://reactrouter.com/en/main/hooks/use-navigate" target='_blank' rel="noreferrer">документации React Router</a>.
            </p>
          </dd>
          
          <dt>Navigate</dt>
          <dd>
            Компонент Navigate выполняет ту же роль, что и хук useNavigate. По сути, этот компонент — обёртка вокруг хука useNavigate.
            <p>
              Использовать можно как его, так и непосредственно хук useNavigate, это зависит только от ваших предпочтений. 
              Однако, если вы пишете ваше React приложение на классовых компонентах, то хуков у вас в арсенале не будет и 
              компонент Navigate полностью заменит useNavigate. 
            </p>
            <p>
              Подробнее про компонент Navigate вы можете прочесть в <a href="https://reactrouter.com/en/main/components/navigate" target='_blank' rel="noreferrer">документации React Router</a>.
            </p>
          </dd>

          <dt>useLocation</dt>
          <dd>
            Этот хук возвращает объект <code>location</code>, содержащий некоторую информацию о текущей странице. У этого объекта следующие поля:
            <dl>
              <dt>location.pathname</dt>
              <dd>это строка, содержащая символ <code>'/'</code>, за которым следует остальная часть URL-адреса до символа <code>'?'</code></dd>
              <dt>location.search</dt>
              <dt>location.hash</dt>
              <dt>location.key</dt>
              <dd>это параметры, которые здесь рассматриваться не будут, но вы можете прочесть о них в <a href="https://github.com/remix-run/history/blob/main/docs/api-reference.md#location" target='_blank' rel="noreferrer">документации History API</a></dd>
              <dt>location.state</dt>
              <dd>
                это хранилище информации, никак не влияющей на URL, но передающейся при переходе на конкретный URL.
                <p> 
                  Хранить там можно любую информацию и при этом со стороны History API нет ограничения на её количество. 
                  Однако, такое ограничение, вероятно, есть со стороны браузеров. 
                  Достоверно неизвестно, какое ограничение у каждого из браузеров для размера объекта location.state, однако, 
                  есть информация, что раньше в документации Firefox было указано, что максимум это 640kB. Но сейчас этой информации нет
                  и потому стоит полагаться лишь на здравый смысл и не использовать <code>location.state</code> для хранения и передачи больших объемов
                  критически важных для пользователя данных.
                </p>
              </dd>
            </dl>
            <p>
              Например, в данном приложении с использованием этого хука и объекта <code>location.state</code> 
              данные из страницы <code>/store</code> пробрасываются в страницу <code>/store/:product</code> 
            </p>
            <p>Вот как выглядит получение и использование данных из <code>location.state</code> на странице продукта (ProductPage.tsx):</p>
            <pre><code>
            {`import React from "react";
import { useLocation } from "react-router-dom";
import { BackNavButton } from "../../components";
import styles from "./styles.module.css";

const ProductPage = () => {

  const location = useLocation();

  const { name, phrase, price } = location.state;
  
  return (
    <div className={styles.container}>
      <div className={styles.topRow}>
        <h2>Product Page</h2>
      </div>
      <div className={styles.productInfo}>
        <h2>{ name }</h2>
        <h4>{ phrase }</h4>
        <h3>\${ price }</h3>
      </div>
      <BackNavButton />
    </div>
  )
};

export default ProductPage;`} 
            </code></pre>
            <p>А записываются данные в <code>location.state</code> в компоненте продукта (Product), используемом на странице <code>/store</code>:</p>
            <pre><code>
            {`import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

interface Props {
  name: string;
  phrase?: string;
  price: number;
}

const Product = ({ name, phrase, price }: Props) => {

  const navigate = useNavigate();

  const generateNameForURL = () => {
    return name.trim().replaceAll(' ', '_');
    // это выражение используется, чтоб убрать пробелы из названия и заменить их на нижние подчерквания
  }

  const onProductClick = () => {
    navigate(
      generateNameForURL(), 
      {state: {name, phrase, price}}
    );
  };

  return (
    <div className={styles.container} onClick={onProductClick}>
      <h2>{ name }</h2>
      <h4>{ phrase }</h4>
      <h3>\${ price }</h3>
    </div>
  );
};

export default Product;`} 
            </code></pre>
            <p>
              Запись происходит непосредственно при переходе на другую страницу — содержимое хранилища записывается как параметр функции <code>navigate</code>:
              <code>{`navigate(generateNameForURL(), {state: {name, phrase, price}});`}</code>.
            </p>
            <p>
              Вариаций того, как использовать это хранилище и как в целом работать с хуком useLocation, великое множество. Всё зависит от того, что вы хотите сделать.
              Подробнее про хук useLocation вы можете прочесть в <a href="https://reactrouter.com/en/main/hooks/use-location" target='_blank' rel="noreferrer">документации React Router</a>.
            </p>
          </dd>
        </dl>
        <h2>Послесловие</h2>
        <p>
          Этот сайт является базовым примером использования библиотеки react-router-dom и потому в нём не затронуты многие интересные темы. 
          Например, тема запросов в URL (?), тема якорей в URL (#) и работа с ними в React Router. Подробнее разобраться с ними вы можете 
          в <a href="https://reactrouter.com/en/main/hooks/use-location" target='_blank' rel="noreferrer">документации React Router</a>.
          Изучите хуки <code>useParams</code> и <code>useMatch</code>, подробнее рассмотрите History API чтоб лучше работать с хуком 
          <code>useLocation</code>.
        </p>
        <p>
          Кроме того, в данном тексте было уделено мало внимания теме построения навигационной панели и теме лэйаутов (Layouts).
          Чтобы подробнее с ними разобраться, изучите 
          <a href="https://github.com/I194/react-router-example" target='_blank' rel="noreferrer">код приложения</a>
          и посмотрите в документации React Router на компоненты
          <a href="https://reactrouter.com/en/main/components/outlet" target='_blank' rel="noreferrer">Outlet</a> и
          <a href="https://reactrouter.com/en/main/components/nav-link" target='_blank' rel="noreferrer">NavLink</a>.
          Важный момент: компонент NavLink не использовался в данном приложении, однако он довольно часто используется в реальных проектах. 
        </p>
      </div>
    </div>
  )
};

export default MainPage;

