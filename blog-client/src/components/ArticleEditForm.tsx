import type { Article } from "@/types";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUpdateArticle } from "@/hooks/useArticles";

interface Props {
  onSuccess: () => void;
  article: Article | undefined;
}

const formSchema = z.object({
  title: z
    .string()
    .min(3, {
      message: "Title must be at least 3 characters.",
    })
    .max(255, {
      message: "Title must be less than 256 characters.",
    }),
  content: z
    .string()
    .min(3, {
      message: "Content must be at least 3 characters.",
    })
    .max(1500, {
      message: "Content must not be longer than 1500 characters.",
    }),
});

const ArticleEditForm = ({ onSuccess, article }: Props) => {
  const updateMutation = useUpdateArticle();

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    updateMutation.mutate(
      { ...data, id: article!.id },
      {
        onSuccess: onSuccess,
      }
    );
  };

  const isLoading = updateMutation.isPending;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: article?.title || "",
      content: article?.content || "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Title..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Edit article content..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="outline" size="sm" disabled={isLoading}>
          {isLoading ? "Saving..." : "Update Article"}
        </Button>
        {updateMutation.isError && (
          <p>Error updating article: {updateMutation.error.message}</p>
        )}
      </form>
    </Form>
  );
};

export default ArticleEditForm;
