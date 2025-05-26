from fastapi import FastAPI
from routes import risk

app = FastAPI(title="Robo Advisor API")

app.include_router(risk.router, prefix="/api")


@app.get("/")
def read_root():
    return {"message": "Risk Prediction API is running"}