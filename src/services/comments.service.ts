import { ICommentResponse } from '@/dto/response';
import { axios } from '@/utils';

async function getComments({ Id }: { Id: string }) {
  return axios.get<ICommentResponse[]>('/comments?postId=' + Id).then((res) => res.data);
}

const commentsService = {
  getComments,
};

export default commentsService;
