"""Modelo ORM para la tabla tenants."""

from sqlalchemy import String, Boolean, JSON
from sqlalchemy.orm import Mapped, mapped_column
from database import Base

class Tenant(Base):
    """Representa un comercio registrado en la plataforma."""

    __tablename__ = "tenants"

    id: Mapped[int] = mapped_column(primary_key=True)
    slug: Mapped[str] = mapped_column(String(100), unique=True, index=True)
    name: Mapped[str] = mapped_column(String(100))
    email: Mapped[str] = mapped_column(String(254), unique=True)
    password_hash: Mapped[str] = mapped_column(String(255))
    must_change_password: Mapped[bool] = mapped_column(Boolean, default=True)
    enabled_modules: Mapped[dict] = mapped_column(JSON, default=list)