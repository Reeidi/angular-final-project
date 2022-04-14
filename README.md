# Art School

## Увод

Art School е проект, създаден за арт център за деца, където те и техните родители могат да се запознаят със центъра и с преподавателите в него, да разглеждат творбите на други деца, както и да качват своите собствени произведения.

## Какво представлява?

Art School е web application, базиран на `Angular` и използващ `Node.js` back-end с MongoDB база данни. Тематиката е уебсайт на арт център за деца.

## Функционалности

### `1.` Уеб приложението има няколко статични страници с информация за центъра, преподавателите и организираните събития.

### `2.` Възможност децата да споделят свои рисунки.
Информацията за рисунките се записва и в последствие изтегля от back-end-а. Само регистрирани потребители имат правото да качват снимки.

### `3.` Галерия с рисунките на децата.
Галерията е достъпна за регистрирани и нерегистрирани потребители.

### `4.` Харесване на рисунки.
Регистрираните потребители имат възможността да "харесват" рисунките в Галерията. Нерегистрираните потребители могат само да виждат колко харесвания има всяка от тях.

### `5.` "Моите рисунки".
Регистрираните потребители имат достъп до страница, съдържаща само техните рисунки.

## Екстри

### `1.` При качване или редакция на рисунка потребителя може да я види в реално време.

### `2.` Страницата за контакти освен адрес, телефон и имейл за връзка, съдържа и карта за да могат хората по-лесно да ни намерят.

#
# Имплементация

## Структура

Art School е `Angular` проект, който комуникира по HTTP със back-end сървър и съответно страниците и тяхното съдържание са разделени на компоненти в няколко модула.

### `1.` Основни системи
 - Authentication
    - Аутентикацията в приложението се случва през `UserService`, който използва `StorageService` за да съхранява информация за текущия потребител.
    - Аутентикацията пред сървъра се случва чрез `TokenInterceptor`, който добавя token-а на потребителя към всяка заявка (ако има такъв).

 - Routing
    - Рутиране на две нива - основното в `AppModule` и допълнително за `DrawingsModule`, което позволява втория да се зареди lazy когато потрябва.
    - Навигацията между страниците става чрез **anchor tags** с `routerLink` **директива** в HTML templates или чрез `Router.navigate()` в класовете на компонентите.
    - Route guarding става чрез `AuthGuard` и `AuthorGuard` класовете. Те позволяват достъп до някои страници само на определени потребители - диния следи дали потребителя е логнат, а другия - дали потребителя е автор на отворената рисунка.

 - Error handling - за грешки, възникнали при работа със заявки към сървъра има `ErrorHandlerInterceptor`.

### `2.` Стилизация
Всеки компонент има собсвен CSS файл за стилизация. Също така в глобалния `styles.css` има няколко общи стила и се import-ват няколко CSS файла, наследени от използвания template.

### `3.` Допълнителни
Освен обособените модули и компоненти, в приложението има и други видове файлове - route guards, pipes, directives, services, interceptors. За интеграция с Google Maps е използван iframe в страницата за контакти.

### `4.` Тестове
Част от компонентите имат написани unit tests.

#

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
