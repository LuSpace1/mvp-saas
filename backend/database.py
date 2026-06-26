import os
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from sqlalchemy.orm import DeclarativeBase
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
if not DATABASE_URL:
    raise ValueError("DATABASE_URL no está configurada correctamente")

engine = create_async_engine(
    DATABASE_URL, echo=True
)  # echo=True muestra cada query SQL en consola.

ASYNC_SESSION_LOCAL = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
)


class Base(DeclarativeBase):
    "Clase Base para todos los modelos ORM"

    pass


async def get_db():
    "Obtener sesión de base de datos para inyección de dependencias."
    async with ASYNC_SESSION_LOCAL() as session:
        yield session
