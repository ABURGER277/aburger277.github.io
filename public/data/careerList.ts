export interface Career {
  period: string;
  company: string;
  position: string;
  description?: string;
  responsibilities?: Record<string, string[]>;
}

export const careerList: Career[] = [
  {
    period: "2024.04 - Present",
    company: "Kaoni, 가온아이",
    position: "Frontend Junior Developer",
    description: "회사 그룹웨어 도메인을 사용한 PC톡 애플리케이션을 개발",
    responsibilities: {
      '톡 애플리케이션 웹 버전 개발': [
        'Nuxt3 => Vue3로 마이그레이션',
        '코드 리팩토링 및 중복 컴포넌트 정규화',
        '로컬 DB에서 API호출로 변경됨에 따라 스펙 변경 및 최적화'
      ],
      'WPF와 Nuxt 프레임워크 위에서 신규 기능 개발 및 유지보수 작업': [
        'Nested Popup 과 Modal ESC Handler',
        '나간 상대 재초대',
        '대화방 공지, 게시판',
        '대화방별 카테고리 설정',
        '대화방별 배경화면 설정',
      ],
      'Nuxt2에서 Nuxt3로 Migartion 작업': [
        '코드 리팩토링 및 중복 컴포넌트 정규화',
        'CLI > Vite로 개발 환경 개선',
        'CSS Minification',
        'Vuetify Treeshaking',
        'Nuxt2 대비 번들크기 60%감소',
      ],
    }
  },
  {
    period: "2023.08 - 2024.01",
    company: "KIC 캠퍼스 (국비 학원)",
    position: "Backend Learner",
    responsibilities: {
      'Jquery & Spring을 사용하여 여행계획 및 예약 웹 애플리케이션 개발': [
        '마이페이지 기능 구현(프로필 수정, 즐겨찾기, 회원탈퇴 등)',
        '예약 기능 구현(달력, 예약 조회, 취소, 결제 등)',
        '관리자 페이지 기능 구현(결제 관리, 회원 관리, 여행지 관리 등)',
        '결제 및 예약 로그 저장 구현'
      ],
      'Java & Spring 활용 풀스택 개발자 양성과정': [
        'Java Swing을 이용한 데스크톱 애플리케이션 만들기',
        'Spring Boot + Jqeury를 이용한 웹 애플리케이션 만들기',
      ],
    },
  }
];