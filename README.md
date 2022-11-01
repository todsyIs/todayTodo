# 상세 페이지 레이아웃 완성(직직)
### 1. tailwindcss로 UI 꾸미기 
### 2. 아래와 같이 컴포넌트 나눔(제외/수정/추가한 컴포넌트 존재)
#### 상세 페이지 컴포넌트 종류
- TodoFilter
- TodoInput
- TodoItemList
- TodoItem
- TodoShare

![dd](https://user-images.githubusercontent.com/101965666/197181519-abdd53a8-a36b-4a5b-bb80-feeaafc14eef.PNG)

### 3. tailwind.config.js 파일 수정
config 파일에서 extend:{}를 추가하고 그 안에 내용물을 넣었다. 
```jsx
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      여기 안에 screens, colors 등 내용물 넣기 
    }
```
