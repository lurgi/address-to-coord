import { Address } from "../Side-bar";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const SearchResults = ({ addresses }: { addresses: Address[] | undefined }) => {
  console.log(addresses);
  return (
    <>
      <Card className="mt-8 h-[400px]">
        <CardHeader>
          <CardTitle className="text-xl">주소 목록</CardTitle>
        </CardHeader>
        <CardContent>
          {addresses?.length === 0 ? (
            <div>정확한 주소를 입력하세요.</div>
          ) : (
            addresses?.map((address, index) => (
              <Button
                key={index}
                className="w-full justify-start"
                variant={"outline"}
              >
                Card Content
              </Button>
            ))
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default SearchResults;
