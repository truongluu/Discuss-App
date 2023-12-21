import { Button } from "@nextui-org/react";
import { useFormStatus } from "react-dom";
interface FormButtonProps {
  children: React.ReactNode;
}
export default function FormButton(props: FormButtonProps) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" isLoading={pending}>
      {props.children}
    </Button>
  );
}
