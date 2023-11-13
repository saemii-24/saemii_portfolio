export interface DataType {
  id: number;
  subTitle: string;
  projectTitle: string;
  preview: string;
  previewImg: string;
  active: boolean;
  click: boolean;
  previewPage: object[];
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
      "반려 식물'을 주제로 한 가상의 식물 쇼핑몰입니다. 웹 표준을 지켜 제작하였으며, 상품 카운트, 선택, 스크롤에 따른 내비게이션 변화 등의 효과를 주었습니다.",
    previewImg: "/image/project01.jpg",
    active: false,
    click: false,
    previewPage: [
      { 메인: "/image/projectPreview/project01-main.png" },
      { 서브: "/image/projectPreview/project01-sub.png" },
    ],
    link: [
      { page: "https://saemii-24.github.io/project_1/" },
      { github: "https://github.com/saemii-24/project_1" },
      { document: "https://saemii-24.github.io/project_1/" },
    ],
    develop: [
      { 작업기간: "23.06.21 - 23.07.07" },
      { 기여도: "개인작업/100%" },
      { "개발에 사용된 언어/라이브러리": "HTML, CSS, Javascript" },
      {
        "주요 기능":
          "hover 애니메이션, 제품 선택 버튼, 가격·상품 카운트, 장바구니 모달, 색상 버튼 클릭 시 이미지 변경, 페이지 내비게이션",
      },
      {
        "개발 비화":
          "처음으로 제작한 웹사이트입니다. 레이아웃 디자인을 할 때 '이런 기능을 표현할 수 있었으면 좋겠다'라는 생각으로 디자인했고,\n 자바스크립트를 통해 실제로 구현하며 뿌듯함을 느낄 수 있었습니다.\n 한편으로는 스스로가 자바스크립트로 구현할 수 있는 정도가 한정되어 있어, 더 많은 기능을 생각하지 못한 것은 아닌지 아쉬움도 남는 프로젝트였습니다. 덕분에 더 멋진 웹을 위해 자바스크립트와 친해져야겠다는 목표를 세울 수 있었습니다.",
      },
    ],
    language: [
      {
        CSS: "CSS의 hover의사 클래스를 통해 다양한 효과를 주었습니다.",
      },
      {
        JavaScript:
          "JavaScript class를 이용해 버튼 클릭효과와 상품 카운트, 내비게이션 등을 구현했습니다.",
      },
    ],
    detail: [
      {
        page: "main",
        name: "hover 애니메이션",
        content:
          "사용자가 오브젝트에 호버할 시, 해당 오브젝트에 접근할 수 있으며 바르게 접근했다는 것을 인지할 수 있도록 다양한 hover 애니메이션을 주었습니다.",
        image: "/image/projectDetail/project01-hover.png",
      },
      {
        page: "sub",
        name: "제품 선택 버튼",
        content:
          "상세 페이지 상단에 상품 찜 버튼과 꽃잎의 색상 버튼이 있어, 사용자가 클릭하면 class가 Toggle 되어 반응합니다. 배송 방법의 경우 툴 팁을 만들어 hover 했을 때 관련 내용을 볼 수 있도록 했습니다.",
        image: "/image/projectDetail/project01-subTop.png",
      },
      {
        page: "sub",
        name: "가격·상품 카운트",
        content:
          "꽃잎 색상을 선택하면 구매 수량을 조정할 수 있는 박스가 등장하며 +, - 버튼을 이용해 수량과 그에 따른 가격을 조정할 수 있습니다. X 버튼을 누를 시 박스가 사라지며 색상, 수량, 가격은 초기화됩니다.",
        image: "/image/projectDetail/project01-calculate.png",
      },
      {
        page: "sub",
        name: "장바구니 모달",
        content:
          "장바구니 버튼을 클릭하면 장바구니로 이동할 수 있는 모달이 표시됩니다. 이때 '쇼핑 계속하기' 혹은 X 버튼을 클릭하면 모달이 닫힙니다.",
        image: "/image/projectDetail/project01-modal.png",
      },
      {
        page: "sub",
        name: "색상 버튼 클릭 시\n 이미지 변경",
        content:
          "사용자가 원하는 꽃잎 색상의 사진을 선택해서 볼 수 있도록 색상 버튼을 선택했습니다. 버튼을 클릭하면 해당하는 색상 꽃의 이미지를 볼 수 있습니다.",
        image: "/image/projectDetail/project01-selectColor.png",
      },
      {
        page: "sub",
        name: "페이지 내비게이션",
        content:
          "사용자가 현재 뷰포트를 통해 보고 있는 페이지의 위치를 파악하고, 내비게이션 하단에 어느 지점을 보고 있는지 표시합니다. 사용자가 클릭하거나 스크롤 해도 동일하게 작동합니다. ",
        image: "/image/projectDetail/project01-navigation.png",
      },
    ],
  },
  {
    id: 1,
    subTitle: "스튜디오 지브리 사이트",
    projectTitle: "Ghibli World",
    preview:
      "스튜디오 지브리'에 관련된 정보를 찾아볼 수 있는 웹사이트입니다. Intersection Observer를 이용해 사용자의 스크롤에 따른 애니메이션 효과를 주었고, youtube API를 이용해 관련 동영상을 함께 보여줍니다.",
    previewImg: "/image/project02.jpg",
    active: false,
    click: false,
    previewPage: [
      { 메인: "/image/projectPreview/project02-main.jpg" },
      { 서브: "/image/projectPreview/project02-sub.jpg" },
    ],
    link: [
      { page: "https://saemii-24.github.io/project_2/" },
      { github: "https://github.com/saemii-24/project_2" },
      { document: "https://saemii-24.github.io/project_1/" },
    ],
    develop: [
      { 작업기간: "23.07.12 - 23.08.12" },
      { 기여도: "개인작업/100%" },
      {
        "개발에 사용된 언어/라이브러리":
          "HTML, CSS Javascript, jQuery(슬라이드), Youtube API",
      },
      {
        "주요 기능":
          "메인 이미지 스크롤 이벤트, 애니메이션 section pagination, 가로 스크롤 카드, input type='range'와 카드 이동,\n youtube API를 활용한 팝업창, 캐릭터 data를 이용한 태그 생성",
      },
      {
        "개발 비화":
          "처음으로 세 가지 사이즈에 대응하는 반응형 사이트를 제작하며, 각 사이즈에 적절한 레이아웃을 설정하고,\n PC 사이즈에서 다양한 스크롤 애니메이션을 넣고자 했습니다. MOBILE 사이즈를 작업할 때 내용이 많거나\n 모바일에서 대응하기 어렵다고 판단되는 경우에는 애니메이션을 삭제하거나 대체했습니다. \n 이때 세 가지 사이즈를 제작하며 각 사이즈에 적절한 구조를 만들고자 태그를 추가하다 보니, 태그가 지나치게 많아져\n 코드를 수정하거나 이해하기 어렵다는 것을 깨달았습니다. 이를 제대로 분리하지 못했다는 것이 아쉬웠지만,\n 이후 프로젝트부터 어떻게 하면 코드를 줄일 수 있는지 고민해 볼 수 있는 계기가 되었습니다.",
      },
    ],
    language: [
      {
        CSS: "media query를 이용해 Web, Tablet, Mobile 3가지 사이즈의 반응형 페이지를 제작했습니다.",
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
          "사용자의 스크롤 값에 따라 이미지의 크기가 변경되며 메인페이지를 채웁니다. 이때 이미지로 인해 헤더가 잘 보이지 않을 수 있어 헤더의 컬러도 적절히 변경해 주었습니다.",
        image: "/image/projectDetail/project02-main.png",
      },
      {
        page: "main",
        name: "애니메이션 section\n pagination",
        content:
          "대표 애니메이션 각각의 section으로 이동할 수 있는 pagination을 만들었습니다. 클릭하면 해당 section으로 이동하고, 클릭이 아닌 스크롤을 할 때도 적절한 위치에 도달하면 해당 section의 pagination을 컬러가 변경됩니다.",
        image: "/image/projectDetail/project02-pagination.png",
      },
      {
        page: "main",
        name: "가로 스크롤 카드",
        content:
          "CSS와 자바스크립트를 이용해 만든 가로 스크롤 애니메이션입니다. 스크롤에 맞춰 오른쪽에서 왼쪽으로 카드가 이동하며, 카드에 hover 하면 연관 있는 지브리 애니메이션 작품을 보여줍니다.",
        image: "/image/projectDetail/project02-card.png",
      },
      {
        page: "sub",
        name: "input type='range'와\n 카드 이동",
        content:
          "input type='range'의 값과 시놉시스 카드들의 움직임을 연동했습니다. 사용자가 드래그하거나 클릭해서 input 값을 조정하면 그 값을 받아 시놉시스 section이 움직입니다.",
        image: "/image/projectDetail/project02-synopsis.png",
      },
      {
        page: "sub",
        name: "youtube API를\n 활용한 팝업창",
        content:
          "재생 버튼을 누르면 팝업창이 올라오며 해당 애니메이션의 관련 영상을 볼 수 있습니다. 해당 영상은 youtube API를 통해 삽입하였고, 화면 비율을 고려하여 작은 사이즈에서는 팝업이 아닌 해당 영상의 youtube site로 이동합니다.",
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
      "3명이 함께 만든 팀 프로젝트 사이트입니다. 저는 메인페이지를 담당했으며, Luxon라이브러리와 Weather API를 통해 도시별 여행지 추천과 함께 호주의 현재 시각, 서머타임 여부, 날씨를 보여줍니다.",
    previewImg: "/image/project03.jpg",
    active: false,
    click: false,
    previewPage: [{ 메인: "/image/projectPreview/project03-main.jpg" }],
    link: [
      { page: "https://saemii-24-australia.netlify.app/" },
      { github: "https://github.com/saemii-24/australia_netlify_snowpack/" },
      { document: "https://saemii-24.github.io/project_1/" },
    ],
    develop: [
      { 작업기간: "23.08.21 - 23.08.30" },
      { 기여도: "3인 팀 작업/35%(header, footer 제외 메인페이지 담당)" },
      {
        "개발에 사용된 언어/라이브러리":
          "HTML, CSS, JavaScript, swiper, Luxon, weather API",
      },
      {
        "주요 기능":
          "메인화면 문장·이미지 전환, SVG와 데이터를 이용, swiper를 이용한 슬라이드, 서울과 호주의 날씨·시간 보드",
      },
      {
        "개발 비화":
          "해당 프로젝트는 팀 프로젝트로 진행되었습니다. '여러 사람이 작업에도 한 사람이 제작한 것처럼' 보이기 위해서는\n 초반에 꼼꼼한 계획이 필요하고, 작업 중간중간에 서로의 작업물을 피드백하는 것이 중요하다고 느끼는 프로젝트였습니다. \n개인작업 측면에서는, 다양한 것(API, 라이브러리 등)을 시도해 본 프로젝트이기도 합니다. 서머타임을 시행하는\n 호주 특성상 javascript 내의 date만을 이용해서 시간을 계산하기에 어려움이 있어\n 시간 라이브러리인 luxon 라이브러리를 적용했습니다. 또 현재 날씨를 표현하기 위해 weather API를 사용했습니다.",
      },
    ],
    language: [
      {
        Luxon:
          "서울, 시드니, 멜버른, 브리즈번의 시간과 서머타임 여부 등을 나타내기 위해 사용했습니다.",
      },
      {
        "Weather API": "각 도시의 현재 날씨를 나타내기 위해 사용했습니다.",
      },
      {
        JavaScript:
          " 페이지를 동적으로 만드는 데 사용했습니다. 특히 메인 화면의 슬라이드와 스크롤 애니메이션 구현을 위해 사용했습니다.",
      },
    ],
    detail: [
      {
        page: "main",
        name: "메인화면\n 문장·이미지 전환",
        content:
          "자바스크립트 비동기 함수(setTimeout)를 이용해 한 단어씩 등장해 문장을 이루는 슬라이드를 구현했습니다. 이미지, 시간 bar, 문장이 짝을 이루고 있고, 0.3초 간격으로 단어가 등장한 다음, 총 5초가 지나면 다음 이미지와 문장을 보여줍니다.",
        image: "/image/projectDetail/project03-main.png",
      },
      {
        page: "main",
        name: "SVG와 데이터를 이용",
        content:
          "호주의 행정구역 지도를 svg포맷으로 제작하고 JavaScript에 정의된 배열 데이터를 활용해 각 구역을 선택하면 해당 구역의 정보가 우측 카드에 표시될 수 있도록 구현했습니다.",
        image: "/image/projectDetail/project03-citySelect.png",
      },
      {
        page: "main",
        name: "swiper를 이용한 슬라이드",
        content:
          "swiper를 이용해 호주 즐길 거리에 관련된 카드 슬라이드를 제작했습니다. 이때 카드에 호버하면 사용자가 카드를 올바르게 선택한 것을 인지할 수 있도록 카드가 살짝 위로 올라가도록 구현했습니다.",
        image: "/image/projectDetail/project03-slide.png",
      },
      {
        page: "main",
        name: "서울과 호주의\n 날씨·시간 보드",
        content:
          "weather API와 luxon 라이브러리를 활용해 서울과 호주 각 도시의 날씨와 시간을 나타내는 보드를 구현했습니다. 서머타임을 시행하는 경우 시간 옆에 서머타임 아이콘이 표시됩니다. 각 도시의 날씨 데이터를 가져오기까지 시간이 다소 소요되므로, 사용성을 위해 로딩 스피너를 추가해 주었습니다.",
        image: "/image/projectDetail/project03-weather.png",
      },
    ],
  },
  {
    id: 3,
    subTitle: "교보문고 클론코딩",
    projectTitle: "교보문고 eBook",
    preview:
      "Kakao API를 이용한 교보문고 eBook의 클론 사이트입니다. Swiper와 localStorage등을 이용해 최대한 본 사이트와 비슷하게 구현하고자 했습니다.",
    previewImg: "/image/project04.jpg",
    link: [
      { page: "https://saemii-24.github.io/project_4/" },
      { github: "https://github.com/saemii-24/project_4" },
      { document: "https://saemii-24.github.io/project_1/" },
    ],
    active: false,
    click: false,
    previewPage: [
      { 메인: "/image/projectPreview/project04-main.png" },
      { 서브1: "/image/projectPreview/project04-sub1.png" },
      { 서브2: "/image/projectPreview/project04-sub2.png" },
    ],
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
          "이번 프로젝트는 클론 코딩인 만큼 교보문고 ebook 페이지의 여러 기능을 직접 구현해 보는 것이 목표였습니다. eBook 서점인 만큼, 방대한 책 데이터를 정리하기 위해 많은 슬라이드가 존재했고, swiper를 이용해 비슷한 형태를 만들며 다양한 슬라이드를 구현해 볼 수 있었습니다.\n '최근 본 책'을 담을 수 있는 부분은 사용자가 새로고침 하거나 다른 페이지로 이동해도 동일한 데이터를 유지하기 위해 localStorage를 활용했습니다. 코드를 구성하면서 동적으로 생성되어야 하는 tag가 많았는데 보안상 innerHTML 사용을 지양하고자 하니, createElement, setAttribute등으로 생성해 코드의 가독성이 좋지 않다는 문제가 있었습니다. 코드를 줄이기 위해 많이 고민했었고, 이러한 부분은 다음 리액트 프로젝트에서 해결할 수 있었습니다.",
      },
    ],
    language: [
      {
        AJAX: "Kakao API에 데이터를 요청하고 응답받기 위해 사용했습니다.",
      },
      {
        "JavaScript, jQuery":
          "코드를 동적으로 만드는 데 사용했습니다. 중반까지 JavaScript를 이용해 Tag를 생성했으나 가독성이 좋지 않아 후반에는 다소 코드를 줄일 수 있는 jQuery를 사용했습니다.",
      },
    ],
    detail: [
      {
        page: "main",
        name: "swiper의\n 다양한 슬라이드",
        content:
          "swiper라이브러리를 사용해 ajax로 받은 책 데이터를 다양한 형태의 슬라이드에 적용했습니다.",
        image: "/image/projectDetail/project04-slide.png",
      },
      {
        page: "sub1",
        name: "가상의 데이터를\n 활용한 리뷰 정렬",
        content:
          "가상의 리뷰 데이터를 만들어 리뷰 section을 구성했습니다. 상단 탭과 좋아요 순/최신순, 페이지네이션 각각을 클릭하면 해당하는 데이터를 filter, sort, 그룹화를 통해 업데이트합니다.",
        image: "/image/projectDetail/project04-reviewSort.png",
      },
      {
        page: "all",
        name: "최근 본 책",
        content:
          "페이지가 변경되어도 최근 본 상품을 유지할 수 있도록 localStorage를 이용했습니다. 메인/서브 페이지의 책을 클릭하면 해당 책의 제목이 최대 5개까지 localStorage에 저장됩니다. 저장된 책의 제목을 이용해 가격, 책 표지를 요청하고, 얻은 데이터를 이용해 최근 본 상품을 구현했습니다.",
        image: "/image/projectDetail/project04-localStorage.png",
      },
      {
        page: "sub2",
        name: "미리보기 글자 크기 변경",
        content:
          "책 미리보기 페이지에서 input과 button을 이용해 글자 크기를 변경할 수 있습니다. input을 드래그하거나 양쪽의 버튼을 눌러 조정할 수 있으며, 초기화를 눌러 원래의 상태로 돌아갈 수 있습니다. 글자 크기가 변경되더라도 줄 간격이 적절하게 유지됩니다.",
        image: "/image/projectDetail/project04-fontSize.png",
      },
    ],
  },
  {
    id: 4,
    subTitle: "체크카드 검색 사이트",
    projectTitle: "Card Check",
    preview:
      "사용자가 원하는 카드사와 혜택을 필터해 보여주는 체크카드 검색 사이트입니다. 카드 비교함에 카드를 담아 원하는 카드를 비교할 수도 있습니다.",
    previewImg: "/image/project05.jpg",
    link: [
      { page: "https://saemii-24.github.io/project_5/" },
      { github: "https://github.com/saemii-24/project_5" },
      { document: "https://saemii-24.github.io/project_1/" },
    ],
    active: false,
    click: false,
    previewPage: [
      { main: "/image/projectPreview/project05-main.jpg" },
      { sub1: "/image/projectPreview/project05-sub1.jpg" },
      { sub2: "/image/projectPreview/project05-sub2.png" },
      { sub3: "/image/projectPreview/project05-sub3.jpg" },
    ],
    develop: [
      { 작업기간: "23.10.04 - 23.10.20" },
      { 기여도: "개인작업/100%" },
      {
        "개발에 사용된 언어/라이브러리":
          "React, Redux, React-router, React-parallx-tilt, SCSS, Bootstrap, Lodash, Gsap, Swiper",
      },
      {
        "주요 기능":
          "카드 혜택 랜덤 선택 후 노출, 카드 비교함 추가, 카드 비교함 중복/초과 팝업, 카드 비교함 삭제, 원하는 카드 필터, 카드 자세한 혜택 보기",
      },
      {
        "개발 비화":
          "리액트를 통해 다양한 카드 정보에 대한 상세페이지를 한 번에 만들 수 있다는 점이 재밌었던 프로젝트입니다.\n 데이터를 만들고 사용하면서 객체 데이터는 어떻게 활용해야 할지, 배열 데이터는 또 어떻게 해야 할지 많은 고민이 있었습니다. \n특히 카드사와 혜택을 설정해 필터하는 과정에서 다소 시간이 소요되었는데, every와 some 두 가지의 배열 메소드로 해결하며,\n 기존에 거의 사용하지 않았던 배열 메소드를 공부할 수 있었습니다.",
      },
    ],
    language: [
      {
        React:
          "다양한 데이터를 활용해 여러 페이지를 구성하기 위해 사용했습니다.",
      },
      {
        Redux:
          "사용자가 선택한 카드 데이터를 전역적으로 관리하기 위해 사용했습니다. 카드 비교함, 카드 비교, 중복/초과 팝업 등에 활용했습니다.",
      },
      {
        GSAP: "페이지의 스크롤 애니메이션을 구현하기 위해 사용했습니다.",
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
          "홈페이지 접속 시 6가지의 카드 혜택 중 랜덤으로 혜택 한 가지가 선택됩니다. 이때 선택된 혜택과 어울리는 영상과 함께 해당 혜택을 가지고 있는 카드를 랜덤으로 3장 선택해 노출합니다.",
        image: "/image/projectDetail/project05-random.png",
      },
      {
        page: "sub3",
        name: "카드 비교함 추가",
        content:
          "카드 비교를 선택하면 카드 비교함에 카드가 담깁니다. 이 비교함은 Redux로 관리되어 다른 페이지에서도 접근할 수 있습니다. 카드 비교함에 카드를 담고 상세 혜택을 비교하는 페이지로 이동할 수 있습니다.",
        image: "/image/projectDetail/project05-cardBoxPush.png",
      },
      {
        page: "all",
        name: "카드 비교함\n 중복/초과 팝업",
        content:
          "사용자가 카드 비교를 시도할 때, 이미 해당 카드가 담겼다면 중복된 카드의 경우 중복되었다는 팝업을 표시합니다. 만약 중복되지 않은 카드이지만 현재 담긴 카드가 3장 이상이면 3장의 카드만 담을 수 있다는 팝업을 표시합니다.",
        image: "/image/projectDetail/project05-popup.png",
      },
      {
        page: "all",
        name: "카드 비교함 삭제",
        content:
          "카드 비교함에서 카드를 삭제하고 싶다면 우측 하단에 표시되는 작은 비교함에서 삭제할 수 있으며, 비교하기 페이지 내에서도 삭제할 수 있습니다. 카드 비교함과 카드 비교 페이지 모두 Redux로 상태를 공유하므로, 한 곳에서 삭제를 클릭하면 동시에 제거됩니다.",
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
          "'자세한 혜택' 버튼을 클릭하면 해당 카드의 detail 페이지로 이동합니다. useParams를 이용해 데이터의 id를 찾고, 해당 id를 가진 데이터를 찾아 렌더링합니다. 혜택을 나타내는 아이콘은 미리 정의해 둔 switch case 문을 이용했습니다.",
        image: "/image/projectDetail/project05-detail.png",
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
