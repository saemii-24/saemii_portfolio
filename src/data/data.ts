export interface DataType {
  id: number;
  subTitle: string;
  projectTitle: string;
  preview: string;
  previewImg: string;
  smallPreviewImg: string;
  active: boolean;
  click: boolean;
  previewPage: string;
  develop: object[];
  language: object[];
  detail: { page?: string; name: string; content: string; image: string }[];
  link: object[];
}

const originData: DataType[] = [
  {
    id: 0,
    subTitle: "식물 쇼핑몰",
    projectTitle: "Planning",
    preview:
      "반려 식물'을 주제로 한 가상의 식물 쇼핑몰입니다. 웹 표준을 지켜 제작하였으며, CSS와 JavaScript를 이용해 상품 카운트, 상품 선택, 스크롤에 따른 내비게이션 선 색 변화 등의 효과를 주었습니다.",
    previewImg: "/image/project01.jpg",
    smallPreviewImg: "/image/small-project01.jpg",
    active: false,
    click: false,
    previewPage: "/image/projectPreview/project01-main.jpg",
    link: [
      { page: "https://saemii-24.github.io/Planning-Shopping-Sites/" },
      { github: "https://github.com/saemii-24/project_1" },
      {
        document:
          "https://drive.google.com/file/d/1eQlawYZbuRUZa2IpkeyUk3mjzc57vFdl/view?usp=sharing",
      },
    ],
    develop: [
      { 작업기간: "23.06.21 - 23.07.11" },
      { 기여도: "개인작업/100%" },
      { "개발에 사용된 언어/라이브러리": "HTML, CSS, JavaScript" },
      {
        "주요 기능":
          "hover 애니메이션, 제품 선택 버튼, 가격·상품 카운트, 장바구니 모달, 버튼 클릭 시 이미지 변경, 페이지 내비게이션",
      },
      {
        "개발 비화":
          "저에게 코딩의 매력과 재미를 느낄 수 있게 해준 첫 프로젝트입니다. 기획 당시에는 HTML과 CSS 두 가지를 활용한 페이지였으나, 버튼을 만들고 좋아요를 구현하는 등 보다 동적인 기능을 추가하고자 JavaScript를 공부하며 하나씩 적용할 수 있었습니다.\n 이런 기능은 기존 쇼핑몰에서 자주 보았던 것을 우선적으로 생각해보며 적용한 것이었는데, 더 많은 웹 페이지를 살펴보면서\n 어떤 기능이 있는지, 어떻게 구현할 수 있는지 공부한다면 그만큼 구현할 수 있는 상상력을 키울 수 있을 것이라 생각했고,\n 계속해서 성장해 나가는 것을 다짐하는 계기가 되었습니다.",
      },
    ],
    language: [
      {
        HTML: "웹표준을 지키며, 웹 페이지의 구조를 정의하기 위해 사용했습니다.",
      },
      {
        CSS: "CSS의 hover의사 클래스를 통해 다양한 효과를 주었습니다.",
      },
      {
        JavaScript:
          "JavaScript를 활용해 버튼 클릭효과와 상품 카운트, 내비게이션 등을 구현했습니다.",
      },
    ],
    detail: [
      {
        page: "main",
        name: "hover 애니메이션",
        content:
          "사용자가 오브젝트에 hover 했을 때, 해당 오브젝트가 접근할 수 있는 오브젝트이며, 사용자가 바르게 접근했다는 것을 인지할 수 있도록 다양한 hover 애니메이션을 주었습니다.",
        image: "/image/projectDetail/project01-hover.png",
      },
      {
        page: "sub",
        name: "제품 선택 버튼",
        content:
          "상세 페이지 상단에 좋아요 버튼과 색상 선택 버튼이 있어, 사용자의 클릭에 따라 class가 Toggle 되며 반응합니다.",
        image: "/image/projectDetail/project01-subTop.png",
      },
      {
        page: "sub",
        name: "가격·상품 카운트",
        content:
          "꽃잎 색상을 선택하면 구매 수량을 조정할 수 있는 박스가 등장합니다. +, - 버튼을 이용해 수량을 조정하면 그에 따라 상품 총 가격이 변동됩니다. 닫기 버튼을 누르면 박스가 사라지고 색상, 수량, 가격은 초기화됩니다.",
        image: "/image/projectDetail/project01-calculate.png",
      },
      {
        page: "sub",
        name: "장바구니 모달",
        content:
          "장바구니 버튼을 클릭하면 장바구니로 이동할 수 있는 모달이 표시됩니다. 이때 '쇼핑 계속하기' 혹은 닫기 버튼을 클릭해 모달을 닫을 수 있습니다.",
        image: "/image/projectDetail/project01-modal.png",
      },
      {
        page: "sub",
        name: "색상 버튼 클릭 시\n 이미지 변경",
        content:
          "사용자가 원하는 꽃잎 색상 버튼을 클릭하면 해당 색상의 꽃잎 사진을 볼 수 있습니다. ",
        image: "/image/projectDetail/project01-selectColor.png",
      },
      {
        page: "sub",
        name: "페이지 내비게이션",
        content:
          "getBoundingClientRect()을 이용해 사용자가 바라보고 있는 페이지의 위치를 파악합니다. 이때 특정 위치에 도달하면, 내비게이션 하단 초록색 선을 통해 현재 사용자가 보고 있는 부분이 어떤 내용에 관한 것인지 표시합니다. ",
        image: "/image/projectDetail/project01-navigation.png",
      },
    ],
  },
  {
    id: 1,
    subTitle: "스튜디오 지브리 사이트",
    projectTitle: "Ghibli World",
    preview:
      "스튜디오 지브리'에 관련된 정보를 찾아볼 수 있는 웹사이트입니다. Media Query를 이용한 반응형 웹 사이트이며, Intersection Observer를 이용해 사용자의 스크롤에 따른 애니메이션을 주었습니다.",
    previewImg: "/image/project02.jpg",
    smallPreviewImg: "/image/small-project02.jpg",
    active: false,
    click: false,
    previewPage: "/image/projectPreview/project02-main.jpg",
    link: [
      { page: "https://saemii-24.github.io/Ghibli-World-Sites/" },
      { github: "https://github.com/saemii-24/project_2" },
      {
        document:
          "https://drive.google.com/file/d/17a3PlxHg3ENM9n1FOX7yNhoaAE7lSH_V/view?usp=sharing",
      },
    ],
    develop: [
      { 작업기간: "23.07.12 - 23.08.12" },
      { 기여도: "개인작업/100%" },
      {
        "개발에 사용된 언어/라이브러리": "HTML, CSS JavaScript, jQuery",
      },
      {
        "주요 기능":
          "반응형 웹사이트, 스크롤 이벤트, 애니메이션 section의 페이지네이션,\n youtube API를 활용한 팝업창, 캐릭터 data를 이용한 태그 생성",
      },
      {
        "개발 비화":
          "처음으로 제작한 반응형 웹사이트로, 사용자의 시각적 흥미를 위해 스크롤 애니메이션을 적용했습니다.\n 이를 위해 각 사이즈에 적절한 레이아웃을 설정하고, 특정 기능이 각 사이즈에 대응하기 어렵다고 판단되면\n 대체 애니메이션을 넣었습니다. 하지만 각 사이즈에 적절한 구조를 만들고자 태그를 추가하다 보니, 태그가\n 지나치게 많아져 코드의 가독성에서 아쉬움을 느끼기도 했습니다. 이 점을 개선하고자 후반에서는 data와\n JavaScript를 이용해 태그를 생성해보는 등 코드를 줄일 수 있는 방법을 고민하게 되었습니다.",
      },
    ],
    language: [
      {
        HTML: "웹표준을 지키며, 웹 페이지의 구조를 정의하기 위해 사용했습니다.",
      },

      {
        CSS: "media query를 이용해 3가지 사이즈의 반응형 페이지를 제작했습니다.",
      },
      {
        JavaScript:
          "사이트를 보다 동적으로 표현하고자 IntersectionObserver을 이용해 요소가 화면에 들어온 경우 class 명을 추가하거나 제거해 애니메이션을 주었습니다.",
      },
    ],
    detail: [
      {
        page: "main",
        name: "메인 이미지 스크롤 이벤트",
        content:
          "메인 페이지에서 사용자에게 흥미를 끌 수 있도록, 스크롤 애니메이션을 적용했습니다. 이때 이미지가 커지는 경우, Header의 가독성을 위해 Header의 색상도 함께 변경됩니다.",
        image: "/image/projectDetail/project02-main.png",
      },
      {
        page: "main",
        name: "애니메이션 section\n pagination",
        content:
          "대표 애니메이션 파트에서, 각각의 section으로 이동할 수 있는 pagination을 만들었습니다. 클릭하거나 일정 위치에 도달하면 section의 pagination을 컬러가 변경됩니다.",
        image: "/image/projectDetail/project02-pagination.png",
      },
      {
        page: "main",
        name: "가로 스크롤 카드",
        content:
          "CSS와 자바스크립트를 이용해 만든 가로 스크롤 애니메이션입니다. 스크롤에 따라 오른쪽에서 왼쪽으로 카드가 이동하며, 카드에 hover 하면 지브리 애니메이션과 연관된 작품을 보여줍니다.",
        image: "/image/projectDetail/project02-card.png",
      },
      {
        page: "sub",
        name: "input type='range'와\n 카드 이동",
        content:
          "input type='range'의 값과 시놉시스 카드들의 움직임을 연결했습니다. 사용자가 드래그하거나 클릭해서 input 값을 조정하면 그 값을 받아 시놉시스 section이 움직입니다.",
        image: "/image/projectDetail/project02-synopsis.png",
      },
      {
        page: "sub",
        name: "youtube API를\n 활용한 팝업창",
        content:
          "재생 버튼을 누르면 팝업창이 올라오며 해당 애니메이션의 관련 영상을 볼 수 있습니다. 해당 영상은 youtube API를 통해 삽입하였고, 화면 비율을 고려하여 모바일 사이즈에서는 팝업이 아닌 해당 영상을 볼 수 있는 유튜브 사이트로 이동합니다.",
        image: "/image/projectDetail/project02-youtubeAPI.png",
      },
      {
        page: "sub",
        name: "캐릭터 data를 이용한\n 태그 생성",
        content:
          "각 캐릭터의 설명이 길지만, HTML 태그 구조는 동일하기 때문에 data.js 파일에 캐릭터 정보를 분리하고 JavaScript에서 태그를 만들어 주었습니다. 사진을 클릭해 캐릭터의 다른 사진을 확인할 수 있고, 버튼을 눌러 다음 캐릭터로 이동할 수 있습니다.",
        image: "/image/projectDetail/project02-character.png",
      },
    ],
  },
  {
    id: 2,
    subTitle: "호주 여행 사이트",
    projectTitle: "걸어서 호주속으로",
    preview:
      "3명이 함께 만든 팀 프로젝트 사이트입니다. 저는 Header와 Footer를 제외한 메인페이지를 담당했으며, Luxon라이브러리와 Weather API를 통해 서울과 호주의 시간, 날씨를 보여줍니다.",
    previewImg: "/image/project03.jpg",
    smallPreviewImg: "/image/small-project03.jpg",
    active: false,
    click: false,
    previewPage: "/image/projectPreview/project03-main.jpg",
    link: [
      { page: "https://saemii-24-australia.netlify.app/" },
      { github: "https://github.com/saemii-24/australia_netlify_snowpack/" },
      {
        document:
          "https://drive.google.com/file/d/1hqSbB3cX_WPD0mj5tinLQ9espqoOOY9e/view?usp=sharing",
      },
    ],
    develop: [
      { 작업기간: "23.08.21 - 23.08.30" },
      { 기여도: "3인 팀 작업/35%(header, footer 제외 메인페이지 담당)" },
      {
        "개발에 사용된 언어/라이브러리":
          "HTML, CSS, JavaScript, Luxon, weather API",
      },
      {
        "주요 기능":
          "반응형 웹사이트, 메인화면 문장·이미지 전환, 데이터 이용한 카드, swiper를 이용한 슬라이드, 서울과 호주의 날씨·시간 보드",
      },
      {
        "개발 비화":
          "협업 프로젝트에서 '여러 사람이 작업하더라도 한 사람이 작업한 것처럼' 보이기 위해서는 시작 전\n 단계적인 계획이 필요하고, 개발이 시작되면 서로의 작업을 확인하고 피드백 하는 것이 중요하다고 느낄 수 있었습니다.\n 개인작업 측면에서는, 새로운 것을 시도해 본 프로젝트이기도 합니다. 서머타임을 시행하는 호주 특성상 JavaScript 내의\n Date객체만을 이용해서 시간을 계산하기에 어려움이 있어 시간 라이브러리인 Luxon 라이브러리를 적용했습니다.\n 또 현재 날씨를 표현하기 위해 weather API를 사용했습니다. 이 과정에서 fetch와 비동기 함수에 대해 공부할 수 있었습니다.",
      },
    ],
    language: [
      {
        HTML: "웹표준을 지키며, 웹 페이지의 구조를 정의하기 위해 사용했습니다.",
      },
      {
        CSS: "media query를 이용해 Web, Tablet, Mobile 3가지 사이즈의 반응형 페이지를 제작했습니다.",
      },
      {
        JavaScript:
          "메인 화면의 슬라이드와 스크롤 애니메이션등 페이지를 보다 동적으로 구현하기  위해 사용했습니다.",
      },
      {
        Luxon: "각 도시별 시간과 서머타임 여부를 나타내기 위해 사용했습니다.",
      },
      {
        "Weather API": "각 도시의 현재 날씨를 나타내기 위해 사용했습니다.",
      },
    ],
    detail: [
      {
        page: "main",
        name: "메인화면\n 문장·이미지 전환",
        content:
          "자바스크립트 비동기 함수를 이용해 일정 시간마다 하나의 문장을 이루는 슬라이드를 구현했습니다. 한 슬라이드에 이미지, 시간 bar, 문장이 짝을 이루고 있고, 일정 시간이 지날 경우 다음 슬라이드로 넘어갑니다.",
        image: "/image/projectDetail/project03-main.png",
      },
      {
        page: "main",
        name: "SVG와 데이터를 이용",
        content:
          "호주의 행정구역 지도를 svg포맷으로 제작하고 JavaScript에 정의된 배열 데이터를 활용해 각 구역을 선택하면 해당하는 정보가 우측 카드에 표시될 수 있도록 구현했습니다.",
        image: "/image/projectDetail/project03-citySelect.png",
      },
      {
        page: "main",
        name: "swiper를 이용한 슬라이드",
        content:
          "swiper를 이용해 호주의 즐길 거리에 관련된 카드 슬라이드를 제작했습니다. 사용자가 카드를 바르게 선택한 것을 인지할 수 있도록, 카드에 Hover하면 카드가 살짝 위로 올라갑니다.",
        image: "/image/projectDetail/project03-slide.png",
      },
      {
        page: "main",
        name: "서울과 호주의\n 날씨·시간 보드",
        content:
          "weather API와 Luxon 라이브러리를 활용해 서울과 호주의 날씨와 시간을 나타내는 보드를 구현했습니다. 서머타임을 시행하는 경우 시간 옆에 서머타임 아이콘이 표시됩니다. 각 도시의 날씨 데이터를 가져오기까지 다소 시간이 소요되므로, 로딩 스피너를 추가해 주었습니다.",
        image: "/image/projectDetail/project03-weather.png",
      },
    ],
  },
  {
    id: 3,
    subTitle: "교보문고 클론코딩",
    projectTitle: "교보문고 eBook",
    preview:
      "Kakao Book API를 활용한 교보문고 eBook의 클론 사이트입니다. Swiper, localStorage등을 이용해 디자인과 기능을 최대한 원래의 사이트와 바숫하게 제작하고자 했습니다.",
    previewImg: "/image/project04.jpg",
    smallPreviewImg: "/image/small-project04.jpg",
    link: [
      { page: "https://saemii-24.github.io/eBook-Sites/" },
      { github: "https://github.com/saemii-24/project_4" },
      {
        document:
          "https://drive.google.com/file/d/1MzWESmvjq-B8mDEzgTXcYpvS_b6yl0Sc/view?usp=sharing",
      },
    ],
    active: false,
    click: false,
    previewPage: "/image/projectPreview/project04-main.jpg",

    develop: [
      { 작업기간: "23.09.08 - 23.09.21" },
      { 기여도: "개인작업/100%" },
      {
        "개발에 사용된 언어/라이브러리":
          "HTML, CSS, JavaScript, jQuery, AJAX, Kakao Book API",
      },
      {
        "주요 기능":
          "swiper를 이용한 다양한 슬라이드, 가상의 데이터를 활용한 리뷰 정렬, localStorage를 이용한 최근 본 책, 미리보기 글자 크기 변경",
      },
      {
        "개발 비화":
          "이번 프로젝트는 교보문고 eBook 페이지의 디자인과 기능을 최대한 비슷하게 구현해보고자 했습니다.\n 먼저, 서점 구성에 필요한 정보는 AJAX를 이용해 데이터를 응답받았습니다. 온라인 서점인만큼, 이러한 책 데이터를 정리하기 위해 많은 슬라이드가 존재했고, swiper의 다양한 형태를 이용해 여러 슬라이드를 구현했습니다.'최근 본 책'이 담기는 팝업의 경우,\n 사용자가 새로고침 하거나 다른 페이지로 이동해도 동일한 데이터를 유지해야 하므로 localStorage를 활용했습니다.",
      },
    ],
    language: [
      {
        HTML: "웹표준을 지키며, 웹 페이지의 구조를 정의하기 위해 사용했습니다.",
      },
      {
        CSS: "기존의 웹사이트를 바탕으로 최대한 비슷하게 제작할 수 있도록 스타일링 했습니다.",
      },
      {
        "JavaScript, jQuery":
          "코드를 동적으로 만드는 데 사용했습니다. 중반까지 JavaScript를 이용해 Tag를 생성했으나 가독성이 좋지 않아 후반에는 다소 코드를 줄일 수 있는 jQuery를 사용했습니다.",
      },

      {
        AJAX: "Kakao API에 데이터를 요청하고 응답 받기 위해 사용했습니다.",
      },
    ],
    detail: [
      {
        page: "main",
        name: "swiper의\n 다양한 슬라이드",
        content:
          "응답 받은 책 데이터를 Swiper라이브러리를 통해 다양한 형태의 슬라이드 제작했습니다.",
        image: "/image/projectDetail/project04-slide.png",
      },
      {
        page: "sub1",
        name: "가상의 데이터를\n 활용한 리뷰 정렬",
        content:
          "가상의 리뷰 데이터를 만들어 리뷰 section을 구성했습니다. 상단 탭, 좋아요 순/최신순, 페이지네이션을 클릭하면 해당하는 데이터를 filter, sort, 그룹화하고 업데이트합니다.",
        image: "/image/projectDetail/project04-reviewSort.png",
      },
      {
        page: "all",
        name: "최근 본 책",
        content:
          "페이지가 변경되어도 최근 본 상품을 유지할 수 있도록 localStorage를 이용했습니다. 메인/서브 페이지에 나와있는 책을 클릭하면 해당 책의 제목이 최대 5개까지 localStorage에 저장됩니다. 사용자가 최근 본 책 팝업을 열면, 저장되어 있던 책의 제목을 이용해 데이터를 요청하고, 응답받은 데이터로 최근 본 상품을 구현했습니다.",
        image: "/image/projectDetail/project04-localStorage.png",
      },
      {
        page: "sub2",
        name: "미리보기 글자 크기 변경",
        content:
          "책 미리보기 페이지에서 input과 button을 이용해 글자 크기를 변경할 수 있습니다. 폰트 크기는 input을 드래그하거나 양쪽의 버튼을 눌러 조정할 수 있으며, 초기화를 누를 경우, default 크기로 돌아갑니다. 글자 크기가 변경되더라도 줄 간격이 적절하게 유지됩니다.",
        image: "/image/projectDetail/project04-fontSize.png",
      },
    ],
  },
  {
    id: 4,
    subTitle: "체크카드 검색 사이트",
    projectTitle: "Card Check",
    preview:
      "사용자가 원하는 카드사와 혜택을 필터하는 체크카드 검색 사이트입니다. 카드 비교함에 카드를 담아 원하는 카드를 비교할 수도 있습니다.",
    previewImg: "/image/project05.jpg",
    smallPreviewImg: "/image/small-project05.jpg",
    link: [
      { page: "https://main--react-card-check.netlify.app/" },
      { github: "https://github.com/saemii-24/project_5" },
      {
        document:
          "https://drive.google.com/file/d/1DBZ6h3c4cEG9VEyj7VlIALNR5_ZtuExk/view?usp=sharing",
      },
    ],
    active: false,
    click: false,
    previewPage: "/image/projectPreview/project05-main.jpg",

    develop: [
      { 작업기간: "23.10.04 - 23.10.20" },
      { 기여도: "개인작업/100%" },
      {
        "개발에 사용된 언어/라이브러리":
          "React, Redux, React-router-dom, SCSS, Bootstrap ",
      },
      {
        "주요 기능":
          "반응형 웹사이트, 카드 혜택 랜덤 선택 후 노출, 카드 비교함 추가, 카드 비교함 중복/초과 팝업, 카드 비교함 삭제, 원하는 카드 필터, 카드 자세한 혜택 보기",
      },
      {
        "개발 비화":
          "리액트를 통해 반복되는 코드를 줄이고, 다양한 카드 정보에 대한 상세페이지를 쉽게 구성할 수 있었습니다.\n 이전 프로젝트에서 반복되는 코드의 가독성 문제를 마주쳤었는데, 리액트를 통해 그 문제를 해결할 수 있었습니다.\n 카드 정보에 관한 데이터를 만들고, 해당 데이터를 어떻게 불러와 활용할지, 어떻게 element를 제작할지 생각해보며\n 배열과 객체메소드에 대해 공부할 수 있었습니다. \n특히 카드사와 혜택을 설정해 필터하는 과정에서 다소 시간이 소요되었는데, every와 some 두 가지의 배열 메소드로\n 해결하며, 기존에 거의 사용하지 않았던 배열 메소드를 공부할 수 있었습니다.",
      },
    ],
    language: [
      {
        React:
          "활발한 커뮤니티와 JavaScript기반의 라이브러리로 학습에 용이하고 컴포넌트 기반의 구조로 유지보수가 쉬워 프로젝트 라이브러리로 사용했습니다.",
      },
      {
        Redux:
          "사용자가 선택한 카드 데이터를 전역적으로 관리하기 위해 사용했습니다. 카드 비교함, 카드 비교, 중복/초과 팝업 등에 활용했습니다.",
      },
      {
        "React-router-dom":
          "react 프로젝트를 간단하게 라우팅하고, 중첩 라우팅을 통해 다양한 카드 페이지를 구성하는데 사용했습니다.",
      },
      {
        Bootstrap:
          "반응형 페이지를 만들기 위한 레이아웃 설정과 버튼 제작에 활용했습니다.",
      },
    ],
    detail: [
      {
        page: "main",
        name: "카드 혜택\n 랜덤 선택 후 노출",
        content:
          "홈페이지 접속 시 6가지의 혜택 중 한가지의 혜택을 랜덤으로 설정하여, 해당 혜택을 가지고 있는 카드를 3장 선택해 노출합니다. ",
        image: "/image/projectDetail/project05-random.png",
      },
      {
        page: "sub3",
        name: "카드 비교함 추가",
        content:
          "카드 비교를 선택하면 해당 카드가 비교함에 담깁니다. 이 비교함은 Redux로 전역적으로 관리되어 모든 페이지에서 접근할 수 있습니다.",
        image: "/image/projectDetail/project05-cardBoxPush.png",
      },
      {
        page: "all",
        name: "카드 비교함\n 중복/초과 팝업",
        content:
          "사용자가 카드 비교를 시도할 때, 이미 해당 카드가 담겼다면 중복 팝업을 표시합니다. 만약 현재 담긴 카드가 3장 이상이면 3장의 카드만 담을 수 있다는 팝업을 표시합니다.",
        image: "/image/projectDetail/project05-popup.png",
      },
      {
        page: "all",
        name: "카드 비교함 삭제",
        content:
          "카드 비교함에서 카드를 삭제하고 싶다면 우측 하단에 표시되는 작은 비교함을 클릭해 삭제하거나, 비교하기 페이지 내에서 삭제할 수 있습니다. 카드 비교함과 카드 비교 페이지 모두 Redux로 상태를 공유하므로, 한 곳에서 삭제를 클릭하면 동시에 해당 카드가 제거됩니다.",
        image: "/image/projectDetail/project05-cardBoxRemove.png",
      },
      {
        page: "sub2",
        name: "원하는 카드 필터",
        content:
          "filter, every, some 등의 배열 메소드를 활용해 사용자가 선택한 카드사와 혜택을 충족하는 카드를 표시합니다. 필터 기준은 사용자가 선택한 카드사의 카드 중 선택된 모든 혜택을 가지고 있는 카드입니다.",
        image: "/image/projectDetail/project05-cardFilter.png",
      },
      {
        page: "sub1",
        name: "카드 자세한 혜택 보기",
        content:
          "'자세한 혜택' 버튼을 클릭하면 해당 카드의 detail 페이지로 이동합니다. useParams를 이용해 현재 페이지의 파라미터를 받아오고, 해당 파라미터를 이용해 데이터를 찾아 렌더링합니다. 혜택 별 아이콘은 미리 정의해 둔 switch case 문을 이용했습니다.",
        image: "/image/projectDetail/project05-detail.png",
      },
    ],
  },
  {
    id: 5,
    subTitle: "건강 대시보드",
    projectTitle: "Be health",
    preview:
      "사용자 근처 병원·약국 정보, 복용하는 약의 부작용 등의 정보를 얻거나 각 사용자의 건강 데이터를 관리할 수 있는 대쉬보드 형태의 웹 사이트입니다.",
    previewImg: "/image/project06.jpg",
    smallPreviewImg: "/image/small-project06.jpg",
    link: [
      { page: "https://behealth-bcab3.web.app/" },
      { github: "https://github.com/saemii-24/BeHealth" },
    ],
    active: false,
    click: false,
    previewPage: "/image/projectPreview/project06-main.jpg",
    develop: [
      { 작업기간: "23.11.24 - 23.12.24" },
      {
        기여도:
          "2인 팀 작업/70% (Firebase, Firestore 연결, main page 일부와 나머지 페이지 담당",
      },
      {
        "개발에 사용된 언어/라이브러리": "React, TypeScript, Firebase, Axios",
      },
      {
        "주요 기능":
          "회원가입, 로그인, 근처 병원·약국 검색, 약 부작용 검색, 건강 정보 안내, 일정 추가·표시, 프로필 추가, BMI계산, 운동 시간 그래프",
      },
      {
        "개발 비화":
          "이전 프로젝트에서는 사용자가 새로고침 하거나 페이지를 재접속하는 경우 데이터가 사라지는 문제를 해결하기 위해\n localStorage 등을 이용했는데, 더 많은 내용의 정보를 효율적으로 보관하고 활용하기 위해 Firebase와 Firestore를 도입해\n 사용자별로 개인화된 페이지를 제공할 수 있었습니다.\n main에서는 좀 더 일반적인 정보를 제공하기 위해 공공 데이터 포털에서 제공하는 Open API를 활용하였습니다. \n이때 응답 받은 데이터를 렌더링하는 과정에서 발생할 수 있는 다양한 예외 사항을 고려하고, 각 상황에서 사용자에게\n '정보가 없음', 또는 '로딩 중' 등 적절한 내용을 표시하며 예외처리에 대해 공부할 수 있었습니다. \n 특히, 이번 프로젝트에서는 협업을 위해 Github를 적극 활용하였는데 이를 통해 보다 적은 충돌이 발생하였고, \n 정해진 규칙을 준수하고, 서로의 작업상황을 확인하며 효율적인 팀 프로젝트를 경험할 수 있었습니다. ",
      },
    ],
    language: [
      {
        React:
          "가장 익숙한 라이브러리로, 컴포넌트 단위의 협업을 위해 사용했습니다.",
      },
      {
        "Context API":
          "간단한 전역 상태관리를 위해 사용했습니다. 다수의 컴포넌트에서 props drilling없이 사용자 정보에 접근하거나, 팝업이 중복해서 열리지 않도록 제한하기 위해 활용했습니다.",
      },
      {
        TypeScript:
          "변수의 타입을 명시적으로 선언해 코드의 가독성을 높이고, 런타임 오류를 방지하기 위해 사용했습니다.",
      },

      {
        Axios: "Promise를 기반으로 한 비동기 처리를 위해 사용했습니다. ",
      },
      {
        Firebase:
          "회원가입 기능을 통해 각 사용자에게 uid를 부여하고, 이를 바탕으로 개인화 된 웹페이지를 제공하기 위해 사용했습니다.",
      },
      {
        Firestore:
          "백엔드 없이 간편하게 실시간 DB를 구축하고, 사용자 정보를 DB에 저장하여 사용자가 접속할 때마다 적절한 정보를 보여주는 데에 활용했습니다.",
      },
    ],
    detail: [
      {
        page: "main",
        name: "건강검진 대상자 확인",
        content:
          "사용자가 입력한 프로필의 나이를 바탕으로 이번년도 건강검진 대상자 여부를 판별 후 안내합니다.",
        image: "/image/projectDetail/project06-age.png",
      },
      {
        page: "main & my",
        name: "Open API를\n 활용한 팝업창",
        content:
          "공공데이터포털의 Open API를 이용해 main페이지에서는 건강검진 병원과 근처 약국정보를, my Page에서는 약의 부작용과 주의사항을 찾아볼 수 있습니다.",
        image: "/image/projectDetail/project06-api.png",
      },
      {
        page: "my",
        name: "프로필 설정",
        content:
          "my Page에서 나의 프로필을 업데이트 할 수 있습니다. 해당 정보는 firestore로 저장되며 Context API를 이용해 모든 컴포넌트에서 접근할 수 있습니다. 수정 버튼을 누르면, 그 전에 작성했던 정보를 기본으로 보여주어 사용성을 높였습니다.",
        image: "/image/projectDetail/project06-status.png",
      },
      {
        page: "my",
        name: "나의 BMI",
        content:
          "사용자가 기본 프로필을 업데이트 하면, 저장된 키와 몸무게를 이용해 BMI를 계산하고, 그래프에 표시합니다.",
        image: "/image/projectDetail/project06-bmi.png",
      },
      {
        page: "main & my",
        name: "오늘의 운동 추가,\n 이번주 운동 그래프",
        content:
          "오늘 한 운동을 추가하면 firestore에 저장 되고, 저장 되어있던 이번 주 운동 시간을 바탕으로 운동 시간 그래프가 변동됩니다. 운동 추가는 중복으로 다양한 운동을 추가할 수 있습니다.",
        image: "/image/projectDetail/project06-exercise.png",
      },
      {
        page: "main & my",
        name: "일정 추가,\n 오늘 일정 보기",
        content:
          "my page에서 일정을 추가하면 firestore에 저장되며 좌측 달력 하단에 표시됩니다. 오늘 일정은 main 페이지에서 확인하거나 삭제할 수 있습니다.",
        image: "/image/projectDetail/project06-schedule.png",
      },
      {
        page: "signUp",
        name: "회원가입, 로그인",
        content:
          "Firebase를 통해 이메일을 이용한 회원가입을 구현하여, 로그인, 로그아웃, 회원탈퇴가 가능하고 개인화 된 페이지를 제공합니다.",
        image: "/image/projectDetail/project06-signup.png",
      },
    ],
  },
];

const data: DataType[] = [...originData].sort(function (
  a: DataType,
  b: DataType
) {
  return b.id - a.id;
});

export { data };
