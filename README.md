# CityBank_Hackathon_NextGen

# 💼 CitiBank Hackathon - Next Gen Client Experience AI Platform

An AI-powered wealth management platform that predicts client needs before they arise — combining behavior, sentiment, and transaction data to deliver personalized, emotionally intelligent, and timely financial recommendations.

---

## 🧠 Problem Statement

> "Deliver the right advice for the right product at the right time to niche Wealth Banking clients."

This project solves:
- Lack of proactive client engagement
- Inadequate segmentation
- Low cross-sell/upsell effectiveness
- Generic investment recommendations

---

## 🚀 Solution Overview

Our platform includes:
- 🧩 **Predictive Analytics Models**
- 🧠 **AI-based Client Segmentation**
- 💬 **Sentiment Analysis Engine**
- 🎯 **Recommendation Engine (NBA - Next Best Action)**
- 📊 **Interactive Dashboards**

---

## 🏗️ Project Structure
citibank-ai-solution/
│
├── frontend/ # React.js Frontend
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── assets/
│ │ ├── App.js
│ │ └── index.js
│ └── package.json
│
├── backend/ # Flask Backend
│ ├── app/
│ │ ├── routes/
│ │ ├── services/
│ │ ├── models/
│ │ └── utils/
│ ├── run.py
│ └── requirements.txt
│
├── README.md
└── .gitignore



---

## 🔧 Installation & Running

### ⚙️ Backend (Python + Flask)
```bash
cd backend
python -m venv env
source env/bin/activate  # On Windows: env\Scripts\activate
pip install -r requirements.txt
python run.py

