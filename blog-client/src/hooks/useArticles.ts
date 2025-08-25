import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from "../api/api";
import type { Article } from "../types";

export const useArticles = () => {
  return useQuery<Article[]>({
    queryKey: ["articles"],
    queryFn: async () => {
      const { data } = await api.get("/articles");
      return data.data;
    },
  });
};

export const useCreateArticle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newArticle: Partial<Article>) =>
      api.post("/articles", newArticle),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
};

export const useUpdateArticle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (updatedArticle: Article) =>
      api.put(`/articles/${updatedArticle.id}`, updatedArticle),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
};

export const useDeleteArticle = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => api.delete(`/articles/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["articles"] });
    },
  });
};
