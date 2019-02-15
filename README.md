### hyperLedger 실행 
1. hyperLedger 설치 
  - $curl -sSL http://bit.ly/2ysbOFE | bash -s 1.4.0
2. hyperLedger 실행 fabric-samples/fabcar 밑에  
  - $./startFabric.sh   

### 백엔드 실행 (backend run)
  - $npm run-script start:dev     개발환경 - nodemon이용해서 서버소스 자동 update
  - $npm run-script start:express  상용환경과 유사

### 프런트엔드 실행 (frontend run)
  - $npm start

### 접속 URL
http://localhost:3000/simple-test

(실행법)
CAR0 ~ CAR9 사이 입력하고 
  - Get Owner 버튼 누르면, CARx의 주인 출력
  - 새주인 입력하고 Set 버튼 누르면 CARx의 주인 변경
  
<img src="https://user-images.githubusercontent.com/7694008/52829585-c1aba480-3110-11e9-9655-dbc05abaed62.png" width="90%"></img>
