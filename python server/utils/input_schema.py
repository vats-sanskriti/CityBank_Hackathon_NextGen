from pydantic import BaseModel

class InvestorInput(BaseModel):
    Age: int
    NetWorth: float
    Income: float
    EducationLevel: int
    Married: int
    Kids: int
    Occupation: int
    WillingnessToTakeRisk: int
