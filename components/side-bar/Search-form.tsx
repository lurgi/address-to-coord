"use client";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardHeader } from "../ui/card";
import axios from "axios";
import addressesStore from "@/lib/store/Search-store";

const formSchema = z.object({
  address: z.string().min(2, {
    message: "정확한 주소를 입력해주세요.",
  }),
});

const SearchForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
    },
  });

  const { setAddresses, setIsLoading } = addressesStore((state) => state);

  const onSubmit = async ({ address }: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    const response = await axios.post("/api/address-to-coord", { address });
    setAddresses(response.data);
    setIsLoading(false);
  };
  return (
    <Card>
      <CardContent className="p-0">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <CardHeader>
                    <FormLabel className="text-xl font-semibold">
                      주소를 입력하세요.
                    </FormLabel>
                    <FormDescription className="text-md">
                      정확한 도로명 주소 혹은 지번 주소를 입력하세요.
                    </FormDescription>
                  </CardHeader>
                  <CardContent>
                    <FormControl className="h-12">
                      <Input
                        className="text-lg"
                        placeholder="주소를 입력하세요."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                    <div className="flex justify-center pt-6">
                      <Button type="submit">주소 검색</Button>
                    </div>
                  </CardContent>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SearchForm;
