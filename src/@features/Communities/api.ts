import { api, Response } from '@/config/axios';
import { CommunityListRes, CommunityDetailRes } from './type';

const BASEURL = 'communities';

/** 게시글 목록 조회 */
const CommunityCategory = ['GENERAL', 'VOTE', 'TIP', 'CHALLENGE_CERTIFICATION'] as string[];
export const getCommunityList = async (category: string | null): Promise<CommunityListRes> => {
  let url = BASEURL;

  if (category && CommunityCategory.includes(category)) {
    const searchParams = new URLSearchParams();
    searchParams.append('category', category);

    url = `${BASEURL}?${searchParams.toString()}`;
  }

  const res = await api.get<Response<CommunityListRes>>(url);

  return res.data.data;
};

/** 게시글 상세조회 */
export const getCommunityDetail = async (id: number): Promise<CommunityDetailRes> => {
  const url = `${BASEURL}/${id}`;

  const res = await api.get<Response<CommunityDetailRes>>(url);

  return res.data.data;
};
