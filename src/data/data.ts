export interface DataType {
  id: number;
  subTitle: string;
  preview: string;
  previewImg: string;
  active: boolean;
  click: boolean;
  previewPage?: object[];
  develop?: object[];
  language?: object[];
  detail?: { name: string; content: string; image: string }[];
  link?: object[];
}

const originData: DataType[] = [
  {
    id: 0,
    subTitle: "식물 쇼핑몰",
    preview:
      "'반려식물'을 주제로 한 가상의 식물 쇼핑몰입니다.  HTML과 CSS, JavaScript를 활용하였고, 웹표준을 지켜 제작했습니다.",
    previewImg: "/image/project01.jpg",
    active: false,
    click: false,
    previewPage: [
      { 메인: "/image/project01_main_01.png" },
      { 서브1: "/image/project01_main_02.png" },
    ],
    link: [
      { page: "https://saemii-24.github.io/project_1/" },
      { github: "https://github.com/saemii-24/project_1" },
      { document: "https://saemii-24.github.io/project_1/" },
    ],
    develop: [
      { 작업기간: "23.06.21 - 23.07.07" },
      { "개발에 사용된 언어/라이브러리": "HTML, CSS, JavaScript" },
      {
        "주요 기능":
          "hover 애니메이션, 가격 정보 박스, 버튼 클릭 후 상세페이지 변경, 내비게이션",
      },
      {
        "개발 비화":
          "처음으로 제작한 웹사이트입니다. 레이아웃 디자인을 할 때 '이런 기능을 표현할 수 있었으면 좋겠다'라는 생각으로 디자인했고, 자바스크립트를 통해 실제로 구현하며 뿌듯함을 느낄 수 있었습니다. 한편으로는 스스로가 자바스크립트로 구현할 수 있는 정도가 한정되어 있어, 더 많은 기능을 생각하지 못한 것은 아닌지 아쉬움도 남는 프로젝트였습니다. 덕분에 더 멋진 웹을 위해 자바스크립트와 친해져야겠다는 목표를 세울 수 있었습니다.",
      },
    ],
    language: [
      {
        JavaScript: "",
      },
    ],
    detail: [
      {
        name: "hover 애니메이션",
        content:
          "html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. ",
        image: "/image/project01_main_01.png",
      },
      {
        name: "가격 정보 박스",
        content:
          "html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. ",
        image: "/image/project01_main_02.png",
      },
      {
        name: "버튼 클릭 후 상세페이지 변경",
        content:
          "꽃잎의 색상 또한 꽃을 구매하는 중요 요소이기 때문에 사용자가 원하는 색상의 꽃을 자세히 확인할 수 있도록, 버튼을 클릭하면 해당 색상의 이미지가 표시될 수 있도록 만들었습니다.",
        image: "/image/project01_main_03.png",
      },
      {
        name: "내비게이션",
        content:
          "html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. ",
        image: "/image/project01_main_03.png",
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
      { 서브2: "/image/project01_main_03.png" },
    ],
    link: [
      { page: "https://saemii-24.github.io/project_2/" },
      { github: "https://github.com/saemii-24/project_2" },
      { document: "https://saemii-24.github.io/project_1/" },
    ],
    develop: [
      { 작업기간: "3주" },
      { "개발에 사용된 언어/라이브러리": "HTML, CSS, JavaScript, jQuery" },
      {
        "주요 기능":
          "메인 이미지 스크롤 이벤트, 가로 스크롤 카드, input range와 스크롤 연동, youtube API를 활용한 팝업창, data를 이용한 캐릭터 설명,",
      },
      {
        "개발 비화":
          "처음으로 반응형 작업과 스크롤 이벤트를 넣어 만든 웹사이트 입니다. 어떻게 하면 동적으로 보일 수 있을지, 사이즈가 변경 될때 어떻게 CSS를 구성할지 고민할 수 있었습니다. 아쉬웠던 점은 처음으로 반응형 웹사이트를 만들다 보니 어떻게 구조를 만들어야 세 가지 사이즈에서 적절하게 CSS를 줄 수 있는지에 대한 고민이 부족하다는걸 알게 된 프로젝트 입니다. 적절한 모양을 만들 때 태그가 지나치게 많아지고, 이를 제대로 분리하지 못했다는 것에 큰 아쉬움이 남습니다.",
      },
    ],
    language: [
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
        image: "/image/project01_main_01.png",
      },
      {
        name: "가로 스크롤 카드",
        content:
          "CSS와 자바스크립트를 이용해 만든 가로 스크롤 애니메이션입니다. 스크롤에 맞춰 오른쪽에서 왼쪽으로 카드가 이동하며, 카드에 hover하면 연관있는 지브리 애니메이션 작품을 보여줍니다.",
        image: "/image/project01_main_02.png",
      },
      {
        name: "input range와 스크롤 연동",
        content:
          "input type='range'의 기본 디자인을 수정하고, input 태그의 value값을 이용해 사용자가 드래그 하거나 클릭해서 value값을 조정하면 그 값을 받아 계산 해 시놉시스 카드가 오른쪽에서 왼쪽으로 이동하며 보여집니다.",
        image: "/image/project01_main_03.png",
      },
      {
        name: "youtube API를 활용한 팝업창",
        content:
          "Youtube API를 활용해 재생 버튼을 누르면 팝업창이 올라오면서 관련 영상을 볼 수 있도록 했습니다. 화면 비율을 고려해 viewport 사이즈가 작은 경우에는 새 창의 Youtube로 연결됩니다.",
        image: "/image/project01_main_03.png",
      },
      {
        name: "data를 이용한 캐릭터 설명",
        content:
          "각 캐릭터의 설명이 길지만, HTML 태그 구조는 동일하기 때문에 data.js 파일에 캐릭터 정보를 분리하고 JavaScript에서 태그를 만들어주었습니다. 캐릭터 팝업을 통해 캐릭터의 설명을 한 눈에 알아보기 쉽고, 버튼을 눌러 다음 캐릭터로 이동할 수 있습니다.",
        image: "/image/project01_main_03.png",
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
    develop: [
      { 작업기간: "3주" },
      { "개발에 사용된 언어/라이브러리": "HTML, CSS, JavaScript, React" },
      {
        "주요 기능":
          "법률은 특별한 규정이 없는 한 공포한 날로부터 20일을 경과함으로써 효력을 발생한다. 모든 국민은 직업선택의 자유를 가진다. 새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.",
      },
      {
        "개발 비화": "API Key를 숨",
      },
    ],
    language: [
      {
        HTML: "HTML, CSS, JavaScript, jQuery를 활용해 제작한 반응형 웹 사이트입니다. 스크롤 이벤트를 활용해 보다 동적인 사이트를 제작하고자 했습니다",
      },
      {
        CSS: "HTML, CSS, JavaScript, jQuery를 활용해 제작한 반응형 웹 사이트입니다. 스크롤 이벤트를 활용해 보다 동적인 사이트를 제작하고자 했습니다",
      },
      {
        JS: "HTML, CSS, JavaScript, jQuery를 활용해 제작한 반응형 웹 사이트입니다. 스크롤 이벤트를 활용해 보다 동적인 사이트를 제작하고자 했습니다",
      },
    ],
    detail: [
      {
        name: "장바구니 페이지",
        content:
          "html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. ",
        image: "/image/project01_main_01.png",
      },
      {
        name: "장바구니 페이지",
        content:
          "html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. ",
        image: "/image/project01_main_02.png",
      },
      {
        name: "장바구니 페이지",
        content:
          "html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. ",
        image: "/image/project01_main_03.png",
      },
    ],
  },
  {
    id: 3,
    subTitle: "교보문고 클론코딩",
    preview:
      "HTML, CSS, JAVASCIPT, jQuery, AJAX를 활용해 제작한 교보문고 Ebook의 클론코딩 사이트입니다. 책의 이미지는 모두 API를 활용해 제작하였으며, 메인, 서브, 서브2(미리보기)의 세 가지 페이지를 제작했습니다",
    previewImg: "/image/project04.jpg",
    active: false,
    click: false,
    previewPage: [
      { 메인: "/image/project01_main_01.png" },
      { 서브1: "/image/project01_main_02.png" },
      { 서브2: "/image/project01_main_03.png" },
    ],
    develop: [
      { 작업기간: "23.09.08 - 23.09.21" },
      {
        "개발에 사용된 언어/라이브러리": "HTML, CSS, JavaScript, jQuery, AJAX",
      },
      {
        "주요 기능": "swiper를 이용한 슬라이더,",
      },
      {
        "개발 비화":
          "법률은 특별한 규정이 없는 한 공포한 날로부터 20일을 경과함으로써 효력을 발생한다. 모든 국민은 직업선택의 자유를 가진다. 새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.",
      },
    ],
    language: [
      {
        HTML: "HTML, CSS, JavaScript, jQuery를 활용해 제작한 반응형 웹 사이트입니다. 스크롤 이벤트를 활용해 보다 동적인 사이트를 제작하고자 했습니다",
      },
      {
        CSS: "HTML, CSS, JavaScript, jQuery를 활용해 제작한 반응형 웹 사이트입니다. 스크롤 이벤트를 활용해 보다 동적인 사이트를 제작하고자 했습니다",
      },
      {
        JS: "HTML, CSS, JavaScript, jQuery를 활용해 제작한 반응형 웹 사이트입니다. 스크롤 이벤트를 활용해 보다 동적인 사이트를 제작하고자 했습니다",
      },
    ],
    detail: [
      {
        name: "장바구니 페이지",
        content:
          "html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. ",
        image: "/image/project01_main_01.png",
      },
      {
        name: "장바구니 페이지",
        content:
          "html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. ",
        image: "/image/project01_main_02.png",
      },
      {
        name: "장바구니 페이지",
        content:
          "html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. ",
        image: "/image/project01_main_03.png",
      },
    ],
  },
  {
    id: 4,
    subTitle: "체크카드 검색 사이트",
    preview:
      "React와 Redux를 이용해 제작한 체크카드 검색 사이트 입니다. 스크롤 이벤트에는 GSAP을 활용했습니다.",
    previewImg: "/image/project05.jpg",
    active: false,
    click: false,
    previewPage: [
      { 메인: "/image/project01_main_01.png" },
      { 서브1: "/image/project01_main_02.png" },
      { 서브2: "/image/project01_main_03.png" },
    ],
    develop: [
      { 작업기간: "3주" },
      { "개발에 사용된 언어/라이브러리": "HTML, CSS, JavaScript, React" },
      {
        "주요 기능":
          "법률은 특별한 규정이 없는 한 공포한 날로부터 20일을 경과함으로써 효력을 발생한다. 모든 국민은 직업선택의 자유를 가진다. 새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.",
      },
      {
        "개발 비화":
          "법률은 특별한 규정이 없는 한 공포한 날로부터 20일을 경과함으로써 효력을 발생한다. 모든 국민은 직업선택의 자유를 가진다. 새로운 회계연도가 개시될 때까지 예산안이 의결되지 못한 때에는 정부는 국회에서 예산안이 의결될 때까지 다음의 목적을 위한 경비는 전년도 예산에 준하여 집행할 수 있다.",
      },
    ],
    language: [
      {
        HTML: "HTML, CSS, JavaScript, jQuery를 활용해 제작한 반응형 웹 사이트입니다. 스크롤 이벤트를 활용해 보다 동적인 사이트를 제작하고자 했습니다",
      },
      {
        CSS: "HTML, CSS, JavaScript, jQuery를 활용해 제작한 반응형 웹 사이트입니다. 스크롤 이벤트를 활용해 보다 동적인 사이트를 제작하고자 했습니다",
      },
      {
        JS: "HTML, CSS, JavaScript, jQuery를 활용해 제작한 반응형 웹 사이트입니다. 스크롤 이벤트를 활용해 보다 동적인 사이트를 제작하고자 했습니다",
      },
    ],
    detail: [
      {
        name: "장바구니 페이지",
        content:
          "html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. ",
        image: "/image/project01_main_01.png",
      },
      {
        name: "장바구니 페이지",
        content:
          "html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. ",
        image: "/image/project01_main_02.png",
      },
      {
        name: "장바구니 페이지",
        content:
          "html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. html과 css, 약간의 자바스크립트를 이용한 쇼핑몰 사이트입니다. ",
        image: "/image/project01_main_03.png",
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
