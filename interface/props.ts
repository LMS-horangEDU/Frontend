export interface MagnitudeProps {
      attendance?: Array<{completeClassTime?: number, data?: string }>,
    magnitude?: {
    totalVideoCount?: number,
    completeVideoCount?: number,
    progressVideoTitle?: string,
    lastQuizTitle?: string,
    lastQuizLevel?: string,
    },
    mbtiPoint?: {
    type_id?: string,
    p_pt?: number,
    c_pt?: number,
    d_pt?: number,
    b_pt?: number,
    a_pt?: number,
    t_pt?: number,
    r_pt?: number,
    v_pt?: number,
    },
    mbtiTitle?: string,
    badgeCount?: number,
}