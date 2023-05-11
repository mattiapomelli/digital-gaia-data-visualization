import { CreatePromptInput, useCreatePrompt } from "@/lib/useCreatePrompt";
import { useForm } from "react-hook-form";
import { Input } from "./Input";
import Button from "./Button";

const CreatePromptForm = ({ onSuccess }: { onSuccess?: () => void }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreatePromptInput>();

  const { mutate: createPrompt } = useCreatePrompt({
    onSuccess,
  });

  const onSubmit = handleSubmit((data) => {
    createPrompt({
      title: data.title,
      text: data.text,
    });
    reset();
  });

  return (
    <div className="mx-auto mt-12 max-w-md">
      <h1 className="mb-4 text-center text-2xl font-bold">
        Publish your prompt
      </h1>
      <p className="mb-1 text-center">
        Got interesting results from the AI assistant? Publish your prompt to
        the community help other farmers get the same results.
      </p>
      <form className="flex w-full flex-col gap-3" onSubmit={onSubmit}>
        <Input
          label="Title"
          type="text"
          {...register("title", { required: "Title is required" })}
          error={errors.title?.message}
        />
        <Input
          label="Prompt"
          type="Prompt"
          {...register("text", { required: "Prompt is required" })}
          error={errors.text?.message}
        />
        <Button className="mt-2">Publish prompt</Button>
      </form>
    </div>
  );
};

export default CreatePromptForm;
