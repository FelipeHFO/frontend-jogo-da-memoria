import axios from "axios";

export default function useRequest() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const sendGet = async (route: string, token?: string) =>
    axios.get(`${baseUrl}/${route}`, {
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

  const sendPost = async (route: string, data: unknown, token?: string) =>
    axios.post(`${baseUrl}/${route}`, {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

  const sendDelete = async (route: string, data: unknown, token?: string) =>
    axios.delete(`${baseUrl}/${route}`, {
      method: 'delete',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

  return { sendGet, sendPost, sendDelete };
}
