"""Modelo ORM para la configuración visual y enlaces del tenant."""

from __future__ import annotations

from typing import TYPE_CHECKING

from sqlalchemy import ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship
from database import Base

if TYPE_CHECKING:
    from models.tenant import Tenant


class TenantConfig(Base):
    """Configuración visual y enlaces de contacto del tenant."""

    __tablename__ = "tenant_configs"

    id: Mapped[int] = mapped_column(primary_key=True)
    tenant_id: Mapped[int] = mapped_column(ForeignKey("tenants.id"), unique=True)
    template_id: Mapped[int] = mapped_column(Integer, default=1)
    logo_url: Mapped[str | None] = mapped_column(String(255))
    primary_color: Mapped[str] = mapped_column(String(50), default="#000000")
    secondary_color: Mapped[str] = mapped_column(String(50), default="#FFFFFF")
    google_font: Mapped[str] = mapped_column(String(100), default="Inter")
    instagram_link: Mapped[str | None] = mapped_column(String(255))
    whatsapp_link: Mapped[str | None] = mapped_column(String(255))
    pdf_backup_url: Mapped[str | None] = mapped_column(String(255))

    # Relación bidireccional
    tenant: Mapped["Tenant"] = relationship(back_populates="config")
