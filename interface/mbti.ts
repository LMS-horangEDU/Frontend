interface MbtiInfoData {
    myMbti: {
        type: string,// 영어 MBTI 타입
        typeName: string, // MBTI 한글이름
        desc: string, // 설명
        job: string, // 관련 예시 직업
    },
    allMbti: Array<{ // 전체 MBTI 정보 리스트
        type: string, // 영어 MBTI 타입
        typeName: string, // MBTI 한글이름
        desc: string, // 설명
        job: string, // 관련 예시 직업
    }>
}