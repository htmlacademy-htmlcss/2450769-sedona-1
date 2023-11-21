# Личный проект «Седона»

[![Project check][check-image]][check-url]

* Студент: [Андрей Катасонов](https://up.htmlacademy.ru/htmlcss-individual/1/user/2450769).
* Наставник: [Сергей Артёмов](https://htmlacademy.ru/profile/firefoxic).

---

## Установка зависимостей проекта

В локальном репозитории уже можно писать разметку страниц, стили и создавать прочие файлы. Но разрабатывать проект будет удобнее с дополнительными инструментами (зависимостями). А для этого их установить.

### 1. Терминал

Для установки зависимостей понадобится терминал. В Linux и macOS он уже есть, а в Windows лучше установить _git-bash_, который идёт в комплекте с самим [Git](https://git-scm.com/download/windows).

### 2. Node.js

Зависимости работают в среде _node.js_, которую тоже нужно установить, но лучше не с помощью установщика с официального сайта, а через менеджер версий ноды — nvm. Для его установка выполни в терминале:

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

Перезапусти терминал и убедись, что _nvm_ работает:

```shell
nvm -v
```

Команда должна вывести версию _nvm_ — `0.39.5`.

Теперь установи сам _ноду_:

```shell
nvm install --lts --default
```

После этого выполни:

```shell
node -v
```

Команда должна вывести версию _node.js_, например `v20.9.0`, что означает успешность установки.

### 3. Зависимости

Вместе с нодой стал доступен её менеджер пакетов — _npm_. Но мы будем использовать его альтернативу — _pnpm_. Чтобы его включить достаточно активировать _corepack_ (часть _node.js_):

```shell
corepack enable
```

После этого для установки зависимостей проекта в терминале, находясь в директории проекта, выполни:

```shell
pnpm i
```

### 3. Работа с проектом

После установки зависимостей можно запускать линтинг:

```shell
pnpm lint
```

И сборку для разработки:

```shell
pnpm start
```

При этом запустится и локальный сервер, а в брауезере откроется разрабатываемый сайт и будет обновляться при обновлении файлов в проекте.

---

<a href="https://htmlacademy.ru/intensive/htmlcss"><img align="left" width="50" height="50" alt="HTML Academy" src="https://up.htmlacademy.ru/static/img/intensive/htmlcss/logo-for-github-2.png"></a>

Репозиторий создан для обучения на профессиональном онлайн‑курсе «[HTML и CSS. Профессиональная вёрстка сайтов](https://htmlacademy.ru/intensive/htmlcss)» от [HTML Academy](https://htmlacademy.ru).

[check-image]: https://github.com/htmlacademy-htmlcss/2450769-sedona-1/workflows/Project%20check/badge.svg?branch=master
[check-url]: https://github.com/htmlacademy-htmlcss/2450769-sedona-1/actions
