import { UserResponse } from "../types";
import api from "./api";

export const getAllUsers = async (
  perPage?: number
): Promise<UserResponse[]> => {
  const { data } = await api.get<UserResponse[]>(
    `users${!!perPage ? `?per_page=${perPage}` : ""}`
  );

  return data;
};

export const getUserByName = async (name: string): Promise<UserResponse> => {
  const { data } = await api.get<UserResponse>(`users/${name}`);

  return data;
};
