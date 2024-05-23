import { IPostRequest } from '@/dto/request';
import { IPostResponse } from '@/dto/response';
import { axios } from '@/utils';

async function getPosts({ Id }: { Id: string }) {
  return axios.get<IPostResponse[]>('/posts?userId=' + Id).then((res) => res.data);
}

async function getPostById({ Id }: { Id: string }) {
  return axios.get<IPostResponse>('/posts/' + Id).then((res) => res.data);
}

async function deletePostById({ Id }: { Id: string }) {
  return axios.delete<{}>('/posts/' + Id).then((res) => res.data);
}

async function createPost({ post }: { post: IPostRequest }) {
  return axios.post<{}>('/posts', post).then((res) => res.data);
}

async function editPostById({ Id, post }: { Id: string, post: IPostRequest }) {
  return axios.put<{}>('/posts/' + Id, post).then((res) => res.data);
}

const postService = {
  getPosts,
  getPostById,
  deletePostById,
  createPost,
  editPostById,
};

export default postService;
