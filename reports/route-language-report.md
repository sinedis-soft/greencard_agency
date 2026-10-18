# Отчёт проверки языка маршрутных страниц

Сформирован: 2026-10-18T09:12:14.624Z

Эвристическая проверка выявляет подозрительные страницы. Окончательное решение принимает человек.

| URL | Ожидаемый язык | Определённый язык | Доля несоответствия | Результат |
|---|---:|---:|---:|---|
| `/ar/route/algeria/france` | ar | ar | 2.9% | OK |
| `/ar/route/belarus/lithuania` | ar | ar | 3.5% | ПРОВЕРИТЬ |
| `/ar/route/belarus/poland` | ar | ar | 3.1% | ПРОВЕРИТЬ |
| `/ar/route/georgia/bulgaria` | ar | ar | 4.3% | ПРОВЕРИТЬ |
| `/ar/route/kazakhstan/poland` | ar | ar | 7.3% | OK |
| `/ar/route/uae/bulgaria` | ar | ar | 3.3% | OK |
| `/ar/route/uae/greece` | ar | ar | 3.0% | OK |
| `/be/route/belarus/lithuania` | be | be | 2.4% | OK |
| `/be/route/belarus/poland` | be | be | 2.2% | OK |
| `/be/route/georgia/romania` | be | be | 4.4% | OK |
| `/en/route/albania/bulgaria` | en | en | 0.0% | OK |
| `/en/route/algeria/france` | en | en | 0.0% | OK |
| `/en/route/belarus/lithuania` | en | en | 0.0% | OK |
| `/en/route/belarus/poland` | en | en | 0.0% | OK |
| `/en/route/georgia/bulgaria` | en | en | 0.0% | OK |
| `/en/route/georgia/greece` | en | en | 0.0% | OK |
| `/en/route/georgia/romania` | en | en | 0.0% | OK |
| `/en/route/kazakhstan/poland` | en | en | 0.0% | OK |
| `/en/route/uae/bulgaria` | en | en | 0.0% | OK |
| `/en/route/uae/greece` | en | en | 0.0% | OK |
| `/fa/route/belarus/poland` | fa | fa | 3.1% | OK |
| `/he/route/belarus/poland` | he | he | 4.0% | OK |
| `/hy/route/belarus/lithuania` | hy | hy | 2.5% | OK |
| `/hy/route/belarus/poland` | hy | hy | 2.6% | OK |
| `/hy/route/georgia/bulgaria` | hy | hy | 3.2% | OK |
| `/ka/route/belarus/lithuania` | ka | ka | 2.5% | OK |
| `/ka/route/belarus/poland` | ka | ka | 2.6% | OK |
| `/ka/route/georgia/bulgaria` | ka | ka | 3.3% | OK |
| `/ka/route/georgia/greece` | ka | ka | 5.6% | OK |
| `/ka/route/georgia/romania` | ka | ka | 5.0% | OK |
| `/kk/route/belarus/poland` | kk | kk | 2.5% | OK |
| `/kk/route/georgia/romania` | kk | kk | 5.8% | OK |
| `/kk/route/kazakhstan/poland` | kk | kk | 5.3% | OK |
| `/pl/route/belarus/poland` | pl | pl | 0.0% | OK |
| `/ru/route/albania/bulgaria` | ru | ru | 8.5% | ПРОВЕРИТЬ |
| `/ru/route/algeria/france` | ru | ru | 3.6% | OK |
| `/ru/route/belarus/lithuania` | ru | ru | 2.5% | OK |
| `/ru/route/belarus/poland` | ru | ru | 2.3% | OK |
| `/ru/route/georgia/bulgaria` | ru | ru | 3.1% | OK |
| `/ru/route/georgia/greece` | ru | ru | 5.8% | OK |
| `/ru/route/georgia/romania` | ru | ru | 3.5% | OK |
| `/ru/route/kazakhstan/poland` | ru | ru | 4.3% | OK |
| `/ru/route/uae/bulgaria` | ru | ru | 4.9% | OK |
| `/ru/route/uae/greece` | ru | ru | 4.8% | OK |
| `/sq/route/albania/bulgaria` | sq | sq | 0.0% | OK |
| `/tr/route/belarus/poland` | tr | tr | 0.0% | OK |

## Требуют ручной проверки

- `/ar/route/belarus/lithuania`: description: определён язык fa
- `/ar/route/belarus/poland`: title: определён язык fa; description: определён язык fa
- `/ar/route/georgia/bulgaria`: title: определён язык fa
- `/ru/route/albania/bulgaria`: повышенная доля несоответствия

## Итог

- Проверено страниц: 46.
- Критические несоответствия: 0.
- Требуют ручной проверки: 4.
