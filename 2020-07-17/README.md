# Taller/Q&A - 17 Jul 2020 - git rebase - @lupomontero

[![BOG001: Taller/Q&A - 17 Jul 2020 - git rebase - @lupomontero](https://img.youtube.com/vi/vyj09GZKmk8/0.jpg)](https://youtu.be/vyj09GZKmk8)

## Agenda

* **`git rebase`** - sugerida por estudiantes en sesión anterior.
  - Dos maneras de integrar cambios entre ramas en git: `merge` y `rebase`.
  - Reabase es cambiar la _base_ de una rama, para que
    parezca que la rama comienza a diverger desde un punto distinto...
  - Rebase es el proceso de mover o combinar una secuencia de commits sobre un
    nuevo _commit base_.
  - Historia lineal (mejor análisis de la historia - log, bisect, etc ...)
  - Feature workflow (ejemplo)
  - Haciendo rebase de cambios de _upstream_ sobre una rama local (merge
    agregaría commits superfluos).
  - NO HACER REBASE DE HISTORIA PÚBLICA (rebase reemplaza los commits originales
    con commits nuevos!!!).
  - Re-escribir la historia: standard vs interactive.

## Links

* [git-rebase - Docs](https://git-scm.com/docs/git-rebase)
* [git rebase tutorial - Atlassian](https://www.atlassian.com/es/git/tutorials/rewriting-history/git-rebase)
* [Fusión frente a reorganización - Atlassian](https://www.atlassian.com/es/git/tutorials/merging-vs-rebasing)