"""Modelo ORM para la tabla tenants."""

from __future__ import annotations
import enum
from typing import TYPE_CHECKING
from sqlalchemy import String, Boolean
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column, relationship
from database import Base

# TYPE_CHECKING solo es 'True' para el editor de código o linters (Ruff/etc).
# Al ejecutar la app es 'False', lo que evita el error de "importación circular" (bucle infinito).
if TYPE_CHECKING:
    from models.tenant_config import TenantConfig


class TenantStatus(str, enum.Enum):
    TRIAL = "trial"
    ACTIVE = "active"
    SUSPENDED = "suspended"
    CANCELLED = "cancelled"


class Tenant(Base):
    """Representa un comercio registrado en la plataforma."""

    __tablename__ = "tenants"

    id: Mapped[int] = mapped_column(primary_key=True)
    slug: Mapped[str] = mapped_column(String(100), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(100))
    email: Mapped[str] = mapped_column(String(254), unique=True)
    password_hash: Mapped[str] = mapped_column(String(255))
    must_change_password: Mapped[bool] = mapped_column(Boolean, default=True)
    enabled_modules: Mapped[list] = mapped_column(JSONB, default=lambda: ["menus"])
    status: Mapped[TenantStatus] = mapped_column(default=TenantStatus.TRIAL)
    config: Mapped["TenantConfig"] = relationship(
        back_populates="tenant", cascade="all, delete-orphan"
    )
