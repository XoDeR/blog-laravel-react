import { useForm } from "react-hook-form";
import { useCreateArticle } from "../hooks/useArticles";
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

interface Props {
  onSuccess: () => void;
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

const ArticleCreateForm = ({ onSuccess }: Props) => {
  const createMutation = useCreateArticle();

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    createMutation.mutate(data, {
      onSuccess: onSuccess,
    });
  };

  const isLoading = createMutation.isPending;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
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
                  placeholder="Write article content..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="outline" size="sm" disabled={isLoading}>
          {isLoading ? "Saving..." : "Create Article"}
        </Button>
        {createMutation.isError && (
          <p>Error creating article: {createMutation.error.message}</p>
        )}
      </form>
    </Form>
  );
};

export default ArticleCreateForm;
