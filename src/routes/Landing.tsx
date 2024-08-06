import { useBackdrop } from "@/components/backdrop-provider";
import { Button } from "@/components/ui/button";

function Landing() {
  const { setBackdrop } = useBackdrop();
  const splash =
    "https://image.tmdb.org/t/p/original//2RVcJbWFmICRDsVxRI8F5xRmRsK.jpg";

  setBackdrop(splash);
  return (
    <main className="px-4 lg:px-28 bg-black-pearl">
      <div className="flex justify-center pt-3">
        <Button className="bg-green-500 text-gray-50 hover:bg-green-700">
          Get Started — It's free!
        </Button>
      </div>
      <h1 className="text-xl text-muted-foreground text-center py-5">
        The social network for film lovers.
      </h1>
    </main>
  );
}

export default Landing;
