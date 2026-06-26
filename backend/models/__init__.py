"""Modelos ORM de la base de datos."""

from .tenant import Tenant, TenantStatus
from .tenant_config import TenantConfig

__all__ = [
    "Tenant",
    "TenantStatus",
    "TenantConfig",
]
