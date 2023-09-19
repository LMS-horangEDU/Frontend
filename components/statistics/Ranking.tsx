import React from 'react';

const Ranking = () => {
    const mockData = new Map([
        ['호랑 중학교 3학년 4반', 334],
        ['불암 중학교 3학년 5반', 200],
        ['태랑 중학교 3학년 1반', 180],
        ['공릉 중학교 2학년 3반', 120],
        ['성수 중학교 3학년 4반', 70],
    ]);
    const myScoreMockData = {
        school: '호랑 중학교 1학년 2반',
        score: 23,
    };

    return (
        <div>
            <h2>랭킹</h2>
            <ul>
                <li>
                    <p>
                        {myScoreMockData.school}
                        <span>{myScoreMockData.score}</span>
                    </p>
                </li>
                {Array.from(mockData).map(([school, score]) => (
                    <li key={school}>
                        <p>
                            {school}
                            <span>{score}</span>
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Ranking;
