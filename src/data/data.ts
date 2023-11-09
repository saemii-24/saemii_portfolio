export interface DataType {
  id: number;
  subTitle: string;
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
    subTitle: "식물\n 쇼핑몰",
    preview:
      "'반려식물'을 주제로 한 가상의 식물 쇼핑몰입니다. HTML과 CSS, JavaScript를 활용하였고, 웹표준을 지켜 제작했습니다.",
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
      { "개발에 사용된 언어/라이브러리": "HTML, CSS, JavaScript" },
      {
        "주요 기능":
          "hover 애니메이션, 제품 선택 버튼, 가격·상품 카운트, 장바구니 모달, 버튼 클릭 후 이미지 변경, 내비게이션",
      },
      {
        "개발 비화":
          "처음으로 제작한 웹사이트입니다. 레이아웃 디자인을 할 때 '이런 기능을 표현할 수 있었으면 좋겠다'라는 생각으로 디자인했고, 자바스크립트를 통해 실제로 구현하며 뿌듯함을 느낄 수 있었습니다.\n 한편으로는 스스로가 자바스크립트로 구현할 수 있는 정도가 한정되어 있어, 더 많은 기능을 생각하지 못한 것은 아닌지 아쉬움도 남는 프로젝트였습니다. 덕분에 더 멋진 웹을 위해 자바스크립트와 친해져야겠다는 목표를 세울 수 있었습니다.",
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
          "오브젝트에 호버할 시 사용자가 해당 오브젝트에 접근할 수 있거나, 바르게 접근했다는 것을 알 수 있도록 다양한 hover 애니메이션을 주었습니다. ",
        image: "/image/projectDetail/project01-hover.png",
      },
      {
        page: "sub",
        name: "제품 선택 버튼",
        content:
          "상세페이지 상단에 찜버튼과 꽃잎 색상 버튼을 만들고, 사용자가 클릭했을 때 class를 이용해 반응할 수 있도록 구현했습니다. 배송방법의 경우 툴팁을 만들어 hover 한 경우 관련 내용이 등장하도록 했습니다.",
        image: "/image/projectDetail/project01-subTop.png",
      },
      {
        page: "sub",
        name: "가격·상품 카운트",
        content:
          "꽃잎 색상을 선택하면 구매 수량을 선택할 수 있는 박스가 등장합니다. 변동 된 가격은 주문금액 우측에 나타나며, 가격 정보 박스의 X버튼을 누를 경우  박스는 사라지며 색상 선택과 수량, 값은 초기화 됩니다.",
        image: "/image/projectDetail/project01-calculate.png",
      },
      {
        page: "sub",
        name: "장바구니 모달",
        content:
          "장바구니 버튼을 클릭하면, 장바구니로 이동할 수 있는 모달이 표시 됩니다. 쇼핑 계속하기 혹은 X버튼을 클릭하면 모달이 닫힙니다.",
        image: "/image/projectDetail/project01-modal.png",
      },
      {
        page: "sub",
        name: "버튼 클릭 후 이미지 변경",
        content:
          "상세페이지 하단에서 사용자가 원하는 꽃잎 색상의 사진을 선택해서 볼 수 있도록 색상 버튼을 만들어, 꽃잎 색상을 선택하면 해당 색상의 이미지를 보여줄 수 있도록 구현했습니다.",
        image: "/image/projectDetail/project01-selectColor.png",
      },
      {
        page: "sub",
        name: "내비게이션",
        content:
          "사용자가 현재 뷰포트를 통해 보고 있는 페이지의 위치를 파악하고, 내비게이션에서 표시합니다. 사용자가 클릭하거나, 스크롤 해도 동일하게 작동합니다.",
        image: "/image/projectDetail/project01-navigation.png",
      },
    ],
  },
  {
    id: 1,
    subTitle: "지브리 사이트",
    preview:
      "'스튜디오 지브리'에 관련된 정보를 찾아볼 수 있는 웹사이트 입니다. HTML, CSS, JavaScript, jQuery가 사용되었고, 보다 동적인 사이트를 제작하고자 했습니다.",
    previewImg: "/image/project02.jpg",
    active: false,
    click: false,
    previewPage: [
      { 메인: "/image/project01_main_01.png" },
      { 서브1: "/image/project01_main_02.png" },
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
        "개발에 사용된 언어/라이브러리": "HTML, CSS, JavaScript, jQuery",
      },
      {
        "주요 기능":
          "메인 이미지 스크롤 이벤트, 대표 애니메이션의 페이지네이션, 가로 스크롤 카드, input range와 스크롤 연동, youtube API를 활용한 팝업창, data를 이용한 캐릭터 설명,",
      },
      {
        "개발 비화":
          "첫 반응형 작업이 이루어진 프로젝트입니다. 어떻게 하면 요소들을 동적으로 표현할 수 있을지, 세 가지 사이즈에서 어떤 식으로 CSS를 변경 해 사이즈에 적절하게 대응할 수 있을지 고민할 수 있었습니다. 처음 PC사이즈를 작업하고, 마지막으로 핸드폰 사이즈를 작업하면서 어떻게 구조를 만들어야 세 가지 사이즈에서 적절하게 CSS를 줄 수 있는지에 대한 고민이 부족하다는걸 느끼기도 했습니다. 적절한 모양을 만들 때 태그가 지나치게 많아지고, 이를 제대로 분리하지 못했다는 것에 아쉬움이 남았고, 다음 프로젝트에서는 코드를 줄이기 위한 고민이 늘어나는 계기가 되었습니다.",
      },
    ],
    language: [
      {
        CSS: "Web, Tablet, Mobile 3가지 사이증에 맞춰 media query를 이용해 반응형 페이지를 제작했습니다.",
      },
      {
        JavaScript:
          "사이트 전체적으로 IntersectionObserver을 이용해 요소가 화면에 들어온 경우 class명을 추가하거나 제거해 애니메이션을 주었습니다.",
      },
    ],
    detail: [
      {
        name: "메인 이미지 스크롤 이벤트",
        content:
          "사용자의 스크롤 값에 따라 이미지가 커지면서 메인 페이지를 채웁니다. 이때 이미지로 인해 헤더가 잘보이지 않을 수 있어 헤더의 컬러도 적절히 변경해주었습니다.",
        image: "/image/projectDetail/project02-main.png",
      },
      {
        name: "애니메이션 페이지네이션",
        content:
          "CSS와 자바스크립트를 이용해 만든 가로 스크롤 애니메이션입니다. 스크롤에 맞춰 오른쪽에서 왼쪽으로 카드가 이동하며, 카드에 hover하면 연관있는 지브리 애니메이션 작품을 보여줍니다.",
        image: "/image/projectDetail/project02-pagination.png",
      },
      {
        name: "가로 스크롤 카드",
        content:
          "사용자의 스크롤이 일정 위치에 도달 하면 카드가 오른쪽에서 들어오며, 카드에 hover하면 카드가 회전하며 관련 애니메이션 작품을 보여줍니다.",
        image: "/image/projectDetail/project02-card.png",
      },
      {
        name: "input range와 스크롤 연동",
        content:
          "input type='range'의 기본 디자인을 수정하고, input 태그의 value값을 이용해 사용자가 드래그 하거나 클릭해서 value값을 조정하면 그 값을 받아 계산 해 시놉시스 카드가 오른쪽에서 왼쪽으로 이동하며 보여집니다.",
        image: "/image/projectDetail/project02-synopsis.png",
      },
      {
        name: "youtube API를 활용한 팝업창",
        content:
          "Youtube API를 활용해 재생 버튼을 누르면 팝업창이 올라오면서 관련 영상을 볼 수 있도록 했습니다. 화면 비율을 고려해 viewport 사이즈가 작은 경우에는 새 창의 Youtube로 연결됩니다.",
        image: "/image/projectDetail/project02-youtubeAPI.png",
      },
      {
        name: "data를 이용한 캐릭터 설명",
        content:
          "각 캐릭터의 설명이 길지만, HTML 태그 구조는 동일하기 때문에 data.js 파일에 캐릭터 정보를 분리하고 JavaScript에서 태그를 만들어주었습니다. 사진을 클릭해 캐릭터의 다른 사진을 확인할 수 있고, 버튼을 눌러 다음 캐릭터로 이동할 수 있습니다.",
        image: "/image/projectDetail/project02-character.png",
      },
    ],
  },
  {
    id: 2,
    subTitle: "호주 여행 사이트",
    preview:
      "팀프로젝트로 3명의 팀원이 함께 제작한 반응형 여행 사이트입니다. 저는 메인페이지를 담당했으며, 현재 호주의 날씨와 시간을 위해 Luxon 라이브러리와 Weather API를 활용했습니다. ",
    previewImg: "/image/project03.jpg",
    active: false,
    click: false,
    previewPage: [
      { 메인: "/image/project01_main_01.png" },
      { 서브1: "/image/project01_main_02.png" },
      { 서브2: "/image/project01_main_03.png" },
    ],
    link: [
      { page: "https://saemii-24.github.io/project_1/" },
      { github: "https://github.com/saemii-24/project_1" },
      { document: "https://saemii-24.github.io/project_1/" },
    ],
    develop: [
      { 작업기간: "23.08.21 - 23.08.30" },
      { 기여도: "3인 팀 작업/35%(메인페이지 담당)" },
      {
        "개발에 사용된 언어/라이브러리":
          "HTML, CSS, JavaScript, jQuery, swiper, Luxon, weather API",
      },
      {
        "주요 기능":
          "메인페이지 글씨·화면 전환, svg 지도 선택, swiper를 이용한 슬라이드, 서울과 호주의 날씨·시간 보드",
      },
      {
        "개발 비화":
          "해당 프로젝트는 팀 프로젝트로 진행되었습니다. 처음으로 팀원 세 명이 하나의 프로젝트를 진행했던 만큼, 초반에 함께 포인트 컬러, 폰트와 전반적인 레이아웃을 의논했지만, 전반적인 통일성 부분에서 아쉬움이 남아, 작업 중간중간 더 많이 대화하고, 서로의 작업물을 리뷰하는 시간이 필요하지 않았나 하는 아쉬움이 남습니다. 개인 작업 측면에서는 호주는 서머타임을 시행하고 도시마다 시행 여부가 달라, javascript 내의 date만을 이용해서 시간을 계산하기에 어려움이 있었습니다. 이를 해결하기 위해 luxon 라이브러리를 적용하고, 현재 날씨를 표현하기 위해 weather API를 사용하게 되었습니다. 제작 당시 호주가 서머타임을 시행하지 않아 세 도시의 시간이 똑같았기에 문제가 되지 않았습니다만, 10월 이후 브리즈번은 서머타임을 시행하지 않아 도시의 시간이 달라짐으로 서머타임 관련 오류가 발견되어 이 부분을 해결했습니다. 덕분에 '내가 생각하지 못한 오류를 다음에 발견할 수도 있음을 기억하자' 라는 마음가짐을 갖게 되었습니다.",
      },
    ],
    language: [
      {
        CSS: "Web, Tablet, Mobile 3가지 사이증에 맞춰 media query를 이용해 반응형 페이지를 제작했습니다.",
      },
      {
        JS: "weather api, luxon 라이브러리를 이용해 서울과 호주의 세 도시의 시간/날씨 보드를 제작했습니다. 이때 api key가 외부에 노출 되지 않도록 serverless function과 vercel를 이용해 배포했습니다.",
      },
    ],
    detail: [
      {
        name: "메인페이지 글씨·화면 전환",
        content:
          "자바스크립트 비동기 함수(setTimeout)를 이용해 한 단어씩 등장해 문장을 이루는 애니메이션을 구현했습니다. 0.3초 간격으로 단어가 등장한 다음, 총 5초가 지나 시간 bar가 다 채워지면 다음 이미지와 문장을 보여줍니다.",
        image: "/image/projectDetail/project03-main.png",
      },
      {
        name: "svg 지도 선택",
        content:
          "호주의 행정구역 지도를 svg를 이용해 제작하고, JavaScript에 정의된 배열 데이터를 활용해 각 구역을 선택하면 구역에 맞는 정보가 우측 카드에 표시될 수 있도록 구현했습니다. 이때 사용자의 스크롤에 맞춰 이미지가 위 아래로 움직입니다.",
        image: "/image/projectDetail/project03-citySelect.png",
      },
      {
        name: "swiper를 이용한 슬라이드",
        content:
          "swiper를 이용해 즐길거리에 관련된 카드 슬라이드를 제작했습니다. 이때 카드에 호버하면 사용자가 카드를 선택한 것을 인지할 수 있도록 카드의 위치가 위로 올라갑니다.",
        image: "/image/projectDetail/project03-slide.png",
      },
      {
        name: "서울과 호주의 날씨·시간 보드",
        content:
          "weather API와 luxon 라이브러리를 활용해 서울과 호주 세 도시의 날씨와 시간을 알 수 있는 보드를 구현했습니다. 서머타임 시행 시 서머타임 아이콘이 표시되며, 날씨 데이터를 가져오기까지 시간이 걸리므로 사용성을 위해 로딩 스피너를 추가해주었습니다.",
        image: "/image/projectDetail/project03-weather.png",
      },
    ],
  },
  {
    id: 3,
    subTitle: "교보문고 클론코딩",
    preview:
      "HTML, CSS, JAVASCIPT, jQuery, AJAX를 활용해 제작한 교보문고 Ebook의 클론코딩 사이트입니다. 책의 이미지는 모두 API를 활용해 제작하였으며, 메인, 서브, 서브2(미리보기)의 세 가지 페이지를 제작했습니다",
    previewImg: "/image/project04.jpg",
    link: [
      { page: "https://saemii-24.github.io/project_1/" },
      { github: "https://github.com/saemii-24/project_1" },
      { document: "https://saemii-24.github.io/project_1/" },
    ],
    active: false,
    click: false,
    previewPage: [
      { 메인: "/image/project01_main_01.png" },
      { 서브1: "/image/project01_main_02.png" },
      { 서브2: "/image/project01_main_03.png" },
    ],
    develop: [
      { 작업기간: "23.09.08 - 23.09.21" },
      { 기여도: "개인작업/100%" },
      {
        "개발에 사용된 언어/라이브러리": "HTML, CSS, JavaScript, jQuery, AJAX",
      },
      {
        "주요 기능":
          "swiper를 이용한 다양한 슬라이더, 데이터 활용 리뷰 정렬, localStorage를 이용한 최근본 책, 미리보기 글자 크기 변경",
      },
      {
        "개발 비화":
          "법률은 특별한 규정이 없는 한 공포한 날로부터 20일을 경과함으로써 효력을 발생한다. 모든 국민은 직업선택의 자유를 가진다. 새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.",
      },
    ],
    language: [
      {
        AJAX: "HTML, CSS, JavaScript, jQuery를 활용해 제작한 반응형 웹 사이트입니다. 스크롤 이벤트를 활용해 보다 동적인 사이트를 제작하고자 했습니다",
      },
      {
        "JS, jQuery":
          "HTML, CSS, JavaScript, jQuery를 활용해 제작한 반응형 웹 사이트입니다. 스크롤 이벤트를 활용해 보다 동적인 사이트를 제작하고자 했습니다",
      },
    ],
    detail: [
      {
        name: "swiper의 다양한 슬라이드",
        content:
          "swiper라이브러리를 사용해 ajax로 받은 책 데이터를 다양한 형태의 슬라이드에 적용했습니다.",
        image: "/image/projectDetail/project04-slide.png",
      },
      {
        name: "데이터 활용 리뷰 정렬",
        content:
          "가상의 리뷰 데이터를 만든 후, 그 데이터를 이용해 리뷰 section을 만들었습니다. 상단 탭과 좋아요/최신순의 정렬 기준, 하단의 페이지네이션을 클릭하면 해당하는 데이터의 내용을 Javascript로 계산해 업데이트 합니다.",
        image: "/image/projectDetail/project04-reviewSort.png",
      },
      {
        name: "최근본 책",
        content:
          "페이지가 변경되어도 최근본 상품을 유지할 수 있도록 localStorage를 이용했습니다. 메인/서브 페이지에 표시되어있는 책을 클릭하면 해당 책의 제목이 최대 5개까지 localStorage에 저장됩니다.",
        image: "/image/projectDetail/project04-localStorage.png",
      },
      {
        name: "미리보기 글자 크기 변경",
        content:
          "input창을 조절해 min~max값을 받아 글자 크기가 변경됩니다.  초기화를 눌러 원래 글자 크기로 돌아갈 수 있으며, 글자 크기가 변경되더라도 줄 간격이 적절하게 유지됩니다.",
        image: "/image/projectDetail/project04-fontSize.png",
      },
    ],
  },
  {
    id: 4,
    subTitle: "체크카드 검색 사이트",
    preview:
      "React와 Redux를 이용해 제작한 체크카드 검색 사이트 입니다. 스크롤 이벤트에는 GSAP을 활용했습니다.",
    previewImg: "/image/project05.jpg",
    link: [
      { page: "https://saemii-24.github.io/project_1/" },
      { github: "https://github.com/saemii-24/project_1" },
      { document: "https://saemii-24.github.io/project_1/" },
    ],
    active: false,
    click: false,
    previewPage: [
      { 메인: "/image/project01_main_01.png" },
      { 서브1: "/image/project01_main_02.png" },
      { 서브2: "/image/project01_main_03.png" },
    ],
    develop: [
      { 작업기간: "3주" },
      { 기여도: "개인작업/100%" },
      {
        "개발에 사용된 언어/라이브러리":
          "react, redux, react-router, react-parallax-tilt, react-bootstrap, SCSS, lodash, GSAP, Swiper",
      },
      {
        "주요 기능":
          "랜덤 데이터 선택 후 노출, 카드 보관함 추가, 카드박스 중복/초과 팝업, 카드 보관함 삭제, 원하는 카드 필터, 카드 혜택보기",
      },
      {
        "개발 비화":
          "리액트를 통해 다양한 카드 정보에 대한 상세페이지를 한 번에 만들 수 있다는 점이 재밌었던 프로젝트입니다. 데이터를 만들고 사용하면서 객체 데이터는 어떻게 활용해야 할지, 배열 데이터는 또 어떻게 해야 할지 많은 고민이 있었습니다. 특히 카드사와 혜택을 설정해 필터하는 과정에서 다소 시간이 소요되었는데, every와 some 두 가지의 배열 메소드로 해결하며, 기존에 거의 사용하지 않았던 배열 메소드를 공부할 수 있었습니다.",
      },
    ],
    language: [
      {
        React:
          "다양한 데이터를 활용해 여러 페이지를 구성하기 위해 사용했습니다.",
      },
      {
        Redux:
          "사용자가 선택한 카드 데이터를 전역적으로 관리하기 위해 사용했습니다. 카드 보관함, 카드 비교, 중복/초과 팝업 등에 활용했습니다.",
      },
      {
        GSAP: "페이지의 스크롤 애니메이션을 구현하기 위해 사용했습니다.",
      },
    ],
    detail: [
      {
        name: "랜덤 데이터 선택 후 노출",
        content:
          "홈페이지 접속 시 6가지의 카드 혜택 중 랜덤으로 혜택 한 가지를 보여주며, 해당 혜택을 가지고 있는 카드를 데이터에서 랜덤 3개를 선택해 보여줍니다. ‘더 많은 혜택 알아보기’를 클릭하면 해당 카드의 detail 페이지로 이동합니다.",
        image: "/image/projectDetail/project05-random.png",
      },
      {
        name: "카드 보관함 추가",
        content:
          "카드 비교를 선택하면 카드 보관함에 카드가 담깁니다. 이때 보관함은 Redux로 관리되어 다른 페이지에서도 접근할 수 있습니다. 카드 보관함에 카드를 담고 상세 혜택을 비교하는 페이지로 이동할 수 있습니다.",
        image: "/image/projectDetail/project05-cardBoxPush.png",
      },
      {
        name: "카드박스 중복/초과 팝업",
        content:
          "사용자가 카드 비교를 시도할 때, 이미 해당 카드가 담겼다면 중복된 카드의 경우 중복되었다는 팝업을 표시합니다. 만약 중복되지 않은 카드이지만 현재 담긴 카드가 3장 이상이면 3장의 카드만 담을 수 있다는 팝업을 표시합니다.",
        image: "/image/projectDetail/project05-popup.png",
      },
      {
        name: "카드 보관함 삭제",
        content:
          "우측 하단의 카드 비교함에서도 카드를 삭제할 수 있고, 페이지에서도 삭제할 수 있습니다. 이때 하단 카드 비교함과 카드 비교 페이지 모두 Redux로 상태를 공유하므로, 한 곳에서 삭제를 클릭하면 동시에 제거됩니다.",
        image: "/image/projectDetail/project05-cardBoxRemove.png",
      },
      {
        name: "원하는 카드 필터",
        content:
          "filter, every, some 등의 배열 메소드를 활용해 사용자가 선택한 카드사와 혜택을 충족하는 카드를 표시합니다. 이때 카드사는 선택한 카드사가 모두 검색되며, 혜택은 해당 혜택을 모두 가지고 있는 카드를 표시합니다.",
        image: "/image/projectDetail/project05-cardFilter.png",
      },
      {
        name: "카드 혜택보기",
        content:
          "'자세한 혜택' 버튼을 클릭하면 해당 카드의 detail 페이지로 이동합니다. useParams를 이용해 데이터의 id를 찾고, 해당 id를 가진 데이터를 찾아 렌더링 합니다. 혜택을 나타내는 아이콘은 미리 정의해 둔 switch case 문을 이용했습니다.",
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
