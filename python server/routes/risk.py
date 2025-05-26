from fastapi import APIRouter
from utils.input_schema import InvestorInput
from models.risk_model import prepare_and_predict_risk

router = APIRouter()

@router.post("/predict-risk")
def predict_risk(data: InvestorInput):
    print(f"Received input: {data}")
    risk_score = prepare_and_predict_risk(data)
    return {"risk_score": risk_score}
