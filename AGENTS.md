# MVP SaaS — Guía para agentes OpenCode

## Stack
- **Backend**: FastAPI + SQLAlchemy async + asyncpg + Alembic (Python 3.13, uv)
- **Frontend**: React 19 + Vite 8 + TailwindCSS 4.3 + TypeScript 6 + pnpm, react-router-dom, react-i18next, lucide-react
- **BD**: PostgreSQL 16+, multi-tenant lógico por `tenant_id`, JSONB para campos multilingüe
- **Autenticación**: JWT (primario, firma tenant_id/slug/enabled_modules) + Google OAuth 2.0 (secundario)
- **Almacenamiento**: Cloudflare R2 (S3-compatible, zero egress), WebP forzado para fotos de productos
- **i18n**: landing react-i18next (es/en), menú JSONB PostgreSQL (es/en/pt), traducción asistida DeepL / AWS Translate
- **Carrito**: 100% stateless (React state, sin writes al servidor)
- **Linting**: ruff (formato + lint) y pylint (análisis extra)

## Comandos esenciales

Todos los comandos Python se ejecutan desde `backend/` con prefijo `uv run`:

```bash
cd backend
uv sync --group dev            # Instalar/actualizar dependencias
uv run uvicorn main:app --reload   # Servidor dev
uv run ruff check .             # Lint rápido
uv run ruff format .            # Formatear código
uv run ruff check . --fix       # Auto-corregir
uv run pylint main.py           # Lint extra (ejecutar desde backend/)
uv run alembic revision --autogenerate -m "mensaje"  # Crear migración
uv run alembic upgrade head     # Aplicar migraciones
uv run alembic upgrade head --sql  # Ver SQL sin aplicarlo (offline)
```

Frontend:
```bash
cd frontend
pnpm install
pnpm dev           # Servidor dev Vite
pnpm build         # Build producción
pnpm lint          # ESLint
```

## Arquitectura

```
mvp-saas/
├── backend/
│   ├── main.py          → Entry point FastAPI, CORS, monta routers
│   ├── database.py      → Engine async, session, Base, get_db()
│   ├── models/          → SQLAlchemy ORM
│   ├── schemas/         → Pydantic v2 (Create/Read/Update)
│   ├── services/        → Lógica CRUD
│   ├── routers/         → Endpoints FastAPI
│   ├── alembic/         → Migraciones
│   └── alembic.ini      → Config Alembic
└── frontend/
    └── src/             → React app
```

- **Tipo**: Monolito multi-tenant. Filtrado obligatorio por `tenant_id` en todas las consultas.
- **Almacenamiento**: Cloudflare R2 (zero egress) vía S3 API. Fotos de productos forzadas a WebP.
- **i18n**: landing con react-i18next, datos del menú en JSONB PostgreSQL.
- **Carrito**: 100% stateless (React state, sin writes al servidor).
- **Concurrencia**: async/await para I/O externa (traducciones, S3); sync para CRUD admin y seed.py.
- **Auth**: endpoints públicos GET sin token; privados (POST/PUT/PATCH/DELETE) requieren JWT + filtro `tenant_id`.
- **Caché**: endpoints públicos GET diseñados para caché (memoria o HTTP).
- **Templates menú**: 5 templates (The Minimalist, The Grid Gallery, The Dark Elegant, The Editorial, The Fast Casual).

## Convenciones

- **Rama activa**: `develop`. No commitear en `main`.
- **Docstrings/comentarios**: en español, breves.
- **Código**: nombres en inglés (snake_case Python, camelCase TS).
- **Ruff**: `line-length = 100`. Siempre pasar `ruff check` y `ruff format` antes de commit.
- **Modelos SQLAlchemy**: `Mapped` + `mapped_column`, async session, `JSON` para campos JSONB.
- **Import de módulos locales**: desde `backend/`. Siempre ejecutar comandos allí.
- **`.env`**: no se sube a git (ignorado en `.gitignore`). Usar `.env.example` como template.
- **Logging**: `echo=True` en engine SQLAlchemy para desarrollo (ver SQL en consola).
- **Borrado lógico**: solo en `products` con flag `is_deleted`.

## Conexión PostgreSQL

PostgreSQL corre en Windows, accesible desde WSL. Usar `prepend_sys_path = .` en `alembic.ini`.

## Restricciones y gotchas

- **Equipo**: 2 desarrolladores. Priorizar velocidad de ejecución sin deuda técnica crítica.
- **Fuera de alcance MVP**: POS, inventario complejo, delivery, sistema de comandas en tiempo real.
- **pnpm 11+**: bloquea instalación de paquetes publicados hace <24h; bloquea scripts postinstall maliciosos por defecto.
- **Naming archivos**: backend descarta nombre original. Logo: `logo_{tenant_slug}.svg`. Carta: `carta_{tenant_slug}.pdf`. Fotos: `tenants/{slug}/products/prod_{id}_{timestamp}.webp`.
- **Límite payload imágenes**: 2MB máximo en endpoint de fotos (mitigación DDoS).
