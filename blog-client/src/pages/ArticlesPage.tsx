import ArticleCreateForm from "@/components/ArticleCreateForm";
import ArticleEditForm from "@/components/ArticleEditForm";
import ArticleList from "@/components/ArticleList";
import { Modal } from "@/components/Modal";
import { Button } from "@/components/ui/button";
import type { Article } from "@/types";
import { useState } from "react";

const ArticlesPage = () => {
  const [creatingArticle, setCreatingArticle] = useState<boolean>(false);
  const [editingArticle, setEditingArticle] = useState<boolean>(false);
  const [editingArticleData, setEditingArticleData] = useState<
    Article | undefined
  >(undefined);

  const handleCreate = () => {
    setCreatingArticle(true);
  };

  const handleCreateFormSuccess = () => {
    setCreatingArticle(false);
  };

  const onEdit = (article: Article) => {
    setEditingArticleData(article);
    setEditingArticle(true);
  };

  const handleEditFormSuccess = () => {
    setEditingArticleData(undefined);
    setEditingArticle(false);
  };

  const onEditOpenChange = (open: boolean) => {
    if (open) {
      if (editingArticleData) {
        setEditingArticle(true);
      } else {
        // we don't know which article should be edited
        setEditingArticle(false);
      }
    } else {
      setEditingArticleData(undefined);
      setEditingArticle(false);
    }
  };

  return (
    <div>
      <div className="mx-auto max-w-6xl p-4">
        <Button variant="outline" size="sm" onClick={() => handleCreate()}>
          Create Article
        </Button>
      </div>
      <ArticleList onEdit={onEdit} />
      <Modal
        open={creatingArticle}
        onOpenChange={setCreatingArticle}
        title="Create article"
        description="Fill in article details."
      >
        <ArticleCreateForm onSuccess={handleCreateFormSuccess} />
      </Modal>
      <Modal
        open={editingArticle}
        onOpenChange={onEditOpenChange}
        title="Edit article"
        description="Edit article details."
      >
        <ArticleEditForm
          onSuccess={handleEditFormSuccess}
          article={editingArticleData}
        />
      </Modal>
    </div>
  );
};

export default ArticlesPage;
