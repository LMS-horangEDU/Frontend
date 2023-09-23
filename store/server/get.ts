import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const baseURL = process.env.NEXT_PUBLIC_SERVER_API_URL

export const lmsPageGetApi = {
    /** homepage */
    useGetMainData: () => {
        return useQuery(
            ["mainData"], async () => {
            const { data } = await axios.get( `${baseURL}` + `/main`);
            return data;
        })
    },

     useGetMagnitudeData: () => {
        return useQuery(
            ["currentData"], async () => {
            const { data } = await axios.get( `${baseURL}` + `/magnitude`);
            return data;
        })
    },
     
      useGetBadgeData: () => {
        return useQuery(
            ["badgeData"], async () => {
            const { data } = await axios.get( `${baseURL}` + `/badge`);
            return data;
        })
    },

       useGetRankData: () => {
        return useQuery(
            ["rankData"], async () => {
            const { data } = await axios.get( `${baseURL}` + `/rank`);
            return data;
        })
    },
       
       useGetMbtiData: () => {
        return useQuery(
            ["mbtiData"], async () => {
            const { data } = await axios.get( `${baseURL}` + `/mbti`);
            return data;
        })
    },
}
