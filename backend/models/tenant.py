"""Modelo ORM para la tabla tenants."""

import enum
from sqlalchemy import String, Boolean
from sqlalchemy.dialects.postgresql import JSONB
from sqlalchemy.orm import Mapped, mapped_column, relationship
from database import Base


class TenantStatus(str, enum.Enum):
    TRIAL = "trial"
    ACTIVE = "active"
    SUSPENDED = "suspended"
    CANCELLED = "canceled"


class Tenant(Base):
    """Representa un comercio registrado en la plataforma."""

    __tablename__ = "tenants"

    id: Mapped[int] = mapped_column(primary_key=True)
    slug: Mapped[str] = mapped_column(String(100), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(100))
    email: Mapped[str] = mapped_column(String(254), unique=True)
    password_hash: Mapped[str] = mapped_column(String(255))
    must_change_password: Mapped[bool] = mapped_column(Boolean, default=True)
    enabled_modules: Mapped[dict] = mapped_column(JSONB, default=dict)
    status: Mapped[TenantStatus] = mapped_column(default=TenantStatus.TRIAL)
    config: Mapped["TenantConfig"] = relationship(
        back_populates="tenant", cascade="all, delete-orphan"
    )
