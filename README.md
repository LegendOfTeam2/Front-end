# RhythMe

<img height="500" src="https://user-images.githubusercontent.com/108949232/190432270-6ae11497-694c-4648-9ece-4eaa8fa7aa05.jpeg" alt="메인로고" width=1200 height=1000 ></img>

> **_배고픈 음악인을 위한 사이트_** 🧑🏿‍🎤🧑‍🎤<br/><br/> > **개발기간: 2022.08.26 ~
> 2022.10.07**

<br/>

## ⭐️ 프로젝트 소개

혼자 모든 곡 작업을 하기 막막한 분들

원하는 사운드 또는 목소리를 찾고 계시는 분들

이 두 분을 매칭해주는 사이트를 만들기로 생각했습니다.

_**Singer 와 Maker 의 만남**._

<br/>

## 📖 아키텍쳐

### ⏺ MVVM-C & Clean Architecture

<img width="994" alt="마지막" src="https://user-images.githubusercontent.com/108949232/190438450-599a5044-c9a5-4f73-8782-baa5c5210446.png">
<br/>
<br/>

## ⚒ 기술 스택

> **react**

- 컴포넌트로 레고 블록과 같은 작은 단위로 개발하며 이렇게 하면 가독성이 높고 간단하여 캡슐화, 확장성, 결합성, 재사용과 같은 장점이 있어 짧은 시간에 완성도 있는 
 서비스를 만들기 용이합니다.

- 또한 개발하다 보면 막히는 부분, 오류가 있는 부분이 많은데 다른 라이브러리에 비해
 사용자가 많고, 커뮤니티 자료가 많아서 막히는 부분에서 찾아볼 자료가 많아
 이용하기 편해서 선정했습니다.

> **zustand**

- 자주 사용하던 Redux와 같은 Flux 아키텍처를 사용하고, 거의 없다시피 한 보일러플레이트 코드와 간편한 사용법 그리고 Redux devtools를 사용할 수 있어 디버깅이 
  가능하다는 점으로 인해 이번 프로젝트의 전역 상태 라이브러리로 선정했습니다.

> **styled-components**

- GlobalStyle의 전역 스타일 지정과 ThemeProvider의 스타일 코드 재 사용성으로 인해
  스타일 라이브러리로 선정했습니다.
  
> **axios**
- axios를 선정한 이유는 Promise 기반으로 만들어졌기 때문에 데이터 다루기가 편리하고 브라우저 호환성이 뛰어나 선정했습니다.

> **jwt-decode**
- 닉네임을 통해 받아오는 API가 있어 jwt 토큰 안에 저장된 닉네임을 가져오기 위해 선정했습니다.

> **react-responsive**
- 다양한 디바이스의 해상도로 접근할 때 불편함이 없는 서비스를 제공하기 위해 선정했습니다.

> **react-slick**
- 다른 슬라이더 패키지에 비해 정보가 많고 커스텀 하기 편하여 선정했습니다.

> **react-router-dom**
- uri 대하여 routing을 통해 렌더링 하기 위해서 선정했습니다.

> **browser-image-compression**
- 사이트 초기 로딩 속도 개선 작업 중 업로드 하는 이미지의 리사이징이 필요하여 선정했습니다.

> **dayjs**
- 날짜 / 시간 데이터를 다룰 때 사용하는 패키지입니다. momentjs를 주로 사용했으나 큰 용량 및 deprecated 된 이유로 dayjs를 선정하게 되었습니다.

> **lodash**
- 이메일, 닉네임 중복체크를 input value의 state가 변화할 때 request를 날리는 로직으로 구현하였습니다. 웹 사이트의 부하를 고려해서 로직 수정이 필요했고 lodash의 debounce를 사용하기 위해 선정했습니다.

> **react-ga**
- 사용자 데이터 분석을 위해 Google Analytics와 연동하기 위해 선정했습니다.

> **react-toastify**
- javascript 내장 alert 대신 사용자에게 noti를 줄 수 있는 기능이 필요하여 선정했습니다.

<br/>

### [코드 컨벤션 & 트러블 슈팅 보러 가기](https://github.com/LegendOfTeam2/Front-end/wiki)

<br/>

## 팀원 소개

|                                                                          정영현                                                                           |                                                                     문경록                                                                      |                                                                           이장원                                                                           |                                                                          성필상                                                                           |                                                                          서동욱                                                                           |                                                                     김재열                                                                      |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/108949232/190429470-fd9d76e6-7052-4c60-8665-bedf714a1b06.jpeg" alt="1번 이미지" width=200 height=200> | <img src="https://user-images.githubusercontent.com/108949232/190429960-de0488b0-162c-4aab-a715-45700305bde0.jpeg" alt="2번 이미지" width=200 > | <img src="https://user-images.githubusercontent.com/108949232/190430087-1c67a494-bc12-431d-b589-1bf33ef9e769.jpeg" alt="3번 이미지" width=200 height=200 > | <img src="https://user-images.githubusercontent.com/108949232/190430209-bc6589da-357b-47a5-ad3b-cee22eb07dea.jpeg" alt="4번 이미지" width=200 height=200> | <img src="https://user-images.githubusercontent.com/108949232/190430378-3416ce97-d17d-4727-8d71-96d3b0b96e5a.jpeg" alt="5번 이미지" width=200 height=200> | <img src="https://user-images.githubusercontent.com/108949232/190430522-3c49710e-6bfc-4615-a0a2-e4b3de654b06.jpeg" alt="6번 이미지" width=200 > |
|                                                        [@ericjjung](https://github.com/ericjjung)                                                         |                                                       [@rokga](https://github.com/rokga)                                                        |                                                           [@wkddnjs](https://github.com/wkddnjs)                                                           |                                                        [@lucy-pill](https://github.com/lucy-pill)                                                         |                                                          [@SeoNaRu](https://github.com/SeoNaRu)                                                           |                                                      [@charlie7590](charlie7590@gmail.com)                                                      |

<br/>
