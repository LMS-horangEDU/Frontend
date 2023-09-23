export interface MagnitudeInfoData {
  quiz: {
    complete: Array<string>, // 내가 푼 퀴즈 도큐먼트 id 리스트
    correctRate: number, // 정답률
    point: number, // 퀴즈로 얻은 포인트
  },
  video: {
    complete: Array<string>, // 수강완료 강의 리스트
    progress: Array<string>, // 수강중인 강의 리스트
  }
}