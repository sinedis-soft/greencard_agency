# Отчёт canonical и hreflang

Сформирован: 2026-10-18T09:16:50.423Z

Правило x-default: английская версия, если она существует; иначе первая разрешённая локаль маршрута.

| URL | HTTP | canonical на себя | hreflang на себя | Взаимность | Результат |
|---|---:|---:|---:|---:|---|
| `/ru/route/belarus/poland` | 200 | да | да | да | OK |
| `/pl/route/belarus/poland` | 200 | да | да | да | OK |
| `/en/route/belarus/poland` | 200 | да | да | да | OK |
| `/be/route/belarus/poland` | 200 | да | да | да | OK |
| `/kk/route/belarus/poland` | 200 | да | да | да | OK |
| `/ka/route/belarus/poland` | 200 | да | да | да | OK |
| `/tr/route/belarus/poland` | 200 | да | да | да | OK |
| `/fa/route/belarus/poland` | 200 | да | да | да | OK |
| `/hy/route/belarus/poland` | 200 | да | да | да | OK |
| `/ar/route/belarus/poland` | 200 | да | да | да | OK |
| `/he/route/belarus/poland` | 200 | да | да | да | OK |
| `/ru/route/belarus/lithuania` | 200 | да | да | да | OK |
| `/en/route/belarus/lithuania` | 200 | да | да | да | OK |
| `/be/route/belarus/lithuania` | 200 | да | да | да | OK |
| `/ka/route/belarus/lithuania` | 200 | да | да | да | OK |
| `/hy/route/belarus/lithuania` | 200 | да | да | да | OK |
| `/ar/route/belarus/lithuania` | 200 | да | да | да | OK |
| `/ru/route/georgia/romania` | 200 | да | да | да | OK |
| `/en/route/georgia/romania` | 200 | да | да | да | OK |
| `/be/route/georgia/romania` | 200 | да | да | да | OK |
| `/ka/route/georgia/romania` | 200 | да | да | да | OK |
| `/kk/route/georgia/romania` | 200 | да | да | да | OK |
| `/ru/route/georgia/bulgaria` | 200 | да | да | да | OK |
| `/en/route/georgia/bulgaria` | 200 | да | да | да | OK |
| `/ka/route/georgia/bulgaria` | 200 | да | да | да | OK |
| `/hy/route/georgia/bulgaria` | 200 | да | да | да | OK |
| `/ar/route/georgia/bulgaria` | 200 | да | да | да | OK |
| `/ru/route/georgia/greece` | 200 | да | да | да | OK |
| `/en/route/georgia/greece` | 200 | да | да | да | OK |
| `/ka/route/georgia/greece` | 200 | да | да | да | OK |
| `/ru/route/kazakhstan/poland` | 200 | да | да | да | OK |
| `/kk/route/kazakhstan/poland` | 200 | да | да | да | OK |
| `/en/route/kazakhstan/poland` | 200 | да | да | да | OK |
| `/ar/route/kazakhstan/poland` | 200 | да | да | да | OK |
| `/ru/route/uae/bulgaria` | 200 | да | да | да | OK |
| `/en/route/uae/bulgaria` | 200 | да | да | да | OK |
| `/ar/route/uae/bulgaria` | 200 | да | да | да | OK |
| `/ru/route/uae/greece` | 200 | да | да | да | OK |
| `/en/route/uae/greece` | 200 | да | да | да | OK |
| `/ar/route/uae/greece` | 200 | да | да | да | OK |
| `/ru/route/albania/bulgaria` | 200 | да | да | да | OK |
| `/en/route/albania/bulgaria` | 200 | да | да | да | OK |
| `/sq/route/albania/bulgaria` | 200 | да | да | да | OK |
| `/ru/route/algeria/france` | 200 | да | да | да | OK |
| `/ar/route/algeria/france` | 200 | да | да | да | OK |
| `/en/route/algeria/france` | 200 | да | да | да | OK |

## Итог

- Проверено индексируемых URL: 46.
- Ошибочные canonical: 0.
- Несуществующие URL в hreflang: 0.
- Невзаимные hreflang: 0.
- Страницы с неправильным языком HTML: 0.
- Ошибочно созданные отсутствующие локали: 0.
