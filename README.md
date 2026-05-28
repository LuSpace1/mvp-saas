# MVP SaaS Multi-Tenant Gastronomía

Plataforma SaaS multi-tenant para la industria gastronómica local y nacional chilena. Permite a restaurantes y locales de comida crear y gestionar menús digitales multilingüe. Actualmente se encuentra en fase de MVP por lo que en el futuro se implementaran mas caracteristicas con el objetivo de mejorar la fidelizacion de clientes para los negocios.

## Tech Stack

| Capa | Tecnología |
|------|-----------|
| **Backend** | FastAPI + SQLAlchemy ORM (Python 3.13 + uv) |
| **Frontend** | React 19 + Vite + TailwindCSS |
| **Base de datos** | PostgreSQL (single instance, multi-tenant lógico) para deploy (SQLite para pruebas locales) |
| **Auth** | JWT + Google OAuth 2.0 | A futuro se agregaran mas metodos de autenticacion.
| **File Storage** | Cloudflare R2 (S3-compatible, zero egress) |
| **i18n** | JSONB en PostgreSQL (es/en/pt) + react-i18next |
| **Imágenes** | WebP forzado |

## Arquitectura

Monolito multi-tenant: un solo backend + una sola base de datos PostgreSQL con aislamiento lógico por `tenant_id`. Esta arquitectura fue elegida para una mejor adopcion de los unicos 2 desarolladores en el proyecto.

## Modelo de Datos

- **tenants** — slug, email, password_hash, must_change_password, enabled_modules
- **tenant_configs** — template_id, logo_url, colores, google_font, redes, pdf_backup_url
- **categories** — tenant_id, name (JSONB), sort_order
- **products** — tenant_id, category_id, name/description (JSONB), price (Integer CLP), available, is_deleted, sort_order, dietary_tags (JSONB), image_url

## Rutas

| Ruta | Descripción |
|------|-------------|
| `minimenu.cl/` | Landing page pública |
| `minimenu.cl/admin/login` | Login del panel admin |
| `minimenu.cl/admin/dashboard` | Dashboard admin (autenticado) |
| `minimenu.cl/:tenant_slug` | Menú público del local |

## Requisitos

- Python 3.13+
- uv (gestor de proyectos Python)
- Node.js 20+ y pnpm 11+
- PostgreSQL 16+ (y SQLite para pruebas locales)
- Cuenta Cloudflare R2 (para almacenamiento de imágenes)

## Instalación

```bash
# Backend FastAPI
cd backend
uv venv
source .venv/bin/activate
uv sync
uv run uvicorn app.main:app --reload

# Frontend React
cd frontend
pnpm install
pnpm dev
```

## Licencia

MIT
