import { useArticles } from "@/hooks/useArticles";
import ArticleCard from "./ArticleCard";
import type { Article } from "@/types";

interface Props {
  onEdit: (article: Article) => void;
}

const ArticleList = ({ onEdit }: Props) => {
  const { data: articles, isLoading, isError } = useArticles();

  if (isLoading) return <div>Loading articles...</div>;

  if (isError) return <div>Error fetching articles.</div>;

  return (
    <div className="mx-auto max-w-6xl p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {articles?.map((article) => (
          <ArticleCard key={article.id} article={article} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
