# 🪪saemii Portfolio

#### **<a href="">:point_right:<u>포트폴리오</u></a>**

새미의 포트폴리오 입니다!<br/>
포트폴리오에서 제가 작업한 페이지와, 각 페이지에 사용된 언어와 라이브러리, 구현 상세 내용을 확인하실 수 있습니다.

## 목차

- [개요](#개요)
- [사용된 기술](#사용된-기술)
- [미리보기](#미리보기)
- [기능별 설명](#기능별-설명)

## 개요

- **프로젝트 이름**: Saemii Portfolio🪪 (새미 포트폴리오)
- **제작기간**: 23.10.27 - 23.11.17 + a (계속 업데이트)
- **기여도**: 개인작업 / 100%

## 사용된 기술
#### 📌언어/라이브러리
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
#### 📌애니메이션
<img src="https://img.shields.io/badge/gsap-0AE448?style=for-the-badge&logo=gsap&logoColor=white">

## 미리보기

<table>
  <tr>
    <th style="width:300px">홈</th>
    <th style="width:300px">프로젝트 요약</th>
    <th style="width:300px">프로젝트 썸네일/이동</th>
  </tr>

  <tr>
    <td><img style="width:300px" src="https://github.com/saemii-24/saemii_portfolio/assets/139088277/f3999662-df81-4fa8-877c-cc1eb4dc0a4d" alt="홈"></td>
    <td><img style="width:300px" src="https://github.com/saemii-24/saemii_portfolio/assets/139088277/9718cb84-0310-442a-8e2d-eb21ed6b0c38" alt="프로젝트 요약"></td>
    <td><img style="width:300px" src="https://github.com/saemii-24/saemii_portfolio/assets/139088277/911d415a-d688-4a6c-9173-346c7106cc50" alt="프로젝트 썸네일/이동"></td>
  </tr>
</table>

<table>
  <tr>
    <th style="width:300px">프로젝트 페이지/깃허브 이동</th>
    <th style="width:300px">프로젝트 개요</th>
    <th style="width:300px">프로젝트 미리보기</th>
    <th style="width:300px">구현 설명</th>
  </tr>
  <tr>
    <td><img style="width:300px" src="https://github.com/saemii-24/saemii_portfolio/assets/139088277/e66aebdc-9117-4bad-8dc9-68ca75a70f51" alt="프로젝트 페이지/깃허브 이동"></td>
    <td><img style="width:300px" src="https://github.com/saemii-24/saemii_portfolio/assets/139088277/8fdbdb6c-dcc9-4123-9dbb-9b55c74e0214" alt="프로젝트 개요"></td>
    <td><img style="width:300px" src="https://github.com/saemii-24/saemii_portfolio/assets/139088277/4225983b-5103-4fb2-b114-3f72a77df00b" alt="프로젝트 미리보기"></td>
    <td><img style="width:300px" src="https://github.com/saemii-24/saemii_portfolio/assets/139088277/93c2f259-95c4-4fb9-b5da-85977f0fb282" alt="구현 설명"></td>
  </tr>
</table>

## 포트폴리오 주요 포인트

1. **메인 이미지 스크롤 이벤트**<br/>
   scrollEvent를 이용해 스크롤에 따라 이미지가 화면을 채우도록 고성했습니다. 이때 이미지로 인해 헤더가 잘 보이지 않을 수 있어 헤더의 컬러도 적절히 변경해 주었습니다.
   <br/>
2. **pagination**<br/>
   대표 애니메이션 각각의 section으로 이동할 수 있는 pagination을 만들었습니다. 클릭하면 해당 section으로 이동합니다. 클릭이 아닌 스크롤 해서, 해당 애니메이션이 화면에 들어오면 pagination을 컬러가 변경됩니다.
   <br/>
3. **가로 스크롤 카드**<br/>
   CSS와 자바스크립트를 이용해 만든 가로 스크롤 애니메이션입니다. 스크롤에 맞춰 오른쪽에서 왼쪽으로 카드가 이동하며, 카드에 hover 하면 연관 있는 지브리 애니메이션 작품을 보여줍니다.
   <br/>
4. **드래그 카드 이동**<br/>
   input type='range'의 값과 시놉시스 카드들의 움직임을 연동했습니다. 사용자가 input 박스를 드래그하거나 클릭해서 조정하면 그 값을 받아 시놉시스 section이 움직입니다.
   <br/>
5. **youtubeAPI 활용 팝업창**<br/>
   간단한 youtube API를 이용해 팝업창에서 원하는 영상이 재생 될 수 있도록 구성했습니다. 화면 비율을 고려하여 작은 사이즈에서는 팝업이 아닌 해당 영상의 youtube site로 이동합니다.
   <br/>
6. **data를 이용한 태그 생성**<br/>
   각 캐릭터의 정보 구조와 HTML 태그 구조가 동일하기 때문에 data.js 파일에 캐릭터 정보를 분리하고 JavaScript에서 태그를 만들어 주었습니다. 궁금한 캐릭터를 클릭하면 캐릭터의 정보와 사진이 등장하며, 사진을 클릭해 캐릭터의 다른 사진을 확인하거나 버튼을 눌러 다음 캐릭터로 이동할 수 있습니다.

