import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReadNews from "../News/ReadNews";
import Discussed from "../News/Discussed";
import GoodNews from "../News/GoodNews";

const SaidTabs = () => {
  return (
    <Tabs defaultValue="Read" defaultChecked className="bg-white">
      <TabsList>
        <TabsTrigger value="Read" className="font-semibold">
          পঠিত
        </TabsTrigger>
        <TabsTrigger value="Discussed" className="font-semibold">
          আলোচিত
        </TabsTrigger>
        <TabsTrigger value="GoodNews" className="font-semibold">
          সুখবর
        </TabsTrigger>
      </TabsList>
      <TabsContent value="Read">
        {/* this is last news  */}
        <ReadNews />
      </TabsContent>
      <TabsContent value="Discussed">
        {/* this is important news */}
        <Discussed />
      </TabsContent>
      <TabsContent value="GoodNews">
        {/* this is important news */}
        <GoodNews />
      </TabsContent>
    </Tabs>
  );
};

export default SaidTabs;
