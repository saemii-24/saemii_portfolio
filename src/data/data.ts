export interface DataType {
  id: number;
  subTitle: string;
  preview: string;
  previewImg: string;
  active: boolean;
  click: boolean;
  previewPage?: object[];
  language?: object[];
}

export const data: DataType[] = [
  {
    id: 1,
    subTitle: "식물 쇼핑몰",
    preview:
      "HTML과 CSS, JavaScript를 활용해 만든 식물 쇼핑몰 입니다. 웹표준을 지켜 제작했습니다. ",
    previewImg: "/image/project01.jpg",
    active: false,
    click: false,
    previewPage: [
      { 메인: "/image/project01_main_01.png" },
      { 서브1: "/image/project01_main_02.png" },
      { 서브2: "/image/project01_main_03.png" },
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
  },
  {
    id: 2,
    subTitle: "지브리 사이트",
    preview:
      "HTML, CSS, JavaScript, jQuery를 활용해 제작한 반응형 웹 사이트입니다. 스크롤 이벤트를 활용해 보다 동적인 사이트를 제작하고자 했습니다.",
    previewImg: "/image/project02.jpg",
    active: false,
    click: false,
  },
  {
    id: 3,
    subTitle: "호주 여행 사이트",
    preview:
      "팀프로젝트로 3명의 팀원이 함께 제작한 반응형 여행 사이트입니다. 저는 메인페이지를 담당했으며, 현재 호주의 날씨와 시간을 위해 Luxon 라이브러리와 Weather API를 활용했습니다. ",
    previewImg: "/image/project03.jpg",
    active: false,
    click: false,
  },
  {
    id: 4,
    subTitle: "교보문고 클론코딩",
    preview:
      "HTML, CSS, JAVASCIPT, jQuery, AJAX를 활용해 제작한 교보문고 Ebook의 클론코딩 사이트입니다. 책의 이미지는 모두 API를 활용해 제작하였으며, 메인, 서브, 서브2(미리보기)의 세 가지 사이트를 제작했습니다",
    previewImg: "/image/project04.jpg",
    active: false,
    click: false,
  },
  {
    id: 5,
    subTitle: "체크카드 검색 사이트",
    preview:
      "React와 Redux를 이용해 제작한 체크카드 검색 사이트 입니다. 스크롤 이벤트에는 GSAP을 활용했습니다.",
    previewImg: "/image/project05.jpg",
    active: false,
    click: false,
  },
  {
    id: 6,
    subTitle: "인천공항 대쉬보드",
    preview: "인천공항과 관련된 API를 활용해 제작한 대쉬보드입니다.",
    previewImg: "/image/project06.jpg",
    active: false,
    click: false,
  },
];
