import ArticleCreateForm from "@/components/ArticleCreateForm";
import ArticleList from "@/components/ArticleList";
import { Modal } from "@/components/Modal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ArticlesPage = () => {
  const [creatingArticle, setCreatingArticle] = useState<boolean>(false);

  const handleCreate = () => {
    setCreatingArticle(true);
  };

  const handleCreateFormSuccess = () => {
    setCreatingArticle(false);
  };

  return (
    <div>
      <div className="mx-auto max-w-6xl p-4">
        <Button variant="outline" size="sm" onClick={() => handleCreate()}>
          Create Article
        </Button>
      </div>
      <ArticleList />
      <Modal
        open={creatingArticle}
        onOpenChange={setCreatingArticle}
        title="Create article"
        description="Fill in article details."
      >
        <ArticleCreateForm onSuccess={handleCreateFormSuccess} />
      </Modal>
    </div>
  );
};

export default ArticlesPage;
