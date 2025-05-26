import pickle
import os

MODEL_PATH = os.path.join("assets", "finalized_model.sav")

with open(MODEL_PATH, 'rb') as file:
    model = pickle.load(file)

def predict_risk_tolerance_from_features(features: list) -> float:
    return model.predict(features)[0]

def prepare_and_predict_risk(data) -> float:
    features = [[
        data.Age,
        data.NetWorth,
        data.Income,
        data.EducationLevel,
        data.Married,
        data.Kids,
        data.Occupation,
        data.WillingnessToTakeRisk
    ]]
    return predict_risk_tolerance_from_features(features)
