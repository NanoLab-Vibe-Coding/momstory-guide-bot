export interface ChatAnswer {
  title: string;
  imageUrl?: string;
  content: string[];
  isTable?: boolean;
  isLink?: boolean;
}

export interface ChatQuestion {
  id: string;
  icon: string;
  label: string;
  question: string;
  answer: ChatAnswer;
}

export const chatQuestions: ChatQuestion[] = [
  {
    id: "date",
    icon: "🗓",
    label: "행사일정",
    question: "행사 날짜가 언제인가요?",
    answer: {
      title: "🗓 행사 날짜",
      imageUrl: "/assets/event-date.jpg",
      content: ["행사 날짜는 '2025년 10월 18일(토)' 입니다."]
    }
  },
  {
    id: "time",
    icon: "⏰",
    label: "행사시간",
    question: "행사 시간이 어떻게 되나요?",
    answer: {
      title: "⏰ 행사 시간",
      imageUrl: "/assets/event-time.jpg",
      content: [
        "당일 행사는 오전 10시부터 오후 1시까지 진행될 예정입니다.",
        "원활한 진행을 위해 오전 9:30까지 입장 부탁드려요!"
      ]
    }
  },
  {
    id: "location",
    icon: "⛳",
    label: "행사장소",
    question: "행사 장소가 어디인가요?",
    answer: {
      title: "⛳ 행사 장소",
      imageUrl: "/assets/event-place.jpg",
      content: ["행사는 실내 체육관인 호암 체육관에서 진행됩니다. 구체적인 주소는 '충주시 중원대로 3306 (호암동), 호암 체육관' 입니다. 참고하시길 바랍니다.",
        "",
        "대중교통 이용시 참고하시기 바랍니다.",
        "",
        "버스 안내 : 100, 110, 120, 200, 200-1, 614 이용 후 '호암체육관' 정류장에서 하차하시면 됩니다."
      ]
    }
  },
  {
    id: "items",
    icon: "🎒",
    label: "준비물",
    question: "준비물이 무엇인가요?",
    answer: {
      title: "🎒 준비물",
      imageUrl: "/assets/supplies.jpg",
      content: [
        "'돗자리 / 쓰레기봉투 / 간단한 간식 / 물 / 물티슈 또는 휴지' 등을 챙겨주세요."
      ]
    }
  },
  {
    id: "dresscode",
    icon: "👕",
    label: "드레스코드",
    question: "드레스코드가 어떻게 되나요?",
    answer: {
      title: "👕 드레스코드",
      imageUrl: "/assets/dress-code.jpg",
      content: [
        "자녀는 '유치원 체육복, 양말, 운동화' 착용을 부탁드립니다.",
        "",
        "가족분들은 '흰색 상의, 편안한 바지, 운동화' 착용을 권장합니다.",
        "",
        "치마, 크록스, 샌들 등은 위험할 수 있으니 피해주시면 감사드리겠습니다."
      ]
    }
  },
  {
    id: "parking",
    icon: "🚗",
    label: "주차",
    question: "주차 공간이 있나요?",
    answer: {
      title: "🚗 주차 공간",
      imageUrl: "/assets/parking.jpg",
      content: [
        "체육관 자체에 50대 정도의 차량을 수용할 수 있는 주차공간이 마련되어있습니다. 차량을 가져오신 분들은 이용하시길 바랍니다.",
        "",
        "가급적이면, 아이들과 가을 하늘도 보고, 즐거운 대화도 나누는 도보 이동을 부탁드립니다.",
        "",
        "주차 자리가 부족할 경우, 호암지 북단 문화동에 있는 공용주차장 이용 바랍니다."
      ]
    }
  },
  {
    id: "schedule",
    icon: "📋",
    label: "타임테이블",
    question: "행사 타임테이블이 어떻게 되나요?",
    answer: {
      title: "📋 행사 타임테이블",
      imageUrl: "/assets/timetable.jpg",
      isTable: true,
      content: [
        "10:00~10:30|등원 및 자리 정돈, 명찰 부착",
        "10:30~10:50|개회식 및 준비운동",
        "10:50~11:20|1부. 몸풀기 및 협동\n• 만 3세: 공 운반\n• 만 4세: 친구야, 같이 가자\n• 만 5세: O, X 퀴즈",
        "11:20~11:50|2부. 유아 개인 및 단체\n• 계주(4인 1조)",
        "11:50~12:30|3부. 가족참여 활동\n• 줄다리기, 신발 던지기, 가족 응원",
        "12:30~12:50|4부. 마무리 및 시상",
        "12:50~13:00|폐회식 및 귀가 지도"
      ]
    }
  },
  {
    id: "seats",
    icon: "🪑",
    label: "자리배치도",
    question: "각 반 자리는 어디에 있나요?",
    answer: {
      title: "🪑 자리배치도",
      imageUrl: "/assets/seats.jpg",
      content: [
        "자리 배치도를 참고해주세요."
      ]
    }
  },
  {
    id: "inquiry",
    icon: "⚠",
    label: "추가 문의",
    question: "추가로 궁금한 사항이 있어요!",
    answer: {
      title: "⚠ 추가 문의",
      isLink: true,
      content: [
        "추가로 궁금한 사항은 다른 가족들도 궁금할 수 있으니 아래 링크를 통해 함께 공유해주세요!",
        "",
        "https://docs.google.com/forms/d/e/1FAIpQLSe2aQaef6s_yYCTNngh8FFxn8a7LtH7Vzw54FlRjUAkz7IJag/viewform"
      ]
    }
  }
];
