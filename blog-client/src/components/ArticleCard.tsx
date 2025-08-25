import type { Article } from "@/types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { useDeleteArticle } from "@/hooks/useArticles";

interface Props {
  article: Article;
}

const ArticleCard = ({ article }: Props) => {
  const deleteMutation = useDeleteArticle();

  const handleDelete = (articleId: number) => {
    if (window.confirm("Are you sure you want to delete this article?")) {
      deleteMutation.mutate(articleId);
    }
  };

  return (
    <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle className="text-xl">{article.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{article.content}</p>
      </CardContent>
      <CardFooter className="mt-auto">
        <Button variant="secondary" size="sm" onClick={() => {}}>
          Edit
        </Button>
        <Button
          variant="destructive"
          size="sm"
          disabled={deleteMutation.isPending}
          onClick={() => handleDelete(article.id)}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
