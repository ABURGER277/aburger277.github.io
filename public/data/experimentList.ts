export interface Experiment {
  title: string;
  description: string;
  techStacks?: string[]; // 사용 언어, 프레임워크
  used?: string[]; // 사용 라이브러리, 호스팅 툴 정리
  link?: string;
  gitLink?: string;
  imgSrc?: string;
}

export const experiments: Experiment[] = [
{
    title: "Portfolio",
    description: `(현재 사이트)
      Vue3를 사용한 포트폴리오 웹사이트.
      vueUse라이브러리를 사용하여 스크롤 이벤트 처리와 LocalStorage 테마처리, 복사 이벤트 구현.
      GSAP라이브러리로 랜딩페이지 에니메이션 구현.
      공용 컴포넌트 CommonImage를 만들어 svg icon / image를 동시에 처리 가능.
      vite-plugin-svg-icons 플러그인을 사용하여 svg 아이콘 최적화.
      css-vars를 사용한 다중 테마.`,
    techStacks: ["Vue.js", "Typescript"],
    used: ["vueUse", "githubPage", "Vite", "GSAP", "vite-plugin-svg-icons", "css-vars"],
    link: "https://aburger277.github.io/",
    gitLink: "https://github.com/ABURGER277/aburger277.github.io",
    imgSrc: "https://aburger277.github.io/images/profile_image.jpg",
  },
  {
    title: "Todo-List (WindowApp)",
    description: `Node Electron 기반 Todo-list 데스크톱 애플리케이션을 제작.`,
    techStacks: ["Electron", "Javascript"],
    // link: "https://google.com",
    // gitLink: "https://google.com",
    imgSrc: "https://aburger277.github.io/images/todo-list.png",
  },
  {
    title: "T.I.L",
    description: `학습한 내용을 찾아보기 쉽게 정리해놓은 문서 아카이브.
      공부와 동시에 문서 정리를 위한 마크다운 문법 연습겸 마크다운으로 작성했습니다.`,
    used: ["Markdown", "Github Actions"],
    gitLink: "https://github.com/ABURGER277/TIL",
    imgSrc: "https://aburger277.github.io/images/til.png",
  },
  {
    title: "Playground",
    description: `평소에 헥갈리는 Javascript, CSS 테스트를 위해 각종 실험을 기록한 웹 아카이브.
      Vercel에 배포하여 깃허브 페이지가 아닌 외부에서 접근 가능하도록 구현.
      flex, grid, transition, animation 테스트 진행.
      VanillaJS로 라우팅 및 이벤트 처리.`,
    techStacks: ["vanillaJS", "CSS", "HTML"],
    used: ["Vercel"],
    link: "https://playground-bice-three.vercel.app",
    gitLink: "https://github.com/ABURGER277/Playground",
    imgSrc: "https://aburger277.github.io/images/playground.png",
  },
];