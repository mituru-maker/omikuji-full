from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import random

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/check")
async def check_endpoint(name: str = ""):
    if name:
        return {"message": f"{name}さん、フルスタック環境の構築に成功しました！"}
    else:
        return {"message": "フルスタック環境の構築に成功しました！"}

@app.get("/")
async def root():
    return {"message": "FastAPI backend is running"}

@app.get("/fortune")
async def fortune():
    fortunes = ["大吉", "中吉", "小吉", "吉", "末吉", "凶"]
    lucky_items = [
        "赤い財布", "緑のペン", "青いネクタイ", "黄色いハンカチ", 
        "白い腕時計", "黒いスマホケース", "紫のキーホルダー", "ピンクの栞"
    ]
    messages = [
        "今日は新しいことに挑戦してみましょう",
        "大切な人に連絡を取ってみてください",
        "散歩をして気分転換するのがおすすめです",
        "仕事の休憩に甘いものを食べると良いでしょう",
        "早めに寝て体を休めることが大切です",
        "誰かを助けることで幸運が訪れます",
        "整理整頓をすると運気が上がります",
        "笑顔を忘れずに過ごしましょう"
    ]
    
    selected_fortune = random.choice(fortunes)
    selected_item = random.choice(lucky_items)
    selected_message = random.choice(messages)
    
    return {
        "fortune": selected_fortune,
        "lucky_item": selected_item,
        "message": selected_message
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
