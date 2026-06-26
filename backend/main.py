"""Punto de entrada del backend.
Levanta la aplicación FastAPI, configura CORS y monta los routers
de la plataforma SaaS multi-tenant.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="SaaS Gastronómico Multi-Tenant - Módulo Menú",
    description="Backend MVP para la gestión de menús e internacionalización",
    version="0.1.0",
)

# Configuración de CORS (Cross-Origin Resource Sharing)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En desarrollo permitimos todos. Cambiar en producción.
    allow_credentials=True,
    allow_methods=["*"],  # Permite GET, POST, PUT, DELETE, etc.
    allow_headers=["*"],
)


# Endpoint de Health Check
@app.get("/health", tags=["Mantenimiento"])
def health_check():
    """
    Endpoint simple para verificar que el servidor está arriba y respondiendo.
    """
    return {
        "status": "healthy",
        "version": "0.1.0",
        "database": "Configured (Pending connection check)",
    }
