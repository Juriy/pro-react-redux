В этом репозитории собран исходный код для проектов онлайн-курса "React+Redux - Профессиональная Разработка".

ВНИМАНИЕ! SWAPI.co больше не поддерживается
------
------
В нескольких упражнениях этого курса мы использовали сервис swapi.co для того, чтобы получать данные из API. SWAPI.co больше не поддерживается автором. Адрес нового сервиса - https://swapi.dev. Пока что код не обновлён, поэтому примеры работы с API не будут работать "из коробки". Чтобы примеры заработали, нужно обновить путь в файле `src/services/swapi-service.js`:

```
//  _apiBase = 'https://swapi.co/api';
// нужно заменить на
  _apiBase = 'https://swapi.dev/api';
```

Структура репозитория
------
------
Структура репозитория - очень проста. У каждого проекта есть своя папка, в папке проекта находятся под-папки. В каждой из них - состояние проекта в какой-то момент курса. Перед именем каждой папки есть чисто, это необходимо для сортировки папок в хронологическом порядке.

Ниже можно найти список папок и описание, к какому уроку пренадлежит код. Код записан в версии *после* того урока, который указан в списке. То есть, в папке `todo/10-elements` будет код, таким каким он был *после* урока "React Элементы".

Приложение "Список Дел" (первые 5 разделов курса)
------

**00-empty-react-project** - пустой React проект с которого начинается разработка. Раздел 3, урок "Создаём пустой React проект"

**10-elements** - Раздел 3, "React Элементы"

**20-components** - Раздел 3, "React Компоненты"

**30-project-structure** - Раздел 3, "Структура React Проекта"

**40-props** - Раздел 3, "Props - свойства компонентов"

**50-arrays-as-props** - Раздел 3, "Массивы, как свойства компонентов"

**60-collections-and-keys** - Раздел 3, "Коллекции и ключи"

**70-importing-css** - Раздел 3, "Как импортировать css"

**80-folder-per-component** - Раздел 3, "Структура React проекта - часть 2"

**90-events-and-state** - Раздел 4, "Как работает setState()" (в первых нескольких уроках 4-го раздела обновления в коде минимальны, поэтому несколько уроков вместе)

**100-adding-removing-items** - Раздел 4, "setState() - редактирование элементов"

**120-handling-forms** - Раздел 4, "Работа с формами"

**todo-final** - весь код из раздела 5: "Заканчиваем Todo App"

Приложение Star DB
------

**00-basic-project-structure** - Раздел 6, "Создаём компоненты StarDB"

**10-transforming-api-data** - Раздел 6, "Трансформация данных API"

**20-handling-api-errors** - Раздел 6, "Обработка ошибок сети в компоненте"

**30-lifecycle-intro** - Раздел 7, "Жизненный цикл - введение"

**40-component-did-mount-practice** - Раздел 7, "Используем на практике componentDidMount()"

**50-component-did-update** - Раздел 7, "Используем на практике componentDidUpdate()"

**60-error-boundries** - Раздел 7, "Используем componentDidCatch() на практике"

**70-passing-function-as-data-sources** - Раздел 8, "Использование функций"

**80-children** - Раздел 8, "Children"

**90-cloning-elements** - Раздел 8, "Клонирование элементов"

**100-higher-order-components** - Раздел 8, "Компоненты высшего порядка (HOC)"

**110-hoc-composition** - Раздел 8, "Композиция компонентов высшего порядка"

**120-context** - Раздел 8, "Использование Context API"

**130-hoc-context** - Раздел 8, "Трансформация props в компонентах высшего порядка"

**140-dynamic-context-switch** - Раздел 8, "Обновление контекста"

**150-prop-types** - Раздел 8, "Библиотеки prop-types"

**160-basic-routing** - Раздел 9, "Основы react-router"

**170-how-routing-works** - Pаздел 9, "Как работает Route"

**180-relative-paths** - Pаздел 9, "Относительные пути"

**190-relative-paths** - Pаздел 9, "Switch (обработка несуществующих адресов)"


Приложение Redux Sandbox (раздел 10)
------

**10-redux-ui** - Pаздел 10, "UI для Redux"

**20-bind-action-creators** - Pаздел 10, "bindActionCreators()"

**30-react-with-redux** - Pаздел 10, "Использование React и Redux" 

**40-connect-map-state-to-props** - Pаздел 10, "react-redux и функция connect()"

**50-map-dispatch-to-props** - Pаздел 10, "mapDispatchToProps()"

**60-map-dispatch-to-props-as-object** - Раздел 10, "mapDispatchToProps в виде объекта"


Приложение ReStore
------

**10-create-basic-components** - Pаздел 11, "Вспомогательные компоненты"

**20-redux-components** - Pаздел 11, "Redux компоненты"

**30-connecting-components** - Pаздел 11, "Отправка действий в Redux Store (action dispatch)"

**40-adding-styles** - Pаздел 11, "Стили"

**50-async-data** - Pаздел 11, "Работа с асинхронными данными"

**60-error-handling** - Pаздел 11, "Обработка ошибок"

**80-update-element-in-array** - Pаздел 11, "Обновление элементов в массиве"

**90-delete-element-from-array** - Pаздел 11, "Удаление элементов из массива"

**100-organizing-reducer-code** - Pаздел 11, "Организация кода reducer'а"

**110-store-enhancers** - Pаздел 11, "Store Enhancers"

**120-middleware** - Pаздел 11, "Middleware"

**130-thunk** - Pаздел 11, "Thunk"


Сборка React приложений - Babel (build-sandbox)
------

**10-empty-project** - Pаздел 12, "Создаём новый проект"

**20-babel-config-files** - Pаздел 12, "Конфигурация Babel"

**30-presets** - Pаздел 12, "Babel Presets"

**40-jsx** - Pаздел 12, "Работа с JSX" + "Организация зависимостей"


Сборка React приложений - WebPack (build-sandbox)
------

**50-webpack-loader** - Pаздел 13, "WebPack Loader"

**60-file-types** - Pаздел 13, "Loader'ы для разных типов файлов"

**70-babel-loader** - Pаздел 13, "React и Babel Loader"

**80-loader-composition** - Pаздел 13, "Композиция Loader'ов"

**90-html-templates** - Pаздел 13, "HtmlWebpackPlugin - использование шаблонов"

**100-dev-server** - Pаздел 13, "Wepback Dev Server"

**110-prod-config** - Pаздел 13, "Конфигурация для production"
